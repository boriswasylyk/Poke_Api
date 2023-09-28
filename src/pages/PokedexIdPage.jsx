import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const PokedexIdPage = () => {

   const {id} = useParams()

   const navigate = useNavigate()

   const url = `https://pokeapi.co/api/v2/pokemon/${id}`
   const [ pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
      getPokemon()
    }, [id])
    
    const HandleNavigate = () => {
      navigate(`/pokedex/`);
    }
  
    const firstType = pokemon?.types[0].type.name
    
  return (
    <body>
      
   
    <div class="div_red_one"><img  src="https://upload.wikimedia.org/wikipedia/pt/7/77/Pok%C3%A9dex_3D_logo.png" alt="" className="img_pagecard"/></div>
    <div class="div_black_one"></div>
    <div class="div_ball_one"></div>

    <div class={`idpage_card ${firstType}-border`}>
      <h2 class={`idpage_id`}>ID'{pokemon?.id}'</h2>
    <img class={`idpage_img ${firstType}-gradient`} src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
    <h1 class="idpage_h1">{pokemon?.name}</h1>
    
    
    <ul class={`idpage_ul_2 `}>
{pokemon?.types.map((typeData, index) => (
  <li class="idpage_li_type_name" key={index}>{typeData.type.name}</li>
))}
</ul>
<ul class="idpage_ul_father_1">
      <li class="idpage_heigth">Height      <span class="span_li_1">{pokemon?.height}</span></li>
      <li class="idpage_weight">weight      <span class="span_li_1">{pokemon?.weight}</span></li>
  <li class="idpage_experience">Experience:  <span class="span_li_1"> {pokemon?.['base_experience']}</span></li>
     


      <ul class="idpage_ul_3">
  {pokemon?.abilities.map((ability, index) => (
    <li class="idpage_li_ability" key={index}>
      Ability  {index + 1}: <span class="idpage_span_ability">{ability.ability.name}
      {ability.is_hidden}</span>
    </li>
  ))}
</ul>
 

<hr class="idpage_hr" />


<ul class="idpage_ul_4">
  {pokemon?.stats.map((stat, index) => (
    <li class="idpage_li_stat" key={index}>
      <strong class="stat_name">{stat.stat.name}:</strong> <span class="stat_data">{stat.base_stat}</span>
    </li>
  ))}
</ul>      
     
    </ul>
    </div>
    <button class="button_return" onClick={HandleNavigate}>Return</button>
     </body>
    )  
    
  
  
}

export default PokedexIdPage