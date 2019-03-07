
function Student(name,surname,bornYear,) {
    this.name = name;
    this.surname = surname;
    this.bornYear = bornYear;
    this.presentArray = [];

    this.getBornYear = function () {
        return  this.bornYear
    }
    this.present = function (mark) {
        if (this.presentArray.length <= 25) this.presentArray.push({present: true, mark: mark})
    }
    this.apsent = function () {
        if (this.presentArray.length <= 25) this.presentArray.push({present: false, mark: 0})
    }
    this.summar = function () {
        var marksSumm = this.presentArray.reduce((a,b)=>{
            if(b.mark != 0){
                return {mark: a.mark + b.mark};
            } else {
                return a;
            }
        }).mark
        var middleMark = marksSumm / this.presentArray.length;
        var middlePresent = this.presentArray.length / this.presentArray.filter((a) => a.present==true).length
        
        if (middleMark >= 90 && middlePresent >= 0.9 ) {
            console.log('Ути какой молодчинка!');
        }else if (middleMark >= 90 || middlePresent >= 0.9){
            console.log('Норм, но можно лучше');
        }else {
            console.log('Редиска')
        }
        
        console.log("middleMark",middleMark);
        console.log("middlePresent",middlePresent);
    }
}

function StudentArray(...rest) {
    this.middlePresentForGroup = [];
    this.attendance = function () {
        if(!arguments.length){
            middlePresentForGroup = rest.map((student) => {

            })

        }
    }
}
Student.prototype = Student;
var sasha = new Student("Oleksandr", 'Tatarinov', 1999);
sasha.apsent();
sasha.present(90);
sasha.present(90);
sasha.present(90);
sasha.present(90);
var valera = new Student("Valera", "Зотович", 2000);;
valera.present(87);
valera.present(87);
valera.present(87);
valera.present(87);
var arrayStudents = new StudentArray(sasha,valera);
arrayStudents.attendance()

sasha.summar();