import Card from "../components/Card";
import Header from "../components/Header";
import useFetch from "../functions/useFetch";

export default function Home() {

  const poke = useFetch();

  return (

    <div
      className="grid w-full h-full"
    >
      <Header />

      <div
        className="relative flex w-full h-full flex-wrap justify-around mt-8"
      >
        {
          poke !== undefined || null
            ?
            poke.map((item) => {
              console.log(item)
              return (
                <Card
                  key={item.id}
                  url_image={item.url_image}
                  poke_num={item.id}
                  poke_name={item.name}
                  types={item.types}
                />
              )
            })
            :
            null
        }

      </div>

    </div>
  )
}