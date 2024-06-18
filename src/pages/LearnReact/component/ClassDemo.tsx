import React from 'react';

// class 类组件基本构成
class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  fn1() {
    // 1. 不做任何处理 undefined
    console.log(this);
  }

  fn2() {
    // 2. 通过bind 处理，this 指向组件实例 <ClassDemo />
    console.log(this);
  }
  fn5 = () => {
    // 5. 写成箭头函数，this 指向组件实例
    console.log(this);
  };

  render() {
    return (
      <>
        <div onClick={this.fn1}>ClassDemo1</div>
        <div onClick={this.fn2.bind(this)}>ClassDemo2</div>
        <div
          onClick={function () {
            // 3. 直接使用匿名函数， undefined
            console.log(this);
          }}
        >
          ClassDemo3
        </div>
        <div
          onClick={() => {
            // 4. 直接使用匿名箭头函数，this 指向组件实例
            console.log(this);
          }}
        >
          ClassDemo4
        </div>
        <div onClick={this.fn5}>ClassDemo5</div>
      </>
    );
  }
}

export default ClassDemo;
