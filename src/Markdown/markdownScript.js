$(function () {
    var $show = $('#show');
    var $convertBtn = $('#convertBtn');
    var converter = new showdown.Converter();
    var text = '# hello, markdown!';
    var html = converter.makeHtml(text);
    $show.html(html);
    $convertBtn.off('click').on('click', function () {
        var postUrl = '../../assets/MarkdownSE.md';
        $.post(postUrl, function (data, status) {
            var html = converter.makeHtml(data);
            $show.html(html);
        }).always(function () {});
    });


});
