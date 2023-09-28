import React, { useRef } from 'react'
import { setTrainerSlice } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {


 const inputTreainer = useRef()

 const dispatch = useDispatch()

 const navigate = useNavigate()

  const HandleTrainer = e => {
    e.preventDefault()
    const trainerName = inputTreainer.current.value.trim();
    console.log(setTrainerSlice)
    dispatch(setTrainerSlice(inputTreainer.current.value.trim()))
    navigate('/pokedex')
  }
 
  return (
    <div className="home_div">
    <img   src="https://upload.wikimedia.org/wikipedia/pt/7/77/Pok%C3%A9dex_3D_logo.png" alt="" className="img_home"/>
    <h2 className="home_subtitle">¡Hi Trainer!</h2>
    <p className="home_text">To start, please, give me your trainer name</p>
    <form className="home_form" onSubmit={HandleTrainer} action="">
        <input className="home_input" ref={inputTreainer} type="text" placeholder="Your Name..." />
        <button className="home_buttom" >¡Start!</button>
</form>
     <div className="bottom_hero_home">
        <div className="line_rouge_home"></div>
        <div className="le_bowl_home"></div>
        <div className="line_black_home"></div>
        </div>
        </div>
  )
}

export default HomePage