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
    return distance * consumption / 100
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
    if (number % 3 == 0 && number % 5 == 0) {
        return `FizzBuzz`
    } else if (number % 3 == 0) {
        return `Fizz`
    } else if (number % 5 == 0) {
        return `Buzz`
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
        if (age >= 15) {
            return "Moze oglądać film"
        }
        if (age < 15 && isAllowed) {
            return "Moze oglądać film"
        } else if (age < 15 && !isAllowed) {
            return "Nie moze oglądać filmu"
        }
    }

    console.log(canWatchMovie(15))
    console.log(canWatchMovie(14, true))
    console.log(canWatchMovie(14, false))

    //Zadanie 3f

    function falseTrue(value) {
        return ((value == true) ? "Tak" : "Nie")
    }

    console.log(falseTrue(true))
    console.log(falseTrue(false))

    //Zadanie 3g

    function evenOdd(value) {
        return ((value % 2 == 0) ? "Liczba jest parzysta" : "Liczba jest parzysta")
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
        if (inputCar.rokProdukcji >= 2021) {
            return `Model jeszcze nie jest dostępny`
        } else if (inputCar.rokProdukcji <= 2020) {
            return `Samochód który Cię interesuje to ${inputCar.marka}, model - ${inputCar.model}. Jest to rocznik ${inputCar.rokProdukcji}, a więc ma tylko ${(2021 - inputCar.rokProdukcji)} lata. Pojazd ten ${(inputCar.isCabrio ? "jest kabrioletem" : "nie jest kabrioletem")}`
        }
    }

    console.log(whatCarIsIt(car))
    car.isCabrio = false
    console.log(whatCarIsIt(car))
    car.rokProdukcji = 2022
    console.log(whatCarIsIt(car))

    //Zadanie 4b


    function tableLength(inputTable) {
        if (inputTable.length == 0) {
            return "Tablica jest pusta"
        } else {
            return `Tablica ma ${inputTable.length} elementów`
        }
    }
    let table10 = [1, 2, 3]
    console.log(tableLength(table10))
    let table11 = []
    console.log(tableLength(table11))

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
        if(inputOsoba.czyLubiCzytacKsiazki == true) {
            return `Cześć ${inputOsoba.nazwisko}, powinieneś/powinnaś poczytać książkę, na przykład ${inputKsiazka.tytul}, z gatunku ${inputKsiazka.rodzaj} - ma tylko ${inputKsiazka.liczbaStron} stron.`
        } else {
            if (inputOsoba.maTV == false) {
                return `Cześć ${inputOsoba.nazwisko}, skoro nie lubisz książek i nie masz telewizora, proponuję iść pobiegać`
            } else {
                return `Cześć ${inputOsoba.nazwisko}, skoro nie lubisz książek, może pooglądasz telewizję?`
            }
        }
    }

    osoba.czyLubiCzytacKsiazki=true
    console.log(recommendation(osoba, ksiazka))
    osoba.czyLubiCzytacKsiazki = false
    osoba.maTV=true
    console.log(recommendation(osoba, ksiazka))
    osoba.czyLubiCzytacKsiazki = false
    osoba.maTV = false
    console.log(recommendation(osoba, ksiazka))
