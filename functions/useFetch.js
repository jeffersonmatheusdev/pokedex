import { useEffect, useState } from "react";

export default function useFetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=64&offset=0')
            .then((data) => data.json())
            .then((data) => {
                data.results.map((item) => {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                        .then((data) => data.json())
                        .then((dataFetch) => {
                            const pokemon = {
                                id: dataFetch.id,
                                name: item.name,
                                url_image: dataFetch.sprites.other.dream_world.front_default,
                                types: dataFetch.types
                            };
                            setData(
                                prev => [
                                    ...prev,
                                    pokemon
                                ]
                            )
                        })
                })
            })
    }, [])

    return data.filter((v, i, a) => a.findIndex(v2 => (v2.id === v.id)) === i);
}
