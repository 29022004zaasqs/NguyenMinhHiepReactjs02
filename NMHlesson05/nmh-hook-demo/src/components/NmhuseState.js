import React, { useState } from 'react';

export default function NmhuseState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // Mảng

  const[list, setList]= useState([1,5]);

  const NmhHandleList = ()=>{
    // sinh ngẫu nhiên một giá trị số
    let num = parseInt(Math.random()*100);
    // cập nhật lại state:list
    setList([
      ...list,
      num
    ])
    // cách khac
    
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={NmhHandleList}>Thêm ngẫu nhiên</button>
    </div>
  );
}
