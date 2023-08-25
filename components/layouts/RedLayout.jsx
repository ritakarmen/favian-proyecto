import React from 'react'

export const RedLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgb(255, 0, 0)',
        borderRadius:'5px',
        padding:'10px'
    }}>
        <h3>Red-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  );
};
