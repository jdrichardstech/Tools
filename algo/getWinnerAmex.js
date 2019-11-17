class Game {
    constructor() {
        this.players = {}
    }

    addPoint(name) {
        // if(this.players[name]) return this.players[name] = this.players[name]+1
        // else return this.players[name] = 1
        return this.players[name]
            ? (this.players[name] = this.players[name] + 1)
            : (this.players[name] = 1)
    }

    getWinner() {
        let winnerArray = []
        let count = 0
        let arr = Object.entries(this.players)
        arr.map(item => {
            if (item[1] > count) {
                count = item[1]
                winnerArray.splice(0)
                winnerArray.push(item[0])
            } else if (item[1] === count) {
                winnerArray.push(item[0])
            }
        })
        return winnerArray
    }
}

const game = new Game()
// game.addPoint('JD')
// game.addPoint('JD')
// game.addPoint('Tom')
// game.addPoint('Tom')
// console.log(game.players)
// console.log(game.getWinner())
game.addPoint('JD')
game.addPoint('JD')
game.addPoint('Dave')
game.addPoint('Tom')
game.addPoint('Tom')
game.addPoint('Dave')
game.addPoint('JD')
game.addPoint('Tom')
game.getWinner() // Should return ["JD", "Tom"]
