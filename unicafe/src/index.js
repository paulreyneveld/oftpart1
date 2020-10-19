import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  );
}

const Statistics = ({good, neutral, bad}) => {
  let all = good + bad + neutral;
  let average = (good - bad) / all;
  
  if (isNaN(average)) {
    average = 0;
  }
  
  let positive = good / all * 100
  if (isNaN(positive)) {
    positive = 0;
  }

  if (all !== 0) {
    return (
      <>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
        </tbody>
      </table>
      </>
    )
  }

  else {
    return (
      <>
      <h1>Statistics</h1>
      <p>No Feedback Given</p>
      </>
    )
  }

}

const Statistic = ({text, value}) => {
  return (
  <>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
