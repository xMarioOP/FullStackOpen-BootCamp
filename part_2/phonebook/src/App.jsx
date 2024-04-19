import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const personFilter = filter
  ? persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  : persons;

  const addPerson = (e) => {
    e.preventDefault()
    console.log(e);

  const nameExist = persons.some(person => person.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook`)
      return
    }

  const addPersonDatesObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(addPersonDatesObject))
    setNewName("")
    setNewNumber("")
  }


  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input 
        value={filter}
        onChange={handleFilterChange}
        />
      </div>

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>      

        <div>number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
           /></div>

        <div>
          <button>add</button>
        </div>
      </form>
      

      <h2>Numbers</h2>
      {
        personFilter.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )
      }
    </div>
  )
}

export default App