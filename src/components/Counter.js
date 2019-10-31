import React, { Component } from 'react'
import Number from './Number'

class Counter extends Component {
  state = {
    number: 0,
    title: "This is a counter"
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

  render(){

    const { title, number } = this.state
    
    return (
      <div>
        <h1>{title}</h1>
        <p><Number number={number} /></p>

        {/* <button onClick={this.addNumber}>Sum</button>
        <button onClick={this.subtractNumber}>Subtract</button> */}

        <button onClick={() => {this.modifyNumber(1)}}>Sum</button>
        <button onClick={() => {this.modifyNumber(-1)}}>Subtract</button>
      </div>
    )
  }
}

export default Counter;