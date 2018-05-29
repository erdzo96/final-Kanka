import React, { Component } from "react";

class People extends Component {
 relocate() {
   this.props.history.push("/");
 }
 render() {
   return (
     <div>
       <p>TOTO SU LUDZE</p>
       <p onClick={() => this.relocate()}>CHOD DO MAIN</p>
       <p>Aktivny user = {this.props.match.params.meno}</p>
     </div>
   );
 }
}

export default People;