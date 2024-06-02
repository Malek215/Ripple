import { SearchModel } from "@/models/search.model";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import mongoose from "mongoose";
import axios from "axios";

export const searchRouter = createTRPCRouter({
  getAllByUserId: protectedProcedure.query(async ({ ctx }) => {
    return SearchModel.find({ userId: ctx.session.user.id }).lean();
  }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        sessionId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const newSearch = await SearchModel.create({
        _id: new mongoose.Types.ObjectId(),
        name: input.name,
        userId: ctx.session.user.id,
        sessionId: input.sessionId,
        createdAt: new Date(),
        expired: false,
        messages: [],
        result: [],
      });
      const search = await SearchModel.findById(newSearch._id).lean();
      return search;
    }),
  delete: protectedProcedure
    .input(
      z.object({
        searchId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return SearchModel.findByIdAndDelete(input.searchId);
    }),
  addMessage: protectedProcedure
    .input(
      z.object({
        searchId: z.string(),
        type: z.enum(["user", "bot"]),
        content: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return SearchModel.findByIdAndUpdate(
        input.searchId,
        {
          $push: {
            messages: {
              type: input.type,
              content: input.content,
            },
          },
        },
        { new: true },
      );
    }),
  addResult: protectedProcedure
    .input(
      z.object({
        searchId: z.string(),
        result: z.array(z.string()),
      }),
    )
    .mutation(async ({ input }) => {
      return SearchModel.findByIdAndUpdate(
        input.searchId,
        {
          $push: {
            result: { $each: input.result },
          },
        },
        { new: true },
      );
    }),
  updateName: protectedProcedure
    .input(
      z.object({
        searchId: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return SearchModel.findByIdAndUpdate(
        input.searchId,
        { name: input.name },
        { new: true },
      );
    }),
  getSession: protectedProcedure
    .input(
      z.object({
        maxResults: z.number(),
        threshold: z.number(),
        minRequests: z.number(),
        maxRequests: z.number(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const url = `${process.env.INFLUENCER_API_URL}/search/interactive/get_session`;
        const response = await axios.post(url, input);
        console.log("Response from microservice:", response.data);
        return response;
      } catch (err) {
        return err;
      }
    }),
});
