let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') // contexto de renderização em 2D para a superfície de desenho do elemento 
let box = 32
let snake = []

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

criarBG()
criarSnake()