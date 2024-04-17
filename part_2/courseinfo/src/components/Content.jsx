import React from 'react';
import Parts from './Parts';

const Content = ({parts}) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)

      return (
        <div>
            { 
                parts.map((parts) =>{
                    return <Parts key={parts.id} part={parts}/>
                })
            }
            <p><strong>total of {totalExercises} exercises</strong></p>
        </div>
    );
};

export default Content;
