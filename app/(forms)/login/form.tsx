'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function Form() {
  const router = useRouter()
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
      redirect: false
		})

    console.log(res)
    if (!res?.error) {
      router.push('/felizceroochobb')
      router.refresh()
    }

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
			<button type="submit">login</button>
		</form>
	)
}
