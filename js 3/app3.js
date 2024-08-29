//  [] - array  new Array()
//  {} - object new Object()
const questions = [
    {
        // key: value
        img: "https://www.bcd.com.kg/img_abm/2.jpg",
        quiz: 'Вы можете продолжить движение на следующем перекрестке:',
        variants: [
            'Только в направлении Б',
            'В направлениях А и Б',
            'В любом направлении из указанных',
        ],
        correctVar: 'В любом направлении из указанных'
    },
    {
        img: "https://www.bcd.com.kg/img_abm/2.jpg",
        quiz: 'Вы можете продолжить движение на следующем перекрестке:',
        variants: [
            'Только в направлении Б',
            'В направлениях А и Б',
            'В любом направлении из указанных',
        ],
        correctVar: 'В любом направлении из указанных'
    }
]
// DOM
const img = document.querySelector(".content-img  img")
const h5 = document.querySelector(".content  h5")
const ol = document.querySelector(".content  ol")
const btns = document.querySelector(".content  .btns")

img.src = questions[0].img
// h5.innerHTML = ` <span> ${questions[0].quiz} </span> `
h5.innerText = questions[0].quiz

for (let index = 0; index <  questions[0].variants.length; index++ ){
     ol.innerHTML += ` <li onclick="checkAnswer(${index})" >
      ${index + 1 }. ${questions[0].variants[index]} 
      </li> `
}


// function  degen emne?
// function kancha tYrY bar
// параметр
function checkAnswer(idx){
    let selectedVar = questions[0].variants[idx]

    if (selectedVar === questions[0].correctVar) {
        setClass(idx, 'green')
    } else {
        setClass(idx, 'tomato')
    }
}

function setClass(idx2, color){
     const vars = document.querySelectorAll('li')
     vars[idx2].style.background = color
}
var num = 5 
console.log(num);

