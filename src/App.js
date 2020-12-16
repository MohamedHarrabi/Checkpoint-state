import React, { Component } from 'react'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Thomas Shelby ",
        bio: `Bio : The leader of the Birmingham criminal gang, the Peaky Blinders and the patriarch of the Shelby Family.`,
        image: "Tommys3.jpg",
        profession: "Businessman",
      },
      show: false,
      time: new Date().toLocaleString,
    };
  }

  hundleClick = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount = () => {
    
    this.intervalID = setInterval(() => this.tick(), 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };
  tick = () => {
    this.setState({
      time: new Date().toLocaleString(),
    });
  };
  render() {
    return (
      <div>
        {this.state.show === true ? (  <div className="card">
    <form>
      <h1>{this.state.Person.fullName}</h1>
     <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img alt="a"for="photo-upload" src={this.state.Person.image}/>
    </div>
  </label>
      <div className="status">{this.state.Person.profession}</div>
      <div className="status">{this.state.Person.bio}</div>
     <p className="time">{this.state.time}.</p> 
     
    </form>
    <button type="submit" onClick={this.hundleClick} className="save">Hide </button>
  </div>):(<div> <button type="submit" onClick={this.hundleClick} className="save">{" "}
          show{" "} </button></div>)
 }

 
  
  

    </div>
           
    );
  }
}

export default App



 
  
