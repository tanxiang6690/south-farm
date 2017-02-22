'use strict';

require.config({
    paths: {
        'theme': '../assets/js/theme'
    }
})

require(['theme'], function(theme) {
    var param1 = {
        style: 1,
        speed: 4000,
        items: [{
            link: '这是第一张图片',
            src: './images/banner-1.png'
        }, {
            link: '这是第二张图片',
            src: './images/banner-2.png'
        }, {
            link: '这是第三张图片',
            src: './images/banner-3.png'
        }, {
            link: '这是第四张图片',
            src: './images/banner-4.png'
        }]
    };
    theme.mySlider('#swiper1', param1);
})
