import React, { useEffect, useState } from 'react'

export default function NmhUseEffect() {
    // state : count
    const [count, setCount] = useState(0);
    // Hmà sử lý sự kiện click me
    const NmhHandleClick = ()=>{
        setCount(prev => prev +1);
    }

    // sử dụng hầm useeffect để cập nhật lại title: có một tham số
    useEffect(() => {
        document.title = ` Nguyễn Minh Hiệp You clicked ${count} times`;
            console.log(`You clicked ${count} time`);
        }); 
        // useEffect: tham số thư 2 là mảng rỗng
        useEffect(()=>{
            console.log("Chạy lần đầu tiên - Một lần");
        },[])
        // [deps]
        useEffect(()=>{
            console.log(`useEffect count click:`,count)
        },[count])
  return (
    <div>
<h2>Demo - useEffect: You clicked {count} times</h2>
            <button onClick={NmhHandleClick}>
                Click me
            </button>
    </div>
  )
}
