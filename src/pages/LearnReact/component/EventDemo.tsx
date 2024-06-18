import React from 'react';

class EventDemo extends React.Component {
  // 获取到的事件对象并不是原生的事件对象，而是合成的，
  // 原生事件对象在 SyntheticBaseEvent.nativeEvent 中

  demo1(e) {
    // bind(this) 没有传参，第一个参数就是事件对象
    console.log(e);
  }
  demo2(a, b, e) {
    // bind(this) 有传参，最后一个参数就是事件对象
    console.log(e);
    const c = a + b;
  }
  demo3 = (e) => {
    // 自定义传递事件对象
    console.log(e);
    // 阻止事件冒泡
    // e.stopPropagetion();
    // 阻止默认行为
    // e.preventDefault();
  };

  render() {
    return (
      <>
        <div onClick={this.demo1.bind(this)}>Demo1</div>
        <div onClick={this.demo2.bind(this, 1, 2)}>Demo2</div>
        <div onClick={(e) => this.demo3(e)}>Demo3</div>
      </>
    );
  }
}

export default EventDemo;
