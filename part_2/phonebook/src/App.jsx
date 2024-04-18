import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas",
      phone: "040-1234567"
    }
  ])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")

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
      phone: newPhone
    }

    setPersons(persons.concat(addPersonDatesObject))
    setNewName("")
    setNewPhone("")
  }


  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    console.log(e.target.value);
    setNewPhone(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

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
            value={newPhone}
            onChange={handlePhoneChange}
           /></div>

        <div>
          <button>add</button>
        </div>
      </form>
      

      <h2>Numbers</h2>
      {
        persons.map(person =>
          <p key={person.name}>{person.name} {person.phone}</p>
        )
      }
    </div>
  )
}

export default App