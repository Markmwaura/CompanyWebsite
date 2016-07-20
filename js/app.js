

function focusOnElement(element_id) {

    goToByScroll(element_id);
}
function goToByScroll(id){

    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}
