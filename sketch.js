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

  // if (mouseIsPressed && 0<mouseX<400 && 0<mouseY<400) {
    if (mouseX<canvasX && mouseY<canvasY) {
      // console.log(mouseX, mouseY)
    if (pointsX[num]-20<mouseX<pointsX[num]+20, pointsY[num]-20<mouseY<pointsY[num]+20) {
      pointsX[num] = mouseX 
      pointsY[num] = mouseY
    }
  }

  for (i = num; i > 0; i--) {
    distFunc(i, i - 1)
    // console.log(dist)
    // console.log(defaultDist)
    if (dist > defaultDist) {

      // speed = 5
      // if (pointsX[i - 1] < [pointsX[i]]) {
      //   pointsX[i - 1]+=speed
      // }
      // if (pointsX[i - 1] > [pointsX[i]]) {
      //   pointsX[i - 1]-=speed
      // }
      // if (pointsY[i - 1] < [pointsY[i]]) {
      //   pointsY[i - 1]+=speed
      // }
      // if (pointsY[i - 1] > [pointsY[i]]) {
      //   pointsY[i - 1]-=speed
      // }

      speedDivisor = 1.5
      speedX = distX/speedDivisor
      speedY = distY/speedDivisor
      if (pointsX[i - 1] < [pointsX[i]]) {
        pointsX[i - 1]+=speedX
      }
      if (pointsX[i - 1] > [pointsX[i]]) {
        pointsX[i - 1]+=speedX
      }
      if (pointsY[i - 1] < [pointsY[i]]) {
        pointsY[i - 1]+=speedY
      }
      if (pointsY[i - 1] > [pointsY[i]]) {
        pointsY[i - 1]+=speedY
      }
    }
  }

  for (let i = 0; i < num; i++) {
      line(pointsX[i], pointsY[i], pointsX[i+1], pointsY[i+1])
      // circle(pointsX[i], pointsY[i], 4)
  }
  // circle(pointsX[0], pointsY[0], 8)
  circle(pointsX[num], pointsY[num], 8)
}