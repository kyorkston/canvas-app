function addHeadingToPage() {
  var heading = document.getElementById('heading')

  heading.innerHTML = "Merry Christmas!"
}

const canvas = document.getElementById('canvas-container')
const ctx = canvas.getContext("2d")

ctx.moveTo(0,0)
ctx.lineTo(100, 200)
ctx.strokeStyle = 'red'
ctx.stroke()

// function addLineToCanvas(startX, startY, toX, toY, colour) {
//   ctx.moveTo(startX, startY)
//   ctx.lineTo(toX,toY)
//   ctx.strokeStyle = colour
//   ctx.stroke()
// }
//
// function drawRectangle(startX, startY, toX, toY, colour) {
//   ctx.rect(startX, startY, toX, toY)
//   ctx.fillStyle = colour
//   ctx.fill()
// }
//
// drawRectangle(0, 0, 400, 400, "green")
// drawRectangle(600, 0, 600, 400, "green")
// drawRectangle(0, 600, 400, 1000, "green")
// drawRectangle(600, 600, 1000, 1000, "green")
//
// addHeadingToPage()
// addLineToCanvas(400, 0, 400, 400, '#ff0000')
// addLineToCanvas(600, 1000, 600, 600, '#ff0000')
// addLineToCanvas(600, 600, 1000, 600, '#ff0000')
// addLineToCanvas(600, 0, 600, 400, '#ff0000')
// addLineToCanvas(600, 400, 1000, 400, '#ff0000')
// addLineToCanvas(400, 400, 0, 400, '#ff0000')
// addLineToCanvas(400, 1000, 400, 600, '#ff0000')
// addLineToCanvas(400, 600, 0, 600, '#ff0000')
//
//
// let image = new Image()
// image.src = 'bow.png'
// image.onload = () => {
//   ctx.drawImage(image, 340,340, 300, 300)

// }
