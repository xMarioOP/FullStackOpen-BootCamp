import { useState } from 'react'

const Button = ({onSmashClick, text}) => {
  console.log("button props : ", onSmashClick, text);
  return(
    <button  onClick= {onSmashClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  console.log("StatisticLine props: ", text, value);
  return(
    <table style={{ width: '15%' }}>
    <tbody>
      <tr>
        <th style={{ width: '40%', textAlign: 'left' }}>{text}</th>
        <td></td>
        <td></td>
        <td style={{ width: '90%', textAlign: 'center' }}>{value}</td>
      </tr>
    </tbody>
  </table>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  console.log("Values before", good, neutral, bad, all, average, positive);
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={`${positive}%`} />
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good +1)
  const handleNeutralClick = () => setNeutral(neutral +1)
  const handleBadClick = () => setBad(bad +1)
  
  const all = good + neutral + bad
  console.log("all: ", all);

  const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
  console.log("average: ", average);

  const positive = all === 0 ? 0 : (good * 100) / all
  console.log("average: ", positive);

  return ( 
    <div>
      <h1>give feedback</h1>
      <Button onSmashClick={handleGoodClick} text="good" />
      <Button onSmashClick={handleNeutralClick} text="neutral" />
      <Button onSmashClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App