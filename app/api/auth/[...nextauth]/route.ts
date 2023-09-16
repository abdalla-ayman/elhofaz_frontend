import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/users";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: any, req) {
        let { data, code, message } = await login(credentials);
        console.log(data, code, message);

        if (code == 200) {
          const name = data.user.name;
          return { ...data.user, name, accessToken: data.token };
        } else if (code == 402) {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error(JSON.stringify(message));
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        } else {
          throw new Error(JSON.stringify("حدثت مشكلة ما يرجى اعادة المحاولة"));
        }
      },
      credentials: {},
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, ...rest }: any) {
      if (user) {
        token = { accessToken: user.accessToken, user };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
