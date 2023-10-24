const canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	foodImg = new Image()
foodImg.src = 'apple.png'

const box = 50
let score = 0

let food = {
	x: Math.floor(Math.random() * 10 + 1) * box,
	y: Math.floor(Math.random() * 10 + 1) * box
}
let snake = [

]
snake[0] = {
	x: box * 7,
	y: box * 7
}

document.addEventListener('keydown', direction)

let dir

function direction(event) {
	if (event.keyCode == 37 && dir != 'right') {
		dir = 'left'
	}
	else if (event.keyCode == 38 && dir != 'down') {
		dir = 'up'
	}
	else if (event.keyCode == 39 && dir != 'left') {
		dir = 'right'
	}
	else if (event.keyCode == 40 && dir != 'up') {
		dir = 'down'
	}
}

function drawgame() {
	ctx.drawImage(foodImg, food.x, food.y)
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = 'green'
		ctx.fillRect(snake[i].x, snake[i].y, box, box)
	}
	let snakeX = snake[0].x
	let snakeY = snake[0].y

	if (snakeX == food.x && snakeY == food.y) {
		food = {
			x: Math.floor(Math.random() * 10 + 1) * box,
			y: Math.floor(Math.random() * 10 + 1) * box
		}

	} else {
		snake.pop()
	}

	if (dir == 'left') snakeX -= box
	if (dir == 'right') snakeX += box
	if (dir == 'up') snakeY -= box
	if (dir == 'down') snakeY += box

	let newHead = {
		x: snakeX,
		y: snakeY
	}
	snake.unshift(newHead)


}
const game = setInterval(drawgame, 300)