import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';

const StyleList = styled.li`
color: tomato;
background-color:blue
`;

const BigStyleList = styled(StyleList)`
font-size = 40pt;
`;

function Topics() {
  return (
    <div>
      <ul>
        <StyleList><li><NavLink to={"/topics/1"}>HTML</NavLink></li></StyleList>
        <BigStyleList><li><NavLink to={"/topics/2"}>JS</NavLink></li></BigStyleList>
        <li><NavLink to={"/topics/3"}>REACT</NavLink></li>
      </ul>
      <Routes>
        <Route path='/1' element={'HTML is ...'}/>
        <Route path='/2' element={'JS is ...'}/>
        <Route path='/3' element={'REACT is ...'}/>
      </Routes>
    </div>
  );
}

function Home() {
  return (<div>THIS IS HOME</div>);
} 

function Contact() {
  return (<div>THIS IS CONTACT</div>);
}




function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/topics"}>Topics</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/topics' element={<Topics/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
