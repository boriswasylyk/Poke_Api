import { Route,Routes } from 'react-router-dom'
import './App.css'
import './idpage.css'
import './index.css'
import './PokeCard.css'
import HomePage from './pages/HomePage'
import PokedetPage from './pages/PokedetPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import ErrorPage from './components/ErrorPage';


function App() {
  

  return (
   <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route  element={<ProtectedRoutes/>} />
      <Route path='/error'  element={<ErrorPage/>} />
      <Route path="/pokedex" element={<PokedetPage />} />
      <Route path='/pokedex/:id' element={<PokedexIdPage/>}/>
    </Routes>
   </div>
  )
}

export default App
