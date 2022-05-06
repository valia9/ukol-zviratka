import React, { useEffect, useState } from 'react';
import './style.css';

import Animal from '../Animal';

const AnimalList = ({list, setAnimal}) => {
      
console.log(list)

return (
    <div className="animal-list">
        {list.map(animal => <Animal 
        foto={animal.foto}
        nazev={animal.nazev}
        nazevLatinsky={animal.nazevLatinsky}
        id={animal.id}
        key={animal.id}
        setAnimal={setAnimal}
        />)}
        
	</div>

)
}

export default AnimalList;