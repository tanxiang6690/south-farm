'use strict';

require.config({
    baseUrl: './assets/js/',
    paths: {
        "jquery": 'jquery-1.10.1.min',
        "swiper": 'idangerous.swiper.min'
    }
})

define(['jquery', 'swiper'], function($, swiper) {
    function mySlider(id, param) {
        var swiperContainer = $(id);

        // 添加外容器样式
        swiperContainer.addClass('swiper-container');
        if (!param.style) {
            param.style = 1;
        }
        swiperContainer.addClass('swiper-style-' + param.style);

        // 添加内容器
        swiperContainer.append('<div class="swiper-wrapper"></div>');

        // 添加分页器
        // 时间戳作为分页器的唯一识别符
        var timestamp = +new Date();
        swiperContainer.append('<div class="pagination pagination-' + timestamp + '"></div>');

        // 实例化
        var mySwiper = new Swiper(id, {
            autoplay: param.speed,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.pagination-' + timestamp,
            paginationClickable: true
        });

        //添加水平滚动项
        for (var i = 0; i < param.items.length; i++) {
            var item = param.items[i];
            var newSlide = mySwiper.createSlide('<a href="' + item.link + '" title="' + item.link + '"><img src="' + item.src + '"/></a>');
            newSlide.append();
        }

        // 添加完成后需要回到第一张图
        mySwiper.swipeTo(0, 0);

        // 是否需要前后控制按钮
        if (param.needCtrls == null || param.needCtrls) {

            swiperContainer.append('<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>');

            swiperContainer.on('click', '.swiper-button-prev', function() {
                mySwiper.swipePrev();
            });

            swiperContainer.on('click', '.swiper-button-next', function() {
                mySwiper.swipeNext();
            });
        }
    }

    return {
        mySlider: mySlider
    }
})
