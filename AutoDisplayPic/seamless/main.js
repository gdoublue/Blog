let n

let count
Init()
let timer=setInterval(()=>{transLeave(getImage(n)).one('transitionend',(e)=>{transEnter($(e.currentTarget))})
    transCurrent(getImage(n+1))

    n +=1
},3000)

document.addEventListener('visibilitychange',function (e) {
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer=setInterval(()=>{transLeave(getImage(n)).one('transitionend',(e)=>{transEnter($(e.currentTarget))})
            transCurrent(getImage(n+1))

            n +=1
        },3000)
    }
})

function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)


}

function x(n){
    if(n>count){
        n=n%count
        if(n===0){
            n=count
        }
    }
    return n
}
function Init() {
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
    count =  $(`.images`).children('img').length

}
function transCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
    
}
function transEnter($node) {
    return $node.removeClass('current leave').addClass('enter')

}
function transLeave($node) {
    return $node.removeClass('enter current').addClass('leave')

}