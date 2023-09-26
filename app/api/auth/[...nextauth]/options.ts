import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as any;
        const response = await fetch(
          "https://api.muxlisa.uz/v1/api/users/api-token-auth/",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const user = await response.json();

        console.log("Hello");

        if (user) {
          return user;
        } else null;
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/signin",
  },
};
