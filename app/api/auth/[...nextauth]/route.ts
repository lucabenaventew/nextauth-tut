import { sql } from '@vercel/postgres'
import { compare } from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
  pages: {
    signIn: '/login'
  },
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				const res = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}
        `
				const user = res.rows[0]

				const passwordCorrect = await compare(
					credentials?.password || '',
					user.password
				)

				console.log({ passwordCorrect })

				if (passwordCorrect) {
					return {
						id: user.id,
						email: user.email,
					}
				}
				return null
			},
		}),
	],
})

export { handler as GET, handler as POST }
