import InfluencerPage from "@/app/_components/influencer/influencer-page";
import { api } from "@/trpc/server";
import { error } from "console";
import Error from "@/app/_components/errorPage/error";
import { Suspense } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export interface SimilarInfluencer {
  id: string;
  score: number;
}

export default async function Page({ params }: { params: { id: string } }) {
  const influencer = await api.influencer.getOne(params.id);
  const similar = await api.influencer.getSimilarInfluencers(params.id);
  const ids = similar.map((influencer: SimilarInfluencer) => influencer.id);
  const suggestedInfluencers = await api.influencer.getByIds(ids);
  if (!influencer) {
    return (<Error error="Influencer not found" />)
  }
  return (
      <InfluencerPage
        influencer={influencer}
        suggestedInfluencers={suggestedInfluencers.slice(0, -1)}
      />
  );
}
