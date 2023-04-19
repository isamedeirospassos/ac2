import React from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';

export default function Usuario(){
   return (
       <div>
           <h1>Usuário</h1>
           <Link to="/">retornar a página inicial</Link>
       </div>
   );
}
export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home</Link></p>
     <Link to='/usuario'>Usuario</Link>
    </header>
    <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/sobre' component= {Sobre}/>
          <Route path='/home' component= {Home}/>
        </Switch>
      </main></>
  );
}

