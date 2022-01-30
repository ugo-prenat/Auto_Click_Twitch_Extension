// ----------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------------------------------------
function getTime() {
    let date = new Date()
    let min = date.getMinutes()

    if (min < 10) {
        min = '0' + min
    }

    let time = date.getHours() + ':' + min
    return time
}

// ----------------------------------------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------------------------------------

window.addEventListener('load', () => {
    let nbClick = 0
    streamUrl = window.location.href

    //console.log('Auto click activated')

    // Click loop
    setInterval(() => {
        let container = document.querySelector('.autoClickCountDownContainer')
        let chatInputBtn = document.querySelector('.chat-input .chat-input__buttons-container .hOHSTE')
        let giftBox = document.querySelector("div[data-test-selector=\"community-points-summary\"] .GTGMR button")
        let nbClickParagraph = document.querySelector('.autoClickNbClickParagraph')
        let lastClickParagraph = document.querySelector('.autoClickLastClickParagraph')

        if(!container && chatInputBtn) {
            chatInputBtn.insertAdjacentHTML('afterbegin', `
                <div class="autoClickCountDownContainer">
                    <p class="autoClickCountDown"></p>
                    <div class="autoClickInfosContainer">
                        <p class="autoClickNbClickParagraph">0 click</p>
                        <p class="autoClickLastClickParagraph">Script init at ${getTime()}</p>
                    </div>
                </div>
            `)
            setStyle()
        }

        if (giftBox) {
            giftBox.click()
            nbClick++
            nbClickParagraph.innerHTML = `${nbClick} click${nbClick > 1 ? 's' : ''}`;
            lastClickParagraph.innerHTML = `Last click at ${getTime()}`
            countDownFunction(15, 0)
        }

        // Case where user watches a new stream
        if (window.location.href != streamUrl) {
            console.log('new stream');
            streamUrl = window.location.href
            countDownFunction(15, 0)
        }

    }, 1000)
    
    countDownFunction(15, 0)
})