let mainDiv = document.querySelector('#people');
let getPeopleBtn = mainDiv.querySelector('button');
let getAllPeopleBtn = document.querySelector('#all-people');
getPeopleBtn.addEventListener('click', getPeople);
getAllPeopleBtn.addEventListener('click', getAllPeople);

const peopleId = Math.floor(Math.random() * 90 + 1)

function getAllPeople() {
    fetch('https://swapi.dev/api/people/')
    .then( (res)=>{
        return res.json();
    })
    .then((data)=>{
        return tinkDom(data.results);
    })
    .catch((error)=>{
        console.error(error);
    });
}
function getPeople(){
    fetch(`https://swapi.dev/api/people/${peopleId}/`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        //console.log(data);
        return tinkDom(data);
    })
    .catch((err)=>{
        console.error(err.message);
    });
}

function tinkDom(dataObj) {
    console.log(dataObj);
    for(let prop of dataObj){
        for(let key in prop){
        let para = document.createElement('p');
        para.innerHTML += `${key} :  ${prop[key]}`;
        mainDiv.appendChild(para);
        }
    }
    
}

