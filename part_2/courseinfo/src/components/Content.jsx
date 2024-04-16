import React from 'react';
import Parts from './Parts';

const Content = ({parts}) => {
      return (
        <div>
            { 
                parts.map((parts) =>{
                    return <Parts key={parts.id} part={parts}/>
                })
            }
        </div>
    );
};

export default Content;
//e