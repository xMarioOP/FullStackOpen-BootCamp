/*const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}*/

/*const Content = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}*/

/*const Total = (props) => {
  return (
    <p>Number of exercises {props.suma}</p>
  )
}
*/

const Header = ({course}) => <h1>{course}</h1> 

const Content = ({part, exercises}) => <p>{part} {exercises}</p>

const Total = ({suma}) => <p>Number of exercises {suma}</p>



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const suma = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total suma={suma}/>
    </div>
  )
}

export default App