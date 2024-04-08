import { useState } from 'react'

const Statistics =  ({good, neutral, bad, all, average, positive}) => {
  console.log(good, neutral, bad, all, average, positive);
  return(
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all} </p>
      <p>average {average}</p> 
      <p>positive {positive} % </p>
    </div>
  )
}

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

  const all = good + neutral + bad
  console.log("all: ", all);

  const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
  console.log("average: ",average);

  const positive = all === 0 ? 0 : (good *100)/all
  console.log("average: ", positive);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick(good +1 )}>good</button>
      <button onClick={handleNeutralClick(neutral +1 )}>neutral</button>
      <button onClick={handleBadClick(bad +1 )}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}  />
    </div>
  )
} 

export default App