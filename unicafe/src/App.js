import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
    {text} {value}
    <br/>
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

  // const statisticList = [
  //   {
  //     text: 'good',
  //     value: good
  //   },
  //   {
  //     text: 'neutral',
  //     value: neutral
  //   },
  //   {
  //     text: 'bad',
  //     value: bad
  //   },
  //   {
  //     text: 'all',
  //     value: all
  //   },
  //   {
  //     text: 'average',
  //     value: average
  //   },
  //   {
  //     text: 'positive',
  //     value: `${positive} %`
  //   }
  //   ]

  const StatisticLineList = () => {
    return (
      <>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive + " %"}/>
      </>
      )
  }

  return (
    <div>
      <StatisticLineList/>
    </div>
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
