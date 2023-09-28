import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import PokeCard from '../components/pokedetPage/pokeCard'
import SelectType from '../components/pokedetPage/SelectType'


const PokedetPage = () => {

    const [inputValue, setinputValue] = useState('')

    const [TypeSelected, setTypeSelected] = useState('allPokemons')

    const trainer = useSelector(store => store.trainerSlice)
    
    const inputSearch = useRef()

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'

    const [ pokemons, getPokemons, getTypesPokemon ] = useFetch(url)
    

    useEffect(() => {
      if(TypeSelected === 'allPokemons'){
        getPokemons()

      } else{
          getTypesPokemon(TypeSelected)
      }
      
    }, [TypeSelected])
    
   const HandelSearch = e =>{
    e.preventDefault()
    setinputValue(inputSearch.current.value.trim().toLowerCase())
   }
  
const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))


  return (
    <div>
      <div class="div_red_one"><img  src="https://upload.wikimedia.org/wikipedia/pt/7/77/Pok%C3%A9dex_3D_logo.png" alt="" className="img_pagecard"/></div>
      <div class="div_black_one"></div>
      <div class="div_ball_one"></div>
      
        <p class="text_pagecard">¡Welcome! {trainer} <span class="text_pagecard_span"> here you can find your favorite pokemon!</span></p>
        <form class="form_pagecard" onSubmit={HandelSearch}>
          <input class="input_pagecard" ref={inputSearch} type="text" placeholder="look for a pokemon" />
          <button class="bottom_pagecard">Search</button>
        </form>
        
              <SelectType class="pokefilter" setTypeSelected={setTypeSelected }/>
        
        <div >
          {
            pokeFiltered?.map(poke => (
               <PokeCard
                key={poke.url}
                url={poke.url}
               />
            ))
          }
        </div>
    </div>
  )
}

export default PokedetPage