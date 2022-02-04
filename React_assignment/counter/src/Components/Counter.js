import React from 'react';

export const Counter = () => {
    const [count, setCount] = React.useState(0)

  return (
      <div>
          <h1>Counter</h1>
          <h2>{count}</h2>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button>
          <button onClick={()=>setCount(count*count)}>Double</button>
      </div>
  )
};
