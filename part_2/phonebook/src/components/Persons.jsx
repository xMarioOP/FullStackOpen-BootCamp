import React from 'react';

const Persons = ({ personFilter }) => {
  return (
    <div>
      {
        personFilter.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )
      }
    </div>
  );
};

export default Persons;