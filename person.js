function Person(name, age, address) {
    this.name = name;
    this.address = address;
    this.getAge = function() {
        return age;
    }
    this.setAge = function(newAge) {
        age = newAge;
    }
}

const pho = new Person('Pho', 18, 'Binh Thanh');
console.log(pho.getAge());
pho.setAge(17);
console.log(pho.getAge());
