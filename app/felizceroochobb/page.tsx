import Image from 'next/image'

export default function Greetings() {
	return (
		<main className='flex flex-col items-center'>
			<div className='text-6xl'>
				Feliz 08 bb 💕💕💕 te quiero muchoooooo
				
			</div>
			<span className='text-xs mt-4'>
					(no se si estoy loco o cuando parpadeas el corazon late )
				</span>
			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
				width={100}
				height={100}
				alt=""
			/>
			<Image
				src="/user-luca.jpg"
				height={500}
				width={500}
				alt=""
			/>
			<p>Pipipipip, ya quiero que vengas para ir a la playita </p>
		</main>
	)
}
