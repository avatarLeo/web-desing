let items = document.getElementsByClassName('item')
let ef = items[0]
let chield = ef.children
ef.childNodes
// chield[0].setAttribute('src', 'asserts/img/circle.png')
players = {
    player1:{
        name: 'player one',
        _turn: true,
        get turn(){
            this._turn = !this._turn
            return !this._turn
        },
        image: 'asserts/img/circle.png'
    },
    player2:{
        name: 'player two',
        _turn: false,
        get turn(){
            this._turn = !this._turn
            return !this._turn
        },
        image: 'asserts/img/x.png'
    },
    whoTurn(){
        if(this.player1.turn){
            this.player2.turn
            return this.player1
        }else{
            this.player2.turn
            return this.player2
        }
    }
}
items = Object.values(items)



function changeImages(event){
    let player = players.whoTurn()
    let image = event.target.children
    if(image.length > 0)
        image[0].setAttribute('src', player.image)
}


function onClicks(element){
    element.addEventListener('click', changeImages)

}

items.forEach(onClicks);