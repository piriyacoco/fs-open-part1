import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
    <td>{text}</td> <td>{value}</td>
    </>
    )
}

// a proper place to define a component
const Statistics = (props) => {
  /// ...
  const {good, neutral, bad} = props
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = 100 * good / all

  if ((good + neutral + bad) === 0) {
    return (
      <>
        <p>
        No feedback given
        </p>
      </>
      )
  }

  return (
    <table>
      <tbody>
      <tr><StatisticLine text='good' value={good}/></tr>
      <tr><StatisticLine text='neutral' value={neutral}/></tr>
      <tr><StatisticLine text='bad' value={bad}/></tr>
      <tr><StatisticLine text='all' value={all}/></tr>
      <tr><StatisticLine text='average' value={average}/></tr>
      <tr><StatisticLine text='positive' value={positive + " %"}/></tr>
      </tbody>
    </table>
    ) 
}
// add string to var

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
