//Sehajdeep Singh

function div(divs) {
  ogX = pointsX[1]
  ogY = pointsY[1]
  for (let i = 1; i < divs; i++) {
    pointsX[i] = pointsX[0]+((ogX-pointsX[0])*i/divs)
    pointsY[i] = pointsY[0]+((ogY-pointsY[0])*i/divs)
  }
  pointsX[divs] = ogX
  pointsY[divs] = ogY
}

function distFunc(point1, point2) {
  distX = pointsX[point1] - pointsX[point2]
  distY = pointsY[point1] - pointsY[point2]
  dist = sqrt(distX**2 + distY**2)
}

function setup() {
  canvasX = 1000
  canvasY = 600
  frameRate(60)
  createCanvas(canvasX, canvasY)
  pointsX = [200, 800]
  pointsY = [300, 300]
  mouseX = pointsX[1]
  mouseY = pointsY[1]
  divs = 99
  div(divs)
  num = pointsX.length - 1
  divX = (pointsX[num] - pointsX[0]) / divs
  divY = (pointsY[num] - pointsY[0]) / divs
  defaultDist = sqrt(divX**2 + divY**2)
}

function draw() {
  background(0)
  stroke(255)


  if (mouseX<canvasX && mouseY<canvasY && mouseX>0 && mouseY>0) {
    // console.log(mouseX, mouseY)
    if (pointsX[num]-20<mouseX<pointsX[num]+20, pointsY[num]-20<mouseY<pointsY[num]+20) {
      pointsX[num] = mouseX 
      pointsY[num] = mouseY
    }
  }
// totalDist=0
  for (i = num; i > 0; i--) {
    distFunc(i, i - 1)
    // console.log(dist)
    // console.log(defaultDist)
    if (dist > defaultDist) {
      ratio = 1-(defaultDist/dist)
      // speedDivisor = 1.5
      speedX = distX*ratio
      speedY = distY*ratio
        pointsX[i - 1]+=speedX
        pointsY[i - 1]+=speedY
    }
    distFunc(i, i - 1)
    // totalDist+=dist
  }
  // console.clear()
  // console.log(totalDist)

  for (let i = 0; i < num; i++) {
      line(pointsX[i], pointsY[i], pointsX[i+1], pointsY[i+1])
      // circle(pointsX[i], pointsY[i], 4)
  }
  // circle(pointsX[0], pointsY[0], 8)
  circle(pointsX[num], pointsY[num], 8)
}
