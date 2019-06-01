$(function () {

    $(document).keydown(function (event) {
        switch(event.which ){
            case 37: 
                alert("左");
                break;
            case 39:
                alert("右");
                break;
            default:
                alert(event.which);
                break;
        }
    });

});
