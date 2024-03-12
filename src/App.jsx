


import './App.css'
import Header from './compoments/Header/Header'
import MainCompomenet from './compoments/maincompomenet/MainCompomenet'
import Footer from './compoments/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import AppWrapperComponent from './AppWrapper/AppWrapperCompomenet';
import About from './compoments/About/About.jsx';
import Blog from './compoments/Blog/Blog.jsx'
import Popular from './compoments/Popular/Popular.jsx'
import Home from './compoments/Home/Home.jsx';
import Basket from './compoments/Basket/Basket.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<AppWrapperComponent/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/basket' element={<Basket/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}
export default App
