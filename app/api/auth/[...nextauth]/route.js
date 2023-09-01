import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentails",
      name: "app",
      credentials: {
        email: {
          label: "username",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        };

        const res = await fetch("http://localhost:8000/api/users/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { user } = await res.json();
        if (!res.ok) {
          throw new Error(user.message);
        }
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
    // ...add more providers here
  ],
  pages:{
    signIn: '/auth/login'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
