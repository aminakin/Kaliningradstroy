var writeUsShow = document.querySelector('.write-us-button');
var writeUs = document.querySelector('.modal-write-us');
var modalClose = document.querySelector('.modal-close');
var resultFormClose = document.querySelector('.result-form-close');
var agree = document.getElementById('agree');
var agreeForm = document.querySelector('.modal-result');
var okButton = document.querySelector('.ok-button');


window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains('modal-show')) {
      writeUs.classList.remove('modal-show');
    }
    if (agreeForm.classList.contains('modal-show')) {
      agreeForm.classList.remove('modal-show');
    }
  }
});

modalClose.addEventListener('click', function(evt) {
  if (writeUs.classList.contains('modal-show')) {
    writeUs.classList.remove('modal-show');
  }
});

resultFormClose.addEventListener('click', function(evt) {
  if (agreeForm.classList.contains('modal-show')) {
    agreeForm.classList.remove('modal-show');
  }
});

okButton.addEventListener('click', function(evt) {
  if (agreeForm.classList.contains('modal-show')) {
    agreeForm.classList.remove('modal-show');
  }
});

$('.write-us-button').click(function(e) {
    var $message = $('#popup');

    if ($message.css('display') != 'block') {
        writeUs.classList.add('modal-show');

        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('#popup').length == 0) {
                writeUs.classList.remove('modal-show');
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }

    e.preventDefault();
});

$(document).ready(function() {
    $("#send-form").on('click touch',
		function(){
          if (agree.checked) {
			sendAjaxForm('result_form', 'ajax_form', 'send.php');
			return false;
		}
        }
);

  var mobMenuButton = document.querySelector('.box');
	var br = mobMenuButton.getBoundingClientRect();
	var top = br.top;

	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  if (scrolled > 0 && scrolled <= top) {
      var position = top - scrolled;
			$(mobMenuButton).css('top', position);
	  }
	  if (scrolled === 0) {
	    $(mobMenuButton).css('top', top);
	  }
		if (scrolled > top) {
			$(mobMenuButton).css('top', '0');
		}
	}

});

function sendAjaxForm(result_form, ajax_form, url) {
    jQuery.ajax({
        url:      "send.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: jQuery("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно

        	writeUs.classList.remove('modal-show');
          location.href = 'thanks.html';
    	},
    	error: function(response) { // Данные не отправлены
    		writeUs.classList.remove('modal-show');
          agreeForm.classList.add('modal-show');
    	}
 	});
};

var btn1 = document.querySelector('.btn');
var btn = $('.btn');
var $navigation = $('.navigation-list');

btn.on('click touch', function() {

  if ($navigation.css('display') == ('block')) {
    $navigation.slideUp();
    btn1.classList.remove('active');
    btn1.classList.add('not-active');
//    $navigation.css('display', 'none');
  }
  else {
    $navigation.slideDown();
    btn1.classList.remove('not-active');
    btn1.classList.add('active');
//    $navigation.css('display', 'block');
  }
});

var subMenuBtn = $('.sub-menu-open');
var subMenu = $('.navigation-list-sub');

subMenuBtn.on('click touch', function(evt) {

    if (subMenu.css('display') == ('block')) {
    subMenu.slideUp();
  }
  else {
    subMenu.slideDown();
  }
});

var subMenuBtn1 = $('.sub-menu-open-1');
var subMenu1 = $('.navigation-list-sub-1');

subMenuBtn1.on('click touch', function(evt) {

    if (subMenu1.css('display') == ('block')) {
    subMenu1.slideUp();
  }
  else {
    subMenu1.slideDown();
  }
});

var subMenuBtn2 = $('.sub-menu-open-2');
var subMenu2 = $('.navigation-list-sub-2');

subMenuBtn2.on('click touch', function(evt) {

    if (subMenu2.css('display') == ('block')) {
    subMenu2.slideUp();
  }
  else {
    subMenu2.slideDown();
  }
});

$(document).on('ready', function() {

  $(".regular").slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
}
]
});
});


$(document).ready(function() { // Ждём загрузки страницы

	$(".image").on('click touch', function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('origin'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup-slider' style='display:flex'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>");
		$(".popup-slider").fadeIn(300); // Медленно выводим изображение
		$(".popup_bg").on('click touch', function(){	// Событие клика на затемненный фон
			$(".popup-slider").fadeOut(300);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup-slider").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});

});
