import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Logout from './logout'

const roboto = Roboto({ weight: '400', subsets: ['greek'] })

export const metadata: Metadata = {
	title: 'lucabenaventew',
	description: '',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession()
	return (
		<html lang="en">
			<body className={roboto.className}>
				<nav>
					{!!session && <Logout />}
					{!session && <Link href={'/login'}>login</Link>}
				</nav>
				{children}
			</body>
		</html>
	)
}
