function setStyle() {
    let chatInput = document.querySelector('.chat-input__buttons-container')
    let countDownContainer = document.querySelector('.autoClickCountDownContainer')
    let countDown = document.querySelector('.autoClickCountDown')
    let infosContainer = document.querySelector('.autoClickInfosContainer')
    let nbClickParagraph = document.querySelector('.autoClickNbClickParagraph')
    let lastClickParagraph = document.querySelector('.autoClickLastClickParagraph')

    chatInput.addEventListener('mouseover', () => {
        countDown.style.marginTop = '-30px'

        chatInput.addEventListener('mouseleave', () => {
            countDown.style.marginTop = '0'
        })
    })

    // Count down container style
    countDownContainer.style.marginRight = '-65px'
    countDownContainer.style.height = '30px'
    countDownContainer.style.overflow = 'hidden'

    // Count down paragraph style
    countDown.style.fontWeight = '600'
    countDown.style.cursor = 'default'
    countDown.style.height = '30px'
    countDown.style.display = 'flex'
    countDown.style.justifyContent = 'flex-end'
    countDown.style.alignItems = 'center'
    countDown.style.transition = 'margin-top .3s ease-in-out'

    // Infos container style
    infosContainer.style.width = '100%'
    infosContainer.style.height ='100%'
    infosContainer.style.cursor = 'default'
    infosContainer.style.textAlign = 'right'

    // Infos paragraph style
    nbClickParagraph.style.fontSize = '11px'
    lastClickParagraph.style.fontSize = '11px'

    // Fill infos paragraph
    nbClickParagraph.innerHTML = '0 click';
    lastClickParagraph.innerHTML = `Script init at ${getTime()}`
}