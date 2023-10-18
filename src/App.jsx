import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path={`/products/category/:categoryName`} element={<ItemListContainer/>}/>
      <Route exact path={`/products/:id`} element={<ItemDetailContainer/>}/>
      <Route exact path='/Checkout' element={<Checkout />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
