import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(true)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect( () =>{
    console.log('Effect ', {enabled})
    window.addEventListener('mousemove', (e) => {
       setX(e.clientX - 15)
       setY(e.clientY - 15)
     }
     )
  }, [enabled])

  return (
    <>
      <div className='bolita' 
        style={{
          left: `${x}px`,
          top:`${y}px`,
          zIndex: -100,
        }}>
      </div>

      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Activar' : 'Desactivar'} seguir puntero
      </button>
    </>
  )
}

export default App
