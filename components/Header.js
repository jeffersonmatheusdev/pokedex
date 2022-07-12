export default function Header() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200&display=swap" rel="stylesheet" />

            <div
                className=" flex w-full h-10 bg-gray-600 shadow-sm shadow-gray-700 justify-between"
            >

                <div className="flex ml-4">
                    <img
                        className='flex w-18 h-10'
                        srcSet='./img/poke_1.png'
                    />

                    <img
                        className='flex w-18 h-10'
                        srcSet='./img/poke_2.png'
                    />

                    <img
                        className='flex w-18 h-10'
                        srcSet='./img/poke_3.png'
                    />
                </div>

                <span
                    className="flex text-3xl text-gray-400 font-[Jost] mr-4 translate-y-1"
                >
                    POKEDEX
                </span>

            </div>
        </>
    )
}