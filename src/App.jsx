import { useState } from 'react'


function App() {
  const [input, setInput] = useState('')
  const cambiaInput = (event) => {
    
    setInput(event.target.value);
  };

  return (
    <>
    <body style={{backgroundColor: 'gray' , margin: 0}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , backgroundColor: 'gray'}}>
      <h1>{input}</h1>
      <input type='text' onChange={cambiaInput} style={{ width:'50%', textAlign:'center' }} />
    </div>
    </body>
    </>
  )
}

export default App
 