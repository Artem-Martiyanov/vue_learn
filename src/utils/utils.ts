
const scroll: {lock: () => void, unlock: () => void} = {
    lock: () => document.body.classList.add('scroll-lock'),
    unlock: () => document.body.classList.remove('scroll-lock')
}

export {scroll}