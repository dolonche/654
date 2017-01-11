$(document).ready(function () {
	$(".button").click(function () {
			$(".inner-list").slideToggle();
		})
		//Таймер обратного отсчета
		//Документация: http://keith-wood.name/countdown.html
		//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({
		until: austDay,
		format: 'yowdHMS'
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function (direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {
		offset: 100
	});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function () {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	//	var owl = $('.owl-carousel');
	//	owl.owlCarousel({
	//		items: 1
	//	});
	//	$(".next_button").click(function () {
	//		owl.trigger("owl.next");
	//	});
	//	$(".prev_button").click(function () {
	//		owl.trigger("owl.prev");
	//	});
	$(document).ready(function () {
		$('.slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			prevArrow: $(".prev"),
			nextArrow: $(".next")
		});
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top i").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function () {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".menu");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
        });
    }

})();