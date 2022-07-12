import bgColorSelector from "../functions/bgSelector";

function Card({ key, url_image, poke_num, poke_name, types }) {
    return (
        <div
            className="card block w-32 h-40 bg-gray-200 m-4 mb-20 shadow-lg"
            key={key}
        >
            <img
                srcSet={url_image}
                className="w-full h-full rounded-lg"
            />
            <span
                className="block text-poke-text font-bold text-sm"
            >
                {`Nº ${poke_num}`}
            </span>
            <span
                className="block font-bold text-xl capitalize"
            >
                {poke_name}
            </span>
            <div
                className="flex justify-around"
            >
                {
                    types.map((type) => {
                        return (
                            <div
                                className={`flex w-49p h-fit rounded-sm justify-evenly`}
                                style={{ backgroundColor: bgColorSelector(type.type.name) }}
                            >
                                <i
                                    className="text-black font-mono text-sm text-center"
                                >
                                    {type.type.name}
                                </i>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Card;