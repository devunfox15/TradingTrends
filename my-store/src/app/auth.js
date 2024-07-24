import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import bcrypt from "bcrypt"
import { error } from "console"

const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: "/logo.png",
    brandColor: "#1B706C",
  },
  providers: [Google,Github],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Allow localhost during development
      if (process.env.NODE_ENV === 'development' && url.startsWith('http://localhost:3000')) {
        return url
      }
      // Otherwise, use baseUrl or a predefined production URL
      return baseUrl
    }
  },
  debug: process.env.NODE_ENV === 'development',
})