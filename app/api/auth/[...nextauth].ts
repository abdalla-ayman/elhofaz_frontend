import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",             
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: any, req) {
        // const baseUrl = 'http://localhost:3000/api/v1/admin-auth/login';
        const baseUrl = "http://localhost:8000/api/users/login";
        const { username, password } = credentials;
        const response = await fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const login = await response.json();
        console.log(login);

        if (login.success) {
          const name = login.account.username;
          return { ...login.account, name, accessToken: login.token };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
      credentials: {},
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {

      console.log("workgin")
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

export default NextAuth(authOptions);
