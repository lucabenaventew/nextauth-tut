import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Logout from './logout'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={inter.className}>
				<nav>
					{!!session && <Logout />}
					{!session && <Link href={'/login'}>login</Link>}
				</nav>
				{children}
			</body>
		</html>
	)
}
