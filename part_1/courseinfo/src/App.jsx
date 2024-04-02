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
 

const Header = ({course}) => <h1>{course}</h1> 

const Part = ({part, exercises}) => {
  console.log(part, exercises)
  return(
  <div>
    <p>{part} {exercises}</p>
  </div>
  )
}


const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => 
  <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
  </div>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
       <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
       <p>Number of exercises  {part1.exercises + part2.exercises + part3.exercises} </p>
    </div>
  )
}

export default App