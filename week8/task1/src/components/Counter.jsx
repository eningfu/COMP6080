import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = () => {
    setIsSubmitted(true);
  }

  return (
    <>
      {/* <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>

      {count === 10 && (<p>Limit reached</p>)} */}

      <input 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <button id="submit" onClick={handleSubmit}>Submit</button>

      {isSubmitted && <p>Hi, {name}</p>}
    </>
  )
}

export default Counter
