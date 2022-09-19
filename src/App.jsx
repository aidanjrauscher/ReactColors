import './App.css'
import Colors from './components/Colors'
import Controls from './components/Controls'
import { useState } from 'react'

export default function App() {

  const [colors, setColors] = useState([])

  return (
    <main>
      <div className="flexContainer">
        <Colors colors={colors}></Colors>
        <Controls colors={colors} setColors={setColors}></Controls>
      </div>
    </main>
  )
}
