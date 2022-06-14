import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "424699726458-ep04rmmdglvo8gvoog7ae3hgpjh0psmt.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  
  pages:{
    signin: "/auth/signin",
  }
})