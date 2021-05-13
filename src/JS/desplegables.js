document.addEventListener('DOMContentLoaded', function(){
    var cont = document.querySelectorAll(".contenedor-item")
    cont.forEach(item => {
        var desc = item.querySelectorAll(".description")
        $(desc).slideUp()
        
    });
    var down = document.querySelectorAll(".fa-chevron-down")
    down.forEach(element => {
        $(element).toggleClass('active');
        $(element).click(function(){
            $(element).parent().parent().children(".description").slideDown()
            $(element).toggleClass("active")
            $(element).parent().children(".fa-chevron-up").toggleClass("active")
        })
    });
    var up = document.querySelectorAll(".fa-chevron-up")
    up.forEach(element => {
        $(element).click(function(){
            $(element).parent().parent().children(".description").slideUp()
            $(element).toggleClass("active")
            $(element).parent().children(".fa-chevron-down").toggleClass("active")
        })
    });
})