//Truc tiep

const obj = {
    name: 'KhoaPham',
    age: 30
};

console.log(obj);

//Tao qua lop doi tuong
// function class

function Employee(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.addAge = function(){
        this.age++;
    }
}

const pho = new Employee('PHO', 18);
console.log(pho);
pho.addAge();
console.log(pho);
// console.log(pho.name);

function Point(x, y) {
    this.x = x;
    this.y = y;

    this.show = function(){
        console.log('Chao ' + x + ' ' + y);
    }
}  

const A = new Point(0, 0);
A.show();
console.log(A);

function Line(a, b) {
    this.a = a;
    this.b = b;
    this.getLength = function() {
        const dx = this.b.x - this.a.x;
        const dy = this.b.y - this.a.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

function Triagle(diemA, diemB, diemC) {
    this.diemA = diemA;
    this.diemB = diemB;
    this.diemC = diemC;

    this.getChuVi = function() {
        const AB = new Line(this.diemA, this.diemB);
        const BC = new Line(this.diemB, this.diemC);
        const AC = new Line(this.diemA, this.diemC);
        return AB.getLength() + BC.getLength() + AC.getLength();
    }
}

const C = new Point(0, 0);
const D = new Point(1, 0);
const E = new Point(0, 1);

const CDE = new Triagle(C, D, E);
console.log('CHU VI', CDE.getChuVi());

const CD = new Line(C, D);
console.log('KET QUA:', CD.getLength())
console.log(JSON.stringify(CD));