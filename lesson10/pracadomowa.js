//Zadanie 1a
function addThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3
}
console.log(addThreeNumbers(1, 2, 3))

//Zadanie 1b

function triangleSurface(height, width) {
    return `Pole trójkąta to ${width * height / 2} czyli ma on ${width} długości podstawy i ${height} wysokości`
}
console.log(triangleSurface(1, 2))

//Zadanie 1c

function drivingLicenceYears(age, ageOfGettingDrivingLicence) {
    return age - ageOfGettingDrivingLicence
}

console.log(drivingLicenceYears(48, 17))

//Zadanie 1d

function fuelConsumption(consumption, distance) {
    return distance / consumption
}
console.log(fuelConsumption(10, 100))

//Zadanie 1e

function sentence(name, age, kids) {
    return `${name} ma ${age} lat i ${kids} dzieci`
}
console.log(sentence("Ala",23,2))

//Zadanie 2a

let table = [1, 2, 3]
function returnTable(inputTable) {
    return inputTable
}
console.log(returnTable(table))

//Zadanie 2b

let table2 = [1, 2, 3]
function return2ndElement(inputTable) {
    return inputTable[1]
}
console.log(return2ndElement(table2))

//Zadanie 2c

let table3 = [1, 2, 3]
function returnLength(inputTable) {
    return `Przekazana tablica ma ${inputTable.length} elementów, a elementem nr 3 jest ${inputTable[2]}`
}
console.log(returnLength(table3))

//Zadanie 2d

let table4 = []
function returnInjectedTable(inputTable, value) {
    inputTable.push(value)
    return inputTable
}
console.log(returnInjectedTable(table4, "Ala"))

//Zadanie 2e

let person = {
    firstName: null,
    lastName: null,
    age: null,
}

function returnName(inputObject, name) {
    inputObject.firstName = name
    return inputObject
}
console.log(returnName(person, "Ala"))

//Zadanie 2f

function returnPerson(firstName, lastName, age, height) {
    return `${firstName} ${lastName} ma ${age} lat i ${height} cm wzrostu`
}
console.log(returnPerson("Igor", "Szwedziński", 49, 193))

//Zadanie 2g

let person2 = {
    age: null,
}
function returnChangedPerson (inputObject, inputAge){
    inputObject.age = inputAge
    return inputObject
}
console.log(returnChangedPerson(person2, 25))

//Zadanie 3a - w sumie w tym zadaniu wystrczyłby tylko if...else z pominięciem else if ale treść zadania kaze spradzić dodatkowo warunek wieku i nieposiadania prawka

function allowedToDrive(age, hasDrivingLicence) {
    if (age >= 18 && hasDrivingLicence == true){
        return "Mozesz śmiało jeździć"
    } else if (age >=18 && hasDrivingLicence==false) {
        return "Nie ma prawa jazdy"
    } else {
        return "Nie ma prawa jazdy"
    }
}
console.log(allowedToDrive(18,true))
console.log(allowedToDrive(18, false))
console.log(allowedToDrive(17, true))
console.log(allowedToDrive(17, false))

//Zadanie 3b

function sellBuy(action) {
    if (action == "Kup") {
        return 'Widzę, że zrobisz zakupy'
    } else if (action == "Sprzedaj") {
        return 'Mozesz tutaj swobodnie sprzedawać'
    } else {
        return 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'
    }
}

console.log(sellBuy("Kup"))
console.log(sellBuy("Sprzedaj"))
console.log(sellBuy("Nie wiem co mam robić"))

//Zadanie 3c

function positiveNegativeZero(number) {
    if (number > 0) {
        return "Liczna jest dodatnia"
    } else if (number < 0) {
        return "Liczna jest ujemna"
    } else {
        return "Liczna jest równa 0"
    }
}

console.log(positiveNegativeZero(5))
console.log(positiveNegativeZero(-6))
console.log(positiveNegativeZero(0))

//Zadanie 3d

function modulo(number) {
    if (number % 3 == 0) {
        return "Fizz"
    } else if (number % 5== 0) {
        return "Buzz"
    } else {
        return "FizzBuzz"
    }
}

console.log(modulo(3))
console.log(modulo(21))
console.log(modulo(5))
console.log(modulo(100))
console.log(modulo(7))
console.log(modulo(8))

//Zadanie 3e

function canWatchMovie(age, isAllowed) {
    (age >= 15) ? console.log("Moze oglądać film"): null;
    (age < 15 && isAllowed) ? console.log("Moze oglądać film") : null;
    (age < 15 && !isAllowed) ? console.log("Nie moze oglądać filmu") : null;
}

canWatchMovie(15)
canWatchMovie(14, true)
canWatchMovie(14, false)

//Zadanie 3f

function falseTrue(value) {
    if (value == true) {
         return "Tak"
    } else if (value == false) {
        return "Nie"
    }
}

console.log(falseTrue(true))
console.log(falseTrue(false))

//Zadanie 3g

function evenOdd(value) {
    if (value % 2 == 0) {
        return "Liczba jest parzysta"
    } else {
        return "Liczba jest nieparzysta"
    }
}

console.log(evenOdd(2))
console.log(evenOdd(100))
console.log(evenOdd(7))
console.log(evenOdd(97))

//Zadanie 4a

let car = {
    model: "Astra",
    marka: "Opel",
    rokProdukcji: 1999,
    isCabrio: true,
}
function whatCarIsIt(inputCar) {
    var date = new Date();
    
    if (inputCar.rokProdukcji > date.getFullYear()) {
        return "Tego auta jeszcze nie wyprodukowano"
    }
    if (inputCar.isCabrio) {
        return `Typ nadwozia: Kabriolet, Model: ${inputCar.model}, Marka: ${inputCar.marka}, Rok produkcji: ${inputCar.rokProdukcji}` 
    }

    return `Typ nadwozia: Niekabriolet, Model: ${inputCar.model}, Marka: ${inputCar.marka}, Rok produkcji: ${inputCar.rokProdukcji}`
}

console.log(whatCarIsIt(car))

//Zadanie 4b

let table10 = [1,2,3]
function tableLength(inputTable) {
    if (inputTable.length == 0) {
        return "Tablica jest pusta"
    } else {
        return `Tablica ma ${inputTable.length} elementów`
    }
}

console.log(tableLength(table10))

//Zadanie 4c

let osoba = {
    imie: "Zenon",
    nazwisko: "Jaskóła",
    wiek: 23,
    czyLubiCzytacKsiazki: true,
    maTV: false,
}

let ksiazka = {
    tytul: "Śmierć w Wenecji",
    rodzaj: "Kryminał",
    liczbaStron: 350,
}

function recommendation(inputOsoba, inputKsiazka) {
    if (inputOsoba.czyLubiCzytacKsiazki == true) {
        return `Cześć ${inputOsoba.imie}, polecam Ci przeczytać ${inputKsiazka.tytul}, ma tylko ${inputKsiazka.liczbaStron} stron.`
    }
    
    if (inputOsoba.maTV) {
        return "Idź oglądać TV" 
    }
    
    return "Nie wiem co Ci zaproponować"
}

console.log(recommendation(osoba,ksiazka))