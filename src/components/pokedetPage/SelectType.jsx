import useFetch from "../../hooks/useFetch"
import { useEffect } from "react"

const SelectType = ({ setTypeSelected }) => {

  const url = 'https://pokeapi.co/api/v2/type'

  const [ types, getTypes ] = useFetch(url)

   useEffect(() => {
     getTypes()
   }, [])
   
  const HandleChange = e => {
    setTypeSelected(e.target.value)

  }

  return (
    <div class="pokefilter">
        <select class="pokefilter_option" onChange={HandleChange}>
            <option value="allPokemons" >All Pokemons</option>
            {
              types?.results.map(typeInfo => (
                <option class="poked_filter_inside"  key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default SelectType