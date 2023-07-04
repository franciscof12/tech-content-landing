import Header from "./Header";


export default function Team() {
    const people = [
        {
            name: 'Victor Sánchez Montero',
            role: 'Head of Product',
            imageUrl:
                'src/images/victor.jpeg',
        },
        {
            name: 'Oscar Larroy Rey',
            role: 'Content Tech Lead',
            imageUrl:
                'src/images/oscar.jpeg',
        },
        {
            name: 'Alexander González',
            role: 'Content Tech Specialist',
            imageUrl:
                'src/images/alexander.jpeg',
        },
        {
            name: 'Francisco Ferreira',
            role: 'Content Tech Specialist',
            imageUrl:
                'src/images/fran.jpeg',
        },
    ]

    return (
        <section className="h-screen overflow-x-hidden">
            <Header />
            <div className="py-24 sm:py-20 bg-white">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FFB347] bg-[200%_auto] bg-clip-text text-transparent'>
                            Meet our team !
                        </span></h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Welcome aboard! This platform, full of essential resources and support, is your launchpad to success with Content Tech. 
                            <br />
                            Let&apos;s create greatness together!
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-300">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}


