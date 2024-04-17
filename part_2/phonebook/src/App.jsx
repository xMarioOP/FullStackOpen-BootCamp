import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (e) =>{
    e.preventDefault()
    console.log(e);

    const addPersonObject = {
      name: newName
    }

    setPersons(persons.concat(addPersonObject))
    setNewName("")
  }


   const handleChange = (e) =>{
    console.log(e.target.value);
    setNewName(e.target.value)
  }
 
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}> 
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
        {
          persons .map(person => 
             <p key={person.name}>{person.name}</p>
          )
        }
    </div>
  )
}

export default App