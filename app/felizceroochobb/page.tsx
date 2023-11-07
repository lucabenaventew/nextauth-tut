import Image from 'next/image'

export default function Greetings() {
	return (
		<main>
			<div>
				Feliz 08 bb 💕💕💕 te quiero mucho, espero que te guste tu regalito
			</div>
			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
				width={100}
				height={100}
				alt=""
			/>
		</main>
	)
}
