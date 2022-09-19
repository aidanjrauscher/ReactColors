export default function Color({ colors }) {
  return (
    <div className="colors">
      {colors.map((color, index) => (
        <button 
          type="button"  
          className="color" 
          key={color+index.toString()} 
          style={{ background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`, width: `${100 / colors.length}%` }}
          onClick={()=>{console.log(color+"."+index.toString())}}
        >
        </button>
      ))
    }
    </div>
  );
}