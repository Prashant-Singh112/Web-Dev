// import platform from './images/platform.png'
// console.log(platform)
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5

const keys={
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 50
        this.height = 50
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else
            this.velocity.y = 0
    }
}

class Platform {
    constructor({x,y}) {
        this.position = {
            x,
            y
        }
        this.width = 200
        this.height = 20
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
const platforms =[new Platform({x:200,y:100}),new Platform({x:500,y:200})]


let scrolloffset=0;

function animate() {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    platforms.forEach((platform)=>{
        platform.draw()
    })

    if(keys.right.pressed && player.position.x<500){
     player.velocity.x=5;
    }
    else if(keys.left.pressed && player.position.x>100){
      player.velocity.x=-5;  
    }
    else {
        player.velocity.x=0;
        if(keys.right.pressed){
            scrolloffset+=5;
            platforms.forEach((platform)=>{
                platform.position.x-=5;
            })
        }
        if(keys.left.pressed){
            scrolloffset-=5;
            platforms.forEach((platform)=>{
                platform.position.x+=5;
            })
        }
    }
    console.log(scrolloffset);

    //platform collision detection
    platforms.forEach((platform)=>{
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x <= platform.position.x + platform.width && player.position.x + player.width >= platform.position.x)
        player.velocity.y = 0;
    })
   
     if(scrolloffset>2000)
     console.log('you win')
    //  if(player.position.y+player.velocity.y<platform.position.y+platform.height  || player.position.y+player.velocity.y<0 )
    //     player.velocity.y=0;   
}

animate()

addEventListener('keydown', (event) => {
    console.log(event.keyCode)
    switch (event.keyCode) {
        case 65: console.log('left'); keys.left.pressed=true; break;
        case 83: console.log('down'); break;
        case 87: console.log('up'); player.velocity.y -= 15; break;
        case 68: console.log('right'); keys.right.pressed=true; break;
    }
})

addEventListener('keyup', (event) => {
    console.log(event.keyCode)
    switch (event.keyCode) {
        case 65: console.log('left'); keys.left.pressed=false; break;
        case 83: console.log('down'); break;
        case 87: console.log('up'); break;
        case 68: console.log('right'); keys.right.pressed=false ;break;
    }
})

