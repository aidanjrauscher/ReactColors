export function invertColors(colors){
  let invertedColors = []
  for(var i=0; i<colors.length; i++){
    let invertedColor = colors[i]
    invertedColor[0] = 255 - colors[i][0]
    invertedColor[1] = 255 - colors[i][1]
    invertedColor[2] = 255 - colors[i][2]
    invertedColors.push(invertedColor)
  }
  return invertedColors
}

export function generateColor(){
  const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)
  return [r,g,b]
}