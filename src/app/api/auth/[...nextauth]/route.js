import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/user";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        // Assign dbUser._id to token.id if available
        token.id = user.id; 
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async signIn({ user, profile }) {
      await dbConnect();
      let dbUser = await UserModel.findOne({ email: user.email });

      // If user not found, create a new user
      if (!dbUser) {
        dbUser = await UserModel.create({
          name: profile.name,
          email: profile.email,
          profilePicture: profile.picture,
          isVerified: profile.email_verified || false,
        });
      }

      // Set dbUser._id to user.id to be used in jwt callback
      user.id = dbUser._id.toString();
      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/user-auth",
  },
};

const handle = NextAuth(authOptions);
export { handle as POST, handle as GET };
