import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Start from './components/Start/index.jsx'
import CardDetail from './components/CardDetail'
import CardActivityCreator from './components/CardActivityCreator'



function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/home/details/:id" element={<CardDetail/>}/>
      <Route path="/home/activities" element={<CardActivityCreator/>} />
    </Routes>
  );
}

export default App;