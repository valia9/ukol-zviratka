import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalDetail from './components/AnimalDetail';
import AnimalList from './components/AnimalList';

const App = () => {

  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [list, setList] = useState([]);

  useEffect(
		() => {
    	fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
			.then((response) => response.json())
			.then(data => 
            {
            setList(data.zvirata)
            setSelectedAnimal(data.zvirata[0])
            })
        },
		[]
	);

 const setAnimal = (id) => {
   const matchingAnimal = list.find(animal => animal.id === id)
     setSelectedAnimal(matchingAnimal);
 }
  
  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList list={list} setAnimal={setAnimal}/>
        <AnimalDetail list={selectedAnimal}/>
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
