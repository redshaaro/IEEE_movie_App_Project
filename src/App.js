
 
import { Component } from "react";
import Navbar from "./Components/Navbar";
import Searcharea from "./Components/Searcharea";












class App extends Component {
  constructor(){
    super()
    this.state={
      movies:[],
      searchTerm: '',
      apikey:process.env.REACT_APP_API
      
    }
    this.apikey= process.env.REACT_APP_API;
}
handlesubmit=(e)=>{
  
  e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apikey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data=>{
       
      console.log(data);
      this.setState({ movies: [...data.reuslts]})
      
     



    })

}
handlechange= (e)=>{
  this.setState({searchTerm: e.target.value })


}



  




  render() {


    return(

    <div className="App">
      <Navbar></Navbar>
      <Searcharea handlesubmit={this.handlesubmit} handlechange={this.handlechange}></Searcharea>


      
    
      
      
     
      
      
      
      
  



    </div>
    );
  }
}




export default App;
