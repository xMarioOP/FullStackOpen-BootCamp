import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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

  const personFilter = filter
    ? persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    : persons;

  const addPerson = (e) => {
    e.preventDefault()
    console.log(e);

    const nameExist = persons.some(person => person.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook`);
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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>
      <Persons personFilter={personFilter} />
    </div>
  )

}

export default App