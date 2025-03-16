import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({ where: { username: credentials.username}});
        if (user && user.password === credentials.password) {
          return {
            id: user.id,
            name: user.username
          }
        }
        return null;
      },
    }),
  ],
};

