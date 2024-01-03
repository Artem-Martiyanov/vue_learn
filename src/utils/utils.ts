const scroll: { lock: () => void, unlock: () => void } = {
    lock: () => {
        document.body.style.marginLeft = `-${document.body.offsetWidth - document.body.clientWidth}px`
        document.body.classList.add('scroll-lock')
    },
    unlock: () => {
        document.body.classList.remove('scroll-lock')
        document.body.style.marginLeft = ''
    }
}

const getStackIcon = (iconName: string) => require('@/assets/images/icons/stack.svg') + '#' + iconName

export {
    scroll,
    getStackIcon
}