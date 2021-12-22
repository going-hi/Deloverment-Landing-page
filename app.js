const burgerBtn = document.getElementById('burger')
const menu = document.getElementById('menu')
// const nav = document.querySelector('.nav')
const burgerNav = document.querySelector('.burger__menu')
const header = document.querySelector('.header')
const introInner = document.querySelector('.intro__inner') 
// DOM

burgerBtn.addEventListener('click', function() {
   this.classList.toggle('active')
})

header.addEventListener('click',  event => {
    event.preventDefault()
    if(event.target.dataset.href){
        const href = event.target.dataset.href
        
        

        document.querySelector(`[data-section = '${href}']`).scrollIntoView({behavior: "smooth"})
       
    }
})

burgerNav.addEventListener('click', event => {
    event.preventDefault()
    if(event.target.dataset.href){
        const href = event.target.dataset.href
        document.querySelector(`[data-section = '${href}']`).scrollIntoView({behavior: "smooth"})
    }
})

introInner.addEventListener('click', event => {
    event.preventDefault()
    if(event.target.dataset.href) {
        const href = event.target.dataset.href

        document.querySelector(`[data-section = '${href}']`).scrollIntoView({behavior: "smooth"})
    }
})


document.addEventListener('scroll', () => {
    const headerHeight = header.clientHeight

    if(window.pageYOffset > headerHeight) {
        header.classList.add('active')
    }else {
        header.classList.remove('active')
    }
    
   
})

// Contact


const form = document.getElementById('form')

const submitBtn = form.querySelector('#submit')
const email = form.querySelector('#email')
const nickname = form.querySelector('#name')
const textarea = form.querySelector('#text-message')


function isValid(value) {
    return value.length >= 10
}

form.addEventListener('submit', submitHandler)




function submitHandler(event) {
    event.preventDefault()

    if(isValid(textarea.value)) {
        const request = {
            name: nickname.value.trim(),
            email: email.value.trim(),
            text: textarea.value.trim(),
            date: new Date().toJSON()
        }

        fetchFb(request)
        .then(() => {
            email.value = '';
            nickname.value = '';
            textarea.value = '';
        })

    }

}


function fetchFb(request) {
    return fetch('https://development-4c26f-default-rtdb.europe-west1.firebasedatabase.app/contact-form.json', {
        method: 'POST', 
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', event =>  {
        event.preventDefault()
    })
})



