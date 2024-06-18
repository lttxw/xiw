import React, { Component, PureComponent } from 'react';
import PropsSon from './PropsSon';

export default class PropsD extends PureComponent {
  state = {
    a: '1',
  };
  handleChange = (sonMes) => {
    console.log(sonMes);
    console.log(this);

    this.setState({
      a: sonMes,
    });
  };
  render() {
    return (
      <>
        <div>PropsD</div>
        <div>{this.state.a}</div>
        <PropsSon c="props" onChange={this.handleChange}></PropsSon>
      </>
    );
  }
}
