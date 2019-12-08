let $buttons = $('#selectButton>button')
let $slides= $('#slides')
let $images = $slides.children('img')
let current = 0
let timer

var audio = document.getElementById('bgm');
$("#btn").bind("touchstart", function bf() {
if(audio !== null) {
//检测播放是否已暂停.audio.paused 在播放器播放时返回false.
//alert(audio.paused);
if(audio.paused) {
audio.play(); //audio.play();// 这个就是播放
$("#btn").addClass("active")
} else {
audio.pause(); // 这个就是暂停
$("#btn").removeClass("active")
}
}
})

makeFakeSlides()
Init()  //初始定位

bindEvent()
Timer()
$('.container').on('mouseenter',function () {
    window.clearInterval(timer)
}).on('mouseleave',function () {
    Timer()}
)

document.addEventListener('visibilitychange',function (e) {
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        Timer()
    }
})

function Timer () {
    timer = setInterval(function () {
        goToSlide(current+1)
    },2000)
}


function Init() {
    $slides.css({transform:'translateX(-960px)'})
}
function bindEvent() {
    $('#selectButton').on('click','button',function (e) {
        let $button = $(e.currentTarget)
        let index= $button.index()
        goToSlide(index)

    })
    $(next).on('click',function () {
        goToSlide(current+1)
    })

    $(previous).on('click',function () {
        goToSlide(current-1)
    })
}

function makeFakeSlides() {
    let $firstFake=$images.eq(0).clone(true)
    let $lastFake=$images.eq($images.length-1).clone(true)
    $slides.append($firstFake)
    $slides.prepend($lastFake)
}



function goToSlide(index) {
    if(index>$buttons.length-1){
        index=0
    }else if (index<0){
        index=$buttons.length-1
    }

    if(current===$buttons.length-1&& index===0){
        //最后跳到第一
        $slides.css({transform:`translateX(${-($buttons.length +1)*960}px)`})
            .one('transitionend',function () {
                $slides.hide()
                $slides.offset()
                $slides.css({transform:`translateX(${-(index +1)*960}px)`}).show()

            })
    }else if (current===0 && index===$buttons.length-1){
        $slides.css({transform:`translateX(0px)`})
            .one('transitionend',function () {
                $slides.hide()
                $slides.offset()
                $slides.css({transform:`translateX(${-(index +1)*960}px)`}).show()

            })
    }else{
        $slides.css({transform:`translateX(${-(index +1)*960}px)`})
    }
    current= index
}