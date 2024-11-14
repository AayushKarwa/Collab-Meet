import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/user";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here   
  ],
  callbacks:{
    async jwt({token,user,account}){
        console.log('token is: '+JSON.stringify(token,null,2))
        console.log('user: '+JSON.stringify(user,null,2))
        console.log('account: '+JSON.stringify(account,null,2))

        if(user){
            token.id = user.id
        }
        if(account){
            token.accessToken = account.access_token;
        }
        return token;
    },
    async session({ session, token }) {
        session.user.id = token.id
        return session
      },

    async signIn({user,profile}){
        await dbConnect();

        let dbUser = await UserModel.findOne({
            email:user.email
        })
        //if user not found create one

        if(!dbUser){
            dbUser = await UserModel.create({
                name:profile.name,
                email:profile.email,
                profilePicture:profile.picture,
                isVerified:profile.email_verified ? true:false
            })
        }
        user.id = dbUser._id.toString();
        return true;
    }
    
  },
  session:{
    strategy:'jwt',
    maxAge: 90*24*60*60
  },
  pages:{
    signIn: 'user-auth'
  }
}
const handle = NextAuth(authOptions)
export {handle as POST, handle as GET};