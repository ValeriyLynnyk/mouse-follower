import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(true)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  
  useEffect( () =>{
    console.log('Effect ', {enabled})
    
    const handleMove = ({clientX, clientY}) => {
      setX(clientX - 15)
      setY(clientY - 15)
    }    

    enabled && window.addEventListener('mousemove', handleMove)

    return () => {
      setX(0)
      setY(0)
      window.removeEventListener('mousemove', handleMove)
    }

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
        {enabled ? 'Activar 🔥' : 'Desactivar 💦'}
      </button>
    </>
  )
}

export default App
