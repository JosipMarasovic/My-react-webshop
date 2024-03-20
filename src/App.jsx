
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import { useEffect, useState } from "react";
import AppWrapperComponent from './AppWrapper/AppWrapperCompomenet';
import About from './compoments/About/About.jsx';
import Blog from './compoments/Blog/Blog.jsx'
import Home from './compoments/Home/Home.jsx';
import Basket from './compoments/Basket/Basket.jsx';
import PopularContainer from './compoments/Popular/PopularContainer.jsx';
import { AppProvider } from './Context/AppContext.jsx';
import AllItems from './compoments/ItemsAll/AllItems.jsx';




function App() {
  const [smartphoneProducts, setSmartphoneProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => {
        setSmartphoneProducts(data.products);

      })
  }, []);

  return (
    <>

   
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<AppWrapperComponent/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog/:id' element={<Blog />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/items/:category' element={<AllItems/>}/>
        <Route path='/popular/*' element={<PopularContainer smartphoneProducts={smartphoneProducts} />}/>
        <Route path='/basket' element={<Basket/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App
