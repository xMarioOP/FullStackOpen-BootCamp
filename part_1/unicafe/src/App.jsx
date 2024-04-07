import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = (newValue) => () => {
    console.log("value good before", newValue);
    setGood(newValue)
  } 

  const handleNeutralClick = (newValue) => () => {
    console.log("value neutral before", newValue);
    setNeutral(newValue)
  } 
  
  const handleBadClick = (newValue) => () => {
    console.log("value bad before", newValue);
    setBad(newValue)
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick(good +1 )}>good</button>
      <button onClick={handleNeutralClick(neutral +1 )}>neutral</button>
      <button onClick={handleBadClick(bad +1 )}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
} 

export default App