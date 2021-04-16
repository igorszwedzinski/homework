//Zadanie 1a
function addThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3
}
console.log(addThreeNumbers(1, 2, 3))

//Zadanie 1b

function triangleSurface(height, width) {
    console.log(`Pole trójkąta to ${width * height / 2} czyli ma on ${width} długości podstawy i ${height} wysokości`)
}
triangleSurface(1, 2)

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
    console.log(`${name} ma ${age} lat i ${kids} dzieci`)
}
sentence ("Ala",23,2)

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
    console.log(`Przekazana tablica ma ${inputTable.length} elementów, a elementem nr 3 jest ${inputTable[2]}`)
}
returnLength(table3)

//Zadanie 2d

let table4 = []
function returnInjectedTable(inputTable, value) {
    inputTable[0] = value
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
    console.log(`${firstName} ${lastName} ma ${age} lat i ${height} cm wzrostu`)
}
returnPerson("Igor", "Szwedziński", 49, 193)

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
        console.log("Mozesz śmiało jeździć")
    } else if (age >=18 && hasDrivingLicence==false) {
        console.log("Nie ma prawa jazdy")
    } else {
        console.log("Nie ma prawa jazdy")
    }
}
allowedToDrive(18,true)
allowedToDrive(18, false)
allowedToDrive(17, true)
allowedToDrive(17, false)

//Zadanie 3b

function sellBuy(action) {
    if (action == "Kup") {
        console.log('Widzę, że zrobisz zakupy')
    } else if (action == "Sprzedaj") {
        console.log('Mozesz tutaj swobodnie sprzedawać')
    } else {
        console.log('Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj')
    }
}

sellBuy("Kup")
sellBuy("Sprzedaj")
sellBuy("Nie wiem co mam robić")

//Zadanie 3c

function positiveNegativeZero(number) {
    if (number > 0) {
        console.log("Liczna jest dodatnia")
    } else if (number < 0) {
        console.log("Liczna jest ujemna")
    } else {
        console.log("Liczna jest równa 0")
    }
}

positiveNegativeZero(5)
positiveNegativeZero(-6)
positiveNegativeZero(0)

//Zadanie 3d

function modulo(number) {
    if (number % 3 == 0) {
        console.log("Fizz")
    } else if (number % 5== 0) {
        console.log("Buzz")
    } else {
        console.log("FizzBuzz")
    }
}

modulo(3)
modulo(21)
modulo(5)
modulo(100)
modulo(7)
modulo(8)

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
    isCabrio: false,
}
function whatCarIsIt(inputCar) {
    var date = new Date();
    
    if (inputCar.rokProdukcji > date.getFullYear()) {
        console.log("Tego auta jeszcze nie wyprodukowano")
    } else {
        (inputCar.isCabrio) ? console.log(`Typ nadwozia: Kabriolet, Model: ${inputCar.model}, Marka: ${inputCar.marka}, Rok produkcji: ${inputCar.rokProdukcji}`) : console.log(`Typ nadwozia: Niekabriolet, Model: ${inputCar.model}, Marka: ${inputCar.marka}, Rok produkcji: ${inputCar.rokProdukcji}`)
    }
}

whatCarIsIt(car)

//Zadanie 4b

let table10 = []
function tableLength(inputTable) {
    if (inputTable.length == 0) {
        console.log("Tablica jest pusta")
    } else {
        console.log(`Tablica ma ${inputTable.length} elementów`)
    }
}

tableLength(table10)

//Zadanie 4c

let osoba = {
    imie: "Zenon",
    nazwisko: "Jaskóła",
    wiek: 23,
    czyLubiCzytacKsiazki: true,
    maTV: true,
}

let ksiazka = {
    tytul: "Śmierć w Wenecji",
    rodzaj: "Kryminał",
    liczbaStron: 350,
}

function recommendation(inputOsoba, inputKsiazka) {
    if (inputOsoba.czyLubiCzytacKsiazki == true) {
        console.log(`Cześć ${inputOsoba.imie}, polecam Ci przeczytać ${inputKsiazka.tytul}, ma tylko ${inputKsiazka.liczbaStron} stron.`)
    } else {
        (inputOsoba.maTV) ? console.log("Idź oglądać TV") : console.log("Nie wiem co Ci zaproponować")
    }
}

recommendation(osoba,ksiazka)