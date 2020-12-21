let content = document.getElementById('content');
let score = 0;
let quize = 0;
let isClickedOnSubmit = 0;



window.onload = function() {
    document.getElementById('submit').style.opacity = 1
    content.innerHTML = getHtml()
    randomizeAnswerOrder()
}

function randomizeAnswerOrder() {
    let answers = document.querySelectorAll('.answers');
    let randomIndex = Math.round(Math.random() * 3)
    let tmpPosition = answers[randomIndex].innerHTML
    answers[randomIndex].innerHTML = ''
    answers[randomIndex].innerHTML = answers[0].innerHTML
    answers[0].innerHTML = tmpPosition
}

function getHtml() {
    return `
    <div class="top">
    <h3 class="question">${questions[quize].question} ?</h3>
    <img src="${questions[quize].img}" alt="">
</div>
<div class="bottom">
    <div class="answers a"><p onclick='selectClickedElement(this)' class="answer">${questions[quize].correctAnswer}</p></div>
    <div class="answers b"><p onclick='selectClickedElement(this)' class="answer">${questions[quize].wrongAnswer1}</p></div>
    <div class="answers c"><p onclick='selectClickedElement(this)' class="answer">${questions[quize].wrongAnswer2}</p></div>
    <div class="answers d"><p onclick='selectClickedElement(this)' class="answer">${questions[quize].wrongAnswer3}</p></div>
</div>
`
}

function selectClickedElement(element) {
    let answers = document.querySelectorAll('.answers');
    answers.forEach(elements => {
            elements.style.background = 'rgba(0, 0, 0, 0.5)';
            elements.style.color = 'white';
        }) //when click on element turn it yellow
    if (isClickedOnSubmit == 0) {
        element.parentElement.style.background = 'rgb(249, 221, 7)'; //Yellow
        element.parentElement.style.color = 'rgba(0, 0, 0, 0.5)';
    } else {
        alert('you can not change your answer after submiting')
        document.getElementById('submit').textContent = 'Submit Answer'

        quize++
        content.innerHTML = ''
        if (quize < questions.length) {
            content.innerHTML = getHtml()
        } else {
            content.innerHTML = `<div class="score">Your Score is: ${score}</div>`
        }
        randomizeAnswerOrder()
        isClickedOnSubmit = 0
    }
}



function submitAnswer(thisElement) {
    let answers = document.querySelectorAll('.answers');
    let scoreDisplay = document.getElementById('score-display');

    if (isClickedOnSubmit == 0) {
        answers.forEach(elements => {
            if (elements.style.background == 'rgb(249, 221, 7)') { //Yellow
                if (elements.querySelector('p').textContent == questions[quize].correctAnswer) {
                    elements.style.background = 'rgb(19, 221, 19)'; //Green
                    score++
                } else {
                    elements.style.background = 'rgb(221, 19, 19)'; //red
                }
            } else if (elements.style.background != 'rgb(249, 221, 7)') {
                elements.style.background = 'rgb(221, 19, 19)'
                if (elements.querySelector('p').textContent == questions[quize].correctAnswer) {
                    elements.style.background = 'rgb(19, 221, 19)'; //Green
                }
            }

        })
    }
    scoreDisplay.textContent = score
    goToTheNextQuestion(thisElement)
}

function goToTheNextQuestion(thisElement) {
    let answers = document.querySelectorAll('.answers');
    isClickedOnSubmit++
    thisElement.textContent = 'Next'
    if (isClickedOnSubmit == 2) {
        answers.forEach(elements => {
            elements.style.background = 'rgba(0, 0, 0, 0.5)';
            elements.style.color = 'white';
            thisElement.textContent = 'Submit Answer'
        })
        quize++
        content.innerHTML = ''
        if (quize < questions.length) {
            content.innerHTML = getHtml()
        } else {
            content.innerHTML = `<section class='last-section'>
            <div class="score">Your Score is: ${score}</div>
            <a class='goToHomePage' href="index.html">Go to the Home Page</a>
            </section>
            `
            document.getElementById('submit').style.opacity = 0
        }
        randomizeAnswerOrder()
        isClickedOnSubmit = 0
    }
}