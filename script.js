let timelineData = null

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const work = data.find(item => item.title === "Work");
    const play = data.find(item => item.title === "Play");
    const study = data.find(item => item.title === "Study");
    const exercise = data.find(item => item.title === "Exercise");
    const social = data.find(item => item.title === "Social");
    const selfcare = data.find(item => item.title === "Self Care");

    const Daily = document.getElementById("choice-daily")
    const Weekly = document.getElementById("choice-weekly")
    const Monthly = document.getElementById("choice-monthly")

    timelineData = {work, play, study, exercise, social, selfcare}

    function update(period) {
        let x = null
        switch(period) {
            case "daily": 
            x = "Day"
            break

            case "weekly": 
            x = "Week"
            break

            case "monthly": 
            x = "Month"
            break
        }

        document.querySelector(".work-hrs").textContent = work.timeframes[period].current + "hrs"
        document.querySelector(".previous-work").textContent = "Last " + x + " - " + work.timeframes[period].previous + "hrs"

        document.querySelector(".play-hrs").textContent = play.timeframes[period].current + "hrs"
        document.querySelector(".previous-play").textContent = "Last " + x + " - " + play.timeframes[period].previous + "hrs"

        document.querySelector(".study-hrs").textContent = study.timeframes[period].current + "hrs"
        document.querySelector(".previous-study").textContent = "Last " + x + " - " + study.timeframes[period].previous + "hrs"

        document.querySelector(".exercise-hrs").textContent = exercise.timeframes[period].current + "hrs"
        document.querySelector(".previous-exercise").textContent = "Last " + x + " - " + exercise.timeframes[period].previous + "hrs"

        document.querySelector(".social-hrs").textContent = social.timeframes[period].current + "hrs"
        document.querySelector(".previous-social").textContent = "Last " + x + " - " + social.timeframes[period].previous + "hrs"

        document.querySelector(".selfcare-hrs").textContent = selfcare.timeframes[period].current + "hrs"
        document.querySelector(".previous-selfcare").textContent = "Last " + x + " - " + selfcare.timeframes[period].previous + "hrs"
    }
    update("weekly")
    Weekly.classList.add('active')

    Daily.addEventListener('click', (event) => {
        update("daily")
        Daily.classList.add('active')
        Weekly.classList.remove('active')
        Monthly.classList.remove('active')
    })

    Weekly.addEventListener('click', (event) => {
        update("weekly")
        Daily.classList.remove('active')
        Weekly.classList.add('active')
        Monthly.classList.remove('active')
    })

    Monthly.addEventListener('click', (event) => {
        update("monthly")
        Daily.classList.remove('active')
        Weekly.classList.remove('active')
        Monthly.classList.add('active')
    })
        
})
  .catch(error => console.error('Ошибка:', error));


