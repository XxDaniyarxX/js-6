const questions = [
    {
        image: "https://www.bcd.com.kg/img_abm/1.jpg",
        text: "Какой опознавательный знак должен быть установлен в обязательном порядке на механическом транспортном средстве управляемом водителем со стажем до двух лет?",
        options: ["Только А.", "А или В.", "Только Б.", "Б или В.", "Ни один из указанных."],
        correct: 0
    },
    {
        image: "https://www.bcd.com.kg/img_pdd/none.jpg",
        text: "Какой знак означает ограничение скорости до 70 км/ч?",
        options: ["А", "Б", "В", "Г", "Д"],
        correct: 1
    },
    {
        image: "https://www.bcd.com.kg/img_abm/2.jpg",
        text: "Какой знак предупреждает о возможной опасности на дороге?",
        options: ["А", "Б", "В", "Г", "Д"],
        correct: 2
    }
];

function loadQuestion(index) {
    const questionDiv = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');

    const question = questions[index];
    document.getElementById('question-image').src = question.image;
    questionDiv.innerText = question.text;
    optionsDiv.innerHTML = '';

    question.options.forEach((option, i) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${i}" onchange="checkAnswer(${index}, ${i})"> ${option}`;
        optionsDiv.appendChild(label);
    });

    resultDiv.innerText = '';
}

function checkAnswer(questionIndex, selectedIndex) {
    const optionsDiv = document.getElementById('options');
    const labels = optionsDiv.querySelectorAll('label');
    
    labels.forEach((label, index) => {
        label.style.pointerEvents = 'none'; // Отключаем возможность выбора после ответа
        if (index === questions[questionIndex].correct) {
            label.classList.add('correct');
        } else if (index === selectedIndex) {
            label.classList.add('wrong');
        }
    });

    const resultDiv = document.getElementById('result');
    if (selectedIndex === questions[questionIndex].correct) {
        resultDiv.innerText = 'Правильно!';
    } else {
        resultDiv.innerText = 'Неправильно. Правильный ответ выделен зеленым цветом.';
    }
}

window.onload = function() {
    loadQuestion(0);
};
