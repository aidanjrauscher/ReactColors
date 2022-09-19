import {generateColor, invertColors} from '../utils/colors'
import { useState, useEffect} from 'react'


export default function Controls({colors, setColors}){

  const [invert, setInvert] = useState(0)

  useEffect(()=>{
    const callInvert = async ()=>{
      const inverted = await invertColors(colors)
      setColors(inverted)
    }
    callInvert()
  }, [invert])

  
  return(
    <div className="controls">
      <button 
        type="button" 
        className="controlButton"
        onClick={()=>{setColors([...colors, generateColor()])}}>
        Add Color
      </button>
      
      <button 
        type="button" 
        className="controlButton"
        onClick={()=>{setInvert(invert+1)}}>
        Invert Colors
      </button>
    </div>
  )
}