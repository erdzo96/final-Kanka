import React from 'react'
import Data from '../produkty.json'

const Produkty =_=> (
<div> 
<h1>Nase potraviny</h1>
<p>
<h2>Zelenina:</h2>
	{Data.filter(function(potravina) { 
		   return potravina.typ === "Zelenina";
	}).map(potravina => {	
           return( <div className="potravina"><div className={'obrazok_potravina ' + potravina.obrazok}></div>{potravina.nazov} <br/> {potravina.cena} eur </div>);
	})}     
</p>


</div>
)

export default Produkty;
