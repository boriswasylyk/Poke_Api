import { useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"


const PokeCard = ({ url }) => {

    const [ pokemon, getPokemon ] = useFetch(url)
    
    const navigate = useNavigate()

    useEffect(() => {
      getPokemon()
    }, [])
    
    const HandleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`);
      }
      
    const firstType = pokemon?.types[0].type.name
    
  return (
    <article class={`pokecard ${firstType}-border`} onClick={HandleNavigate}>
        <header class={`pokecard_header  ${firstType}-gradient`} >
        <img className="pokecard_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <section className="pokecard_body">
                <h3 class={`pokecard_name ${firstType}-color`} >{pokemon?.name}</h3>
                <ul className="pokecard_types">
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className="pokecard_typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                            
                        ))
                    }
                </ul>
                <hr className="pokecard_hr" />
                <ul className="pokecard_stats">
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className="pokecard_stat" key={statInfo.stat.url}>
                                <h4 className="pokecard_stat_name">{statInfo.stat.name}</h4>
                                <span className={`pokecard_stat_value ${firstType}-stat`}>{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </header>
    </article>
  )
}

export default PokeCard