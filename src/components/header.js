import React, { Component } from "react";

class Header extends Component {

    state = {
        title: 'The Application Keywords are: ',
        keywords: '',
        count: 0
    }


  hello = () => {
    console.log("hello mo mo");
  };


  inputChange = (event) => {
      this.setState({
          keywords: event.target.value
      })
  }

  addOne = () => {
      this.setState((state,props)=> ({
          count: state.count + 1
      }))
  }


  render() {
    return (
      <header>
        <div className="logo" onClick={this.hello}>
          Logo
        </div>
        <input onChange={ (event) => this.inputChange(event) } />
        <div>
            { this.state.title }
        </div>
        <div>
            { this.state.keywords }
        </div>

        <br/>
        <div>
            { this.state.count }
        </div>
        <button onClick={ ()=> this.addOne() }>Add One</button>
      </header>
    );
  }
}

export default Header;
