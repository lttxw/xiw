import React from 'react';
import { Button } from 'antd';

// class StateDemo extends React.Component {
class StateDemo extends React.PureComponent {
  /**
   * 1. 响应式数据，完整写法
   */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     a: '123',
  //     b: 1,
  //   };
  // }

  /**
   * 2. 简化写法
   */
  state = {
    a: 0,
    c: [1, 2, 3],
  };

  /**
   * 非响应式数据
   * 能展示，修改不会重新渲染页面。
   */
  b = 123;

  add = () => {
    /**
     * 值改变了，但没有重新渲染到页面上
     */
    // this.state.a += 1;
    // console.log(this.state);

    /**
     * 1. 修改了数据；
     * 2. 触发渲染；
     * 3. setState 还可以传一个函数
     * 4. setState 方法的修改是异步的，要获取修改后的值，需要在 setState 第二个参数里获取；
     */

    // this.setState((state) => {
    //   return {
    //     a: (state.a += 1),
    //   };
    // });

    this.setState(
      {
        a: 99,
      },
      () => {
        // 获取更新后的值
        console.log(this.state.a); // 99
      },
    );
    // console.log(this.state.a); // 0
  };

  AddArr = () => {
    /**
     * 在 React.PureComponent 下，不能正常更新，引用类型的地址值没有改变；
     * 要解除引用在添加
     */
    // this.state.c.push(4);
    // this.setState({
    //   c: this.state.c,
    // });

    // this.state.c.push(4);
    this.setState({
      c: [...this.state.c, 4],
    });
  };

  render() {
    return (
      <>
        <div>{this.state.a}</div>
        <div>{this.b}</div>
        <Button onClick={this.add}>加</Button>
        <div>{this.state.c}</div>
        <Button onClick={this.AddArr}>添加数组</Button>
      </>
    );
  }
}

export default StateDemo;
