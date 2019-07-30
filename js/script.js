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
        url:     "http://surkoffmotors.ru/send.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: jQuery("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно

        	writeUs.classList.remove('modal-show');
          agreeForm.classList.add('modal-show');
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
