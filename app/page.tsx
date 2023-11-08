import Link from "next/link";

export default function Home() {
	return (
	<main className="flex w-screen justify-center h-screen">
		<button>
			<Link href={'/login'}>toca aki</Link>
		</button>
	</main>
	)
}
