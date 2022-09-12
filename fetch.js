let mainDiv = document.querySelector('#people');
let getPeopleBtn = mainDiv.querySelector('button');
getPeopleBtn.addEventListener('click', getPeople);

const peopleId = Math.floor(Math.random() * 90 + 1)
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
        return errorFunction(err.message);
    });
}

function tinkDom(dataObj) {
    for(let key in dataObj){
        let para = document.createElement('p');
        para.innerHTML += `${key} :  ${dataObj[key]}`;
        mainDiv.appendChild(para);
    }
}

