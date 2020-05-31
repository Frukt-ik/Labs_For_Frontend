var $body = $(document.body),
    $popup = $("#b-popup");

// закрываем попап при клике на любую область экрана
$body.on("mousedown", function () {
    $popup.remove();
});

// клик по самому попапу не должен его закрывать
$popup.on("mousedown", function (e) {
    e.stopPropagation();
});