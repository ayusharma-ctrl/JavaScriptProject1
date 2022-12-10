var profession = document.getElementById('profession')
var cardsDiv = document.getElementsByTagName('div')[1]
var cardsDiv1 = document.getElementsByTagName('div')[2]
var cardsDiv2 = document.getElementsByTagName('div')[3]
var button = document.getElementsByTagName('button')[0]


var card1 = document.getElementsByClassName('box')[0]
var card2 = document.getElementsByClassName('box')[1]
var card3 = document.getElementsByClassName('box')[2]
var card4 = document.getElementsByClassName('box')[3]


var array = [
    { id: 1, name: "John", age: "18", profession: "Developer" },
    { id: 2, name: "Jack", age: "20", profession: "Developer" },
    { id: 3, name: "Karen", age: "19", profession: "Admin" }
]

array.map(datatypeChangeFunction)

function datatypeChangeFunction(e) {
    e.age = Number(e.age)
}




var idDev = 1
var idAdm = 1
for (var i = 0; i < array.length; i++) {
    var card = document.createElement("div")
    card.className = 'box'
    if (array[i].profession == 'Developer') {
        card.innerHTML = `${idDev}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${array[i].name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${array[i].age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${array[i].profession}`
        idDev++
    }
    else {
        card.innerHTML = `${idAdm}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${array[i].name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${array[i].age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${array[i].profession}`
        idAdm++
    }
    cardsDiv.append(card)
}


function displayingNewlyInserted() {
    for (var i = array.length - 1; i < array.length; i++) {
        var card = document.createElement("div")
        card.className = 'box'
        if (array[i].profession == 'Developer') {
            card.innerHTML = `${idDev}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${array[i].name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${array[i].age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${array[i].profession}`
            idDev++
        }
        else {
            card.innerHTML = `${idAdm}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${array[i].name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${array[i].age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${array[i].profession}`
            idAdm++
        }
        cardsDiv.append(card)
    }
}

array.push({ id: 4, name: "Riddhi", age: "25", profession: "Admin" })
displayingNewlyInserted()


button.onclick = function () {

    value = profession.value;

    if (value == 'Developer' || value == 'Admin') {

        array.forEach(function (e){
            if(e.name == 'John'){
                e.age = 19
            }
        })

        array.push({ id: 5, name: "Yesh", age: "31", profession: "Developer" })

        cardsDiv.style.display = 'none'
        if (value == 'Developer') {
            let developers = array.filter(e => e.profession == "Developer")
            var idDev1 = 1
            for (var i = 0; i < developers.length; i++) {
                var card = document.createElement("div")
                card.className = 'box'
                card.innerHTML = `${idDev1}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${developers[i].name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${developers[i].age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${developers[i].profession}`
                idDev1++
                cardsDiv1.append(card)
            }
        }

        else{
            cardsDiv1.style.display = 'none'
            let admins = array.filter(e => e.profession == "Admin")
            var idAdm1 = 1
            for (var i = 0; i < admins.length; i++) {
                var card = document.createElement("div")
                card.className = 'box'
                card.innerHTML = `${idAdm1}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${admins[i].name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${admins[i].age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${admins[i].profession}`
                idAdm1++
                cardsDiv2.append(card)
            }
        }

    }
    else {
        alert('Please select profession')
    }

}