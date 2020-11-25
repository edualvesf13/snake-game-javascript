let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') // contexto de renderização em 2D para a superfície de desenho do elemento 
let box = 32
let snake = []
let direction = 'right'
let game = setInterval(startGame, 100)

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box) // (px, py, altura, largura)
}

function criarSnake() {
    for(let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function startGame() {
    criarBG()
    criarSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == 'right') snakeX += box
    if (direction == 'left') snakeX -= box
    if (direction == 'up') snakeY -= box
    if (direction == 'down') snakeY += box

    snake.pop()

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}