let quizzeArr = [
    {
        img: 'https://i.pinimg.com/474x/ab/82/b4/ab82b479321a81eae49d6a369171920d.jpg',
        title: 'რამდენად კარგად იცნობ საქართველოს',
        id: 'geo'
    },
    {
        img: './assets/burtebi.jpg',
        title: 'რამდენად კარგად იცი ფაქტები მსოფლიო სპორტის შესახებ',
        id: 'sport'
    },
    {
        img: './assets/medicine.jpg',
        title: 'ფაქტები მედიცინიდან',
        id: 'medicine'
    },
    {
        img: './assets/geograpia.png',
        title: 'გამოცადე შენი თავი გეოგრაფიაში',
        id: 'geography'
    }
]

window.onload = () => {
    let quizzeContainer = document.querySelector('.quize-container')
    quizzeArr.forEach((el) => {
        quizzeContainer.innerHTML += generateHtml(el)
        console.log(el)
    })
}





function generateHtml(e) {
    return `  <div class="flip-box">
    <div class="flip-box-inner">
        <div class="flip-box-front">
            <img src="${e.img}" alt="map">
        </div>
        <div class="flip-box-back">
            <h3>${e.title}</h3>
            <button class="btn btn-success" onclick="getQuizeData(id)" id="${e.id}">
                <a href="./quize.html">
                    Start Now
                </a>
            </button>
        </div>
    </div>
</div>`
}

function getQuizeData(id) {
    localStorage.setItem('selected', id)
}