//--------------------------------------------------- 1 - uzduotis
function Notebook(totalPages, usedPages)
{
    this.totalPages = totalPages;
    this.usedPages = usedPages;
}

Notebook.prototype.use = function(pages)
{
    console.log(this.usedPages + pages);
}

Notebook.prototype.leftPages = function()
{
    console.log(this.totalPages - this.usedPages);
}

//--------------------------------------------------- 2 - uzduotis

class Notebook {
    constructor(totalPages, usedPages) {
        this.totalPages = totalPages;
        this.usedPages = usedPages;
    }

    get getInfo() {
        console.log(`This notebook has a total of: ${this.totalPages} pages of which ${this.usedPages} are used.`);
    }

    set add(emptyPages) {
        this.totalPages += emptyPages;
        console.log(`The number of total pages is ${this.totalPages}`);
    }

    use(pages) {
        console.log(this.usedPages + pages);
    }

    leftPages() {
        console.log(this.totalPages - this.usedPages);
    }
}

//----------------------------------------------------- 2(b) - uzduotis
const Notebook = {
    get getInfo() {
        console.log(`This notebook has a total of: ${this.totalPages} pages of which ${this.usedPages} are used.`);
    },

    set add(emptyPages) {
        this.totalPages += emptyPages;
        console.log(`The number of total pages is ${this.totalPages}`);
    },
    use(pages) {
        console.log(this.usedPages + pages);
    },

    leftPages() {
        console.log(this.totalPages - this.usedPages);
    }
}


const first = Object.create(Notebook);
first.totalPages = 250;
first.usedPages = 125;
// const first = new Notebook(200, 150);

first.leftPages();
first.use(25);
first.getInfo;
first.add = 25;

// const second = new Notebook(300, 250);

// second.leftPages();
// second.use(35);
// second.getInfo;
// second.add = 25;

// ------------------------------------------------------ 3 - uzduotis
function Vehicle(wheelCount, speed){
    this.wheelCount = wheelCount;
    this.speed = speed;
}

Vehicle.prototype.addSpeed = function(){
    this.speed += 10;
}

Vehicle.prototype.break = function(){
    this.speed -= 5;
}

Vehicle.prototype.getSpeed = function(){
    console.log(this.speed);
}

function Car(wheelCount, speed){
    Vehicle.call(this, wheelCount, speed);
}
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.blink = function(){
    console.log("blink blink");
}

function Bicycle(wheelCount, speed){
    Vehicle.call(this, wheelCount, speed);
}
Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.beep = function(){
    console.log("beep beep");
}
const bmx = new Bicycle(2, 40);
bmx.beep();
bmx.getSpeed();