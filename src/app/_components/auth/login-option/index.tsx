"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

export interface LoginOptionProps {
  provider: ClientSafeProvider;
}

const LoginOption: React.FC<LoginOptionProps> = ({ provider }) => {
  return (
    <div>
      {provider.name === "Google" ? (
        <GoogleButton
          onClick={() => {
            signIn(provider.id);
          }}
        />
      ) : (
        <button
          onClick={() => {
            signIn(provider.id);
          }}
        >
          Sign in with {provider.name}
        </button>
      )}
    </div>
  );
};

export default LoginOption;
