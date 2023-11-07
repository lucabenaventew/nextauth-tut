'use client'

import { FormEvent } from 'react'

export default function Form() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				email: formData.get('email'),
				password: formData.get('password'),
			}),
		})
	}
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2">
			<input
				className="border border-black text-black"
				type="email"
				name="email"
			/>
			<input
				className="border border-black text-black"
				type="password"
				name="password"
			/>
			<button type="submit">create account</button>
		</form>
	)
}
