const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const rowNum = 10, colNum = 10;

class Field {
    constructor() {
        this._field = Array(rowNum).fill().map(() => Array(colNum));
        this._locationX = 0;
        this._locationY = 0;
    }

    generateField(percentage) {

        for (let y = 0; y < rowNum; y++) {
            for (let x = 0; x < colNum; x++) {
                const prob = Math.random();
                this._field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }

        //Set the "hat" location : Object
        const hatLocation = {
            x: Math.floor(Math.random() * colNum),
            y: Math.floor(Math.random() * rowNum)
        };


        //Make sure the "hat" is not at the starting point
        while (hatLocation.x == 0 && hatLocation.y == 0) {
            hatLocation.x = Math.floor(Math.random() * colNum);
            hatLocation.y = Math.floor(Math.random() * rowNum);
        }

        this._field[hatLocation.y][hatLocation.x] = hat;

        //Set the "home" position before the game starts
        this._field[0][0] = pathCharacter;
    }

    runGame() {
        let playing = true;
        console.log("Start Game");
        //print the field
        this.print();
        this.askQuestion();
    }

    print() {
        const displayString = this._field.map(row => {
            return row.join('');
        }).join('\n');

        console.log(displayString);
    }

    askQuestion() {
        const direction = prompt('Which way? ').toUpperCase();
        switch (direction) {

            case "W":
                this._locationY -= 1;
                if (this._locationY >= 0 && this._locationY < 10 && this._locationX >= 0 && this._locationX < 10) {
                    if (this._field[this._locationY][this._locationX] === hat) {
                        console.log("Yay, you win!");
                    } else if (this._field[this._locationY][this._locationX] === hole) {
                        console.log("Uh oh, you fell downnnnnnn.......... Try again!");
                    } else {
                    this._field[this._locationY][this._locationX] = pathCharacter;
                    this.print();
                    this.askQuestion();
                    } 
                } else {
                    console.log("You have reached a wall, try again!");
                }
                break;

            case "S":
                this._locationY += 1;
                if (this._locationY >= 0 && this._locationY < 10 && this._locationX >= 0 && this._locationX < 10) { 
                    if (this._field[this._locationY][this._locationX] === hat) {
                        console.log("Yay, you win!");
                    } else if (this._field[this._locationY][this._locationX] === hole) {
                        console.log("Uh oh, you fell downnnnnnn.......... Try again!");
                    } else {
                    this._field[this._locationY][this._locationX] = pathCharacter;
                    this.print();
                    this.askQuestion();
                    }
                } else {
                    console.log("You have reached a wall, try again!");
                }
                break;

            case "A":
                this._locationX -= 1;
                if (this._locationY >= 0 && this._locationY < 10 && this._locationX >= 0 && this._locationX < 10) {
                    if (this._field[this._locationY][this._locationX] === hat) {
                        console.log("Yay, you win!");
                    } else if (this._field[this._locationY][this._locationX] === hole) {
                        console.log("Uh oh, you fell downnnnnnn.......... Try again!");
                    } else {
                    this._field[this._locationY][this._locationX] = pathCharacter;
                    this.print();
                    this.askQuestion();
                    }
                } else {
                    console.log("You have reached a wall, try again!");
                }
                break;

            case "D":
                this._locationX += 1;
                if (this._locationY >= 0 && this._locationY < 10 && this._locationX >= 0 && this._locationX < 10) {
                    if (this._field[this._locationY][this._locationX] === hat) {
                        console.log("Yay, you win!");
                    } else if (this._field[this._locationY][this._locationX] === hole) {
                        console.log("Uh oh, you fell downnnnnnn.......... Try again!");
                    } else {
                    this._field[this._locationY][this._locationX] = pathCharacter;
                    this.print();
                    this.askQuestion();
                    }
                } else {
                    console.log("You have reached a wall, try again!");
                }
                break;
                
            default:
                console.log("Please key in a direction!");
                break;
            }   
    }    
}

//Create an instance of Field Class Object
const myField = new Field();
myField.generateField(0.3);
myField.runGame();



