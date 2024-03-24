import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';





const App = () => {

  return (
   <div>
       <GlobalStyle />
       <Router>
           <Header/>
           <Routes>
               <Route  exact path ='/' element={<Home/>} />
           </Routes>
          
       </Router>


   </div>
  )
}

export default App;
