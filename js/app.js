function focusOnElement(element_id) {

    setTimeout(function(){
        goToByScroll(element_id);
    },400);

}
function goToByScroll(id){

    $('html,body').animate({
        scrollTop: $("#"+id).offset().top}, 'slow');
}
