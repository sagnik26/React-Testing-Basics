import React, { useState } from 'react'

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>Count</h1>
      <h2 data-testid="count">{count}</h2>

      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>incr</button>
        <button onClick={() => setCount((prev) => prev - 1)}>decr</button>
        <button onClick={() => setCount(0)}>refresh</button>
        <button onClick={() => setCount((prev) => prev * -1)}>swapSign</button>
      </div>
    </div>
  )
}

export default Counter
