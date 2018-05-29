import React from 'react'

var lol;

class Formular extends React.Component {	
	
    constructor(props) {
        super(props);
        this.state = {
            meno: '',
            priezvisko: '',
			hodnotenie: '',
			isChecked: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isChecked: !this.state.isChecked
        })
    }
	
   onSubmit = (e) => {
       e.preventDefault();
       const form = {
        meno: this.state.meno,
        priezvisko: this.state.priezvisko,
		hodnotenie: this.state.hodnotenie
       }
	   if(this.state.meno == "" || this.state.priezvisko == "" || this.state.hodnotenie == ""){
		   alert("Vyplnte prosim vsetky polia!");
	   }else if(this.state.isChecked){
		   alert("Musite suhlasit s podmienkami!");
	   }else{
		   alert("Vase vyjadrenie bolo odoslane.");		  
       }		   
    }
	
    render() {	
        return (
            <div>		
            <form name="checklist">
                <label>Meno:<input type="text" name="meno" onChange={e => this.handleChange(e)}/></label>
				<br/>
				<br/>
                <label>Priezvisko:<input type="text" name="priezvisko" onChange={e => this.handleChange(e)}/></label>
                <br/>
				<br/>				
                <label><input type="checkbox" name="suhlas" onChange={e => this.handleChange(e)}/> Suhlas so spracovanim osobnych udajov</label>
                <br/>	
				<textarea name="hodnotenie" onChange={e => this.handleChange(e)} cols="100" rows="20"></textarea><br/>				
                <button onClick={(e) => this.onSubmit(e)}>Odoslat hodnotenie</button>   
            </form>
            </div>
        );
    }
}

export default Formular;