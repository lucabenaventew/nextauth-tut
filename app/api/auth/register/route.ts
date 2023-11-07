import { sql } from '@vercel/postgres'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const { email, password } = await request.json()
		// validate email and password with a library like zod
		console.log({ email, password })
		const hashedPassword = await hash(password, 10)

		const res = await sql`
    INSERT INTO users (email, password)
    VALUES (${email}, ${hashedPassword})
    `
	} catch (e) {
		console.log({ e })
	}

	return NextResponse.json({ message: 'success' })
}
