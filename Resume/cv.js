
// 滚动后导航栏变色

    window.onscroll = function () {
        if (window.scrollY > 100) {
            topNavBar.classList.add('sticky')
        } else {

            topNavBar.classList.remove('sticky')
        }


    }

    //鼠标滑到导航栏后展开相应列表

