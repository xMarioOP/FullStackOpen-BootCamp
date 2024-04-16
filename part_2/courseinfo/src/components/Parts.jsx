import React from 'react';
 
const Parts = ({part}) => {
      return (
        <div>
          <p>{part.name}  {part.exercises}</p>  
        </div>
    );
};

export default Parts;   