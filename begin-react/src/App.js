import React from 'react';
import Hello from './Hello';

function App() {
    return (
        <>
            <Hello name="유정란" />
            <Hello name="유정한" color="red" isSpecial={true} />
        </>
    );
}

export default App;
