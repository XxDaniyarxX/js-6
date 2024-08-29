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

let currentQuestion = 0;

function loadQuestion() {
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');

    const question = questions[currentQuestion];
    questionDiv.querySelector('img').src = question.image;
    questionDiv.querySelector('p').innerText = question.text;
    optionsDiv.innerHTML = '';

    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
        optionsDiv.appendChild(label);
    });

    resultDiv.innerText = '';
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const resultDiv = document.getElementById('result');

    if (!selectedOption) {
        resultDiv.innerText = 'Пожалуйста, выберите ответ.';
        return;
    }

    const answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestion].correct) {
        resultDiv.innerText = 'Правильно!';
    } else {
        resultDiv.innerText = 'Неправильно. Попробуйте снова.';
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            loadQuestion();
        }, 2000); // Пауза 2 секунды перед следующим вопросом
    } else {
        resultDiv.innerText += ' Викторина завершена!';
    }
}

window.onload = loadQuestion;
