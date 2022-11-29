const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
    )
}; // need bracket! or need to make as props

const Part = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.numEx}
      </p>
    </>
    )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partInfo[0].partName} numEx={props.partInfo[0].numEx} />
      <Part partName={props.partInfo[1].partName} numEx={props.partInfo[1].numEx} />
      <Part partName={props.partInfo[2].partName} numEx={props.partInfo[2].numEx} />
    </div>
    )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.partInfo.reduce((total, currentValue) => total = total + currentValue.numEx, 0)}</p>
    </>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const partInfo = [
  {
    'partName': 'Fundamentals of React',
    'numEx': 10
  },
  {
    'partName': 'Using props to pass data',
    'numEx': 7
  },
  {
    'partName': 'State of a component',
    'numEx': 14
  }
    ]

  return (
    <div>
      <Header course={course} />
      <Content partInfo={partInfo} />
      <Total partInfo={partInfo} />
    </div>
  )
}

export default App
