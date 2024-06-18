import React, { Component, PureComponent } from 'react';
import { Button } from 'antd';

export default class PropsSon extends PureComponent {
  render() {
    return (
      <>
        <div>PropsSon</div>
        <Button onClick={() => this.props.onChange('propsSon')}>子传父</Button>
      </>
    );
  }
}
