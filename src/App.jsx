import { useState } from 'react'



function App() {
  const [color, setColor] = useState('olive')

  // function setColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' style={{backgroundColor: '#a8dadc'}}>
          <button
           onClick={() => setColor('red')}
           className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'red'}}>Red</button>
          <button 
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'green'}}>Green</button>
          <button 
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'blue'}}>Blue</button>
          <button 
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'yellow'}}>Yellow</button>
          <button 
          onClick={() => setColor('black')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'black'}}>Black</button>
          <button 
          onClick={() => setColor('white')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'white'}}>White</button>
          <button 
          onClick={() => setColor('pink')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'pink'}}>Pink</button>
          <button 
          onClick={() => setColor('purple')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'purple'}}>Purple</button>
          <button 
          onClick={() => setColor('#FF4F00')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: '#FF4F00'}}>Orange</button>
          <button 
          onClick={() => setColor('#0FFFFF')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: '#0FFFFF'}}>Turquoise</button>
        </div>
      </div>
    </div>
  )
}

export default App
