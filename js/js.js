var button = document.querySelector('button')
var body = document.querySelector('body')
var colors = ['#2874A6', '#196F3D', '#9A7D0A', '#A04000', '#CB4335', '#BB8FCE']

body.style.backgroundColor= '9A7D0A'

button.addEventListener('click', changeBackhground)

function changeBackhground(){
    var color = parseInt(Math.random()*
    colors.length)
    body.style.backgroundColor = colors[color]
}