var allButtons= $('#buttons>span')
for(let i=0; i< allButtons.length; i++){
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -800
        $('#images').css({transform:'translate('+p+'px)'
        })
        n=index
        activeButton(allButtons.eq(n))
    })
}
var n=0;
var size = allButtons.length
allButtons.eq(n%size).trigger('click')

var timerId = setTimer()

function setTimer(){
    return setInterval(()=> {
        n += 1
        allButtons.eq(n % size).trigger('click')
    },3000)
    }

    function activeButton($button) {
       $button.addClass('red').siblings('.red') .removeClass('red')
    }
    $('.wondow').on('mouseenter',function () {
        window.clearInterval(timerId)
    })
    $('.wondow').on('mouseleave',function () {
        timerId=setTimer()
    })
