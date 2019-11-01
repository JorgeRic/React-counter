import React, { Component } from 'react'
import Number from './Number';
import List from './List';

class Counter extends Component {
  state = {
    number: 0,
    title: "This is a counter",
    data:[
      {name:'Barcelona',
      population: 1500000},
      {name:'Madrid',
        population: 35000000
      },
      {name:'Moscow',
        population: 12000000
      },
      {name:'Alicante',
        population: 3500000
      },
    ]
  }

  //   addNumber =() => {
  //   let newNumber = this.state.number;
  //   this.setState({
  //     number: ++newNumber
  //   })
  // }
  //   subtractNumber = () =>{
  //     let newNumber = this.state.number;
  //     this.setState({
  //       number: --newNumber
  //     })
  //   }
  
  modifyNumber =(modify) => {
    let newNumber = this.state.number;
    this.setState({
      number: newNumber + modify
    })
  }
  
  showTextBasedOnNumber = () => {
    const { number } = this.state;

    if(number > 0){
      return <p>Number is higher than 0</p>
    }
    else if(number < 0) {
      return <p>Number is lower than 0</p>
    }
    else{
      return <p>Number is equal to 0</p>
    }
  }

  render(){

    const { title, number, data } = this.state
    
    return (
      <div>
        <h1>{title}</h1>
        <p><Number number={number} /></p>
        <p>{this.showTextBasedOnNumber()}</p>

        {/* <button onClick={this.addNumber}>Sum</button>
        <button onClick={this.subtractNumber}>Subtract</button> */}

        <button onClick={() => {this.modifyNumber(1)}}>Sum</button>
        <button onClick={() => {this.modifyNumber(-1)}}>Subtract</button>
        
        <List cities={data}/>

      </div>
    )
  }
}

export default Counter;