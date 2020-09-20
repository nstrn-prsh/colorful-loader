const background = document.querySelector('body')
background.addEventListener( 'mousemove',(e)=>{
    let clr = (e.clientX+e.clientY)/10
    background.style.backgroundColor = `rgba(${e.clientX},${clr},${e.clientY},0.5)`
})

let r=100, g=100, b=100, a=1
let color = `rgba(${r},${g},${b},${a})`
//main circle for changing color
const circleUp = document.querySelector('#head1')
    circleUp.style.borderColor = color
const circleDown = document.querySelector('#head2')
    circleDown.style.borderColor = color

//right inputs
const first = document.querySelector('#now1')
first.addEventListener('input',(e)=>{
    let color = `rgba(${r},${g},${b},${a})`
    r = e.target.value
    if( r.length<=3 && 0<=r && r<=255 ){
        circleUp.style.borderColor = color
        circleDown.style.borderColor = color
    }
    else{
        alert('incorrect number')
        e.target.value = ""
    }
})
const second = document.querySelector('#now2')
second.addEventListener('input',(e)=>{
    let color = `rgba(${r},${g},${b},${a})`
    g = e.target.value
    if( g.length<=3 && 0<=g && g<=255 ){
        circleUp.style.borderColor = color
        circleDown.style.borderColor = color
    }
    else{
        alert('incorrect number')
        e.target.value = ""
    }
})
const third = document.querySelector('#now3')
third.addEventListener('input',(e)=>{
    let color = `rgba(${r},${g},${b},${a})`
    b = e.target.value
    if( b.length<=3 && 0<=b && b<=255 ){
        circleUp.style.borderColor = color
        circleDown.style.borderColor = color
    }
    else{
        alert('incorrect number')
        e.target.value = ""
    }
})
const fourth = document.querySelector('#now4')
fourth.addEventListener('input',(e)=>{
    let color = `rgba(${r},${g},${b},${a})`
    a = e.target.value
    if( a.length<=1 && 0<=a && a<=1 ){
        circleUp.style.borderColor = color
        circleDown.style.borderColor = color
    }
    else{
        alert('incorrect number')
        e.target.value = ""
    }
})

const button = document.querySelector('#color-set')
button.addEventListener( 'click', (e)=>{
    let color = `rgba(${r},${g},${b},${a})`
    first.value = Math.round(Math.random()*255)
    r = first.value
    second.value = Math.round(Math.random()*255)
    g = second.value
    third.value = Math.round(Math.random()*255)
    b = second.value
    fourth.value = Math.round(Math.random()*1)
    a = second.value
    circleUp.style.borderColor = color
    circleDown.style.borderColor = color

})