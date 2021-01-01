let countDownVariable

function countDownFunction() {

    let countDownDate = new Date().getTime() + 15 * 60 * 1000

    // Case where a count down was already been initialized
    if (countDownVariable) {
        clearInterval(countDownVariable)
    }

    countDownVariable = setInterval(() => {
        let giftBox = document.querySelector('.community-points-summary .tw-button--success')
        let countDown = document.querySelector('.autoClickCountDown')
        let actualDate = new Date().getTime()
        let diffTime = countDownDate - actualDate
        let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        if (diffTime < 0 || giftBox) {
            minutes = 0
            seconds = 0
        }

        if (seconds < 10) {
            seconds = '0' + seconds
        }
        
        countDown.innerHTML = minutes + ':' + seconds

    }, 1000)
}