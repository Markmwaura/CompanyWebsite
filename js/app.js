function focusOnElement(element_id) {

    setTimeout(function(){
        goToByScroll(element_id);
    },400);

}
function goToByScroll(id){

    $('html,body').animate({
        scrollTop: $("#"+id).offset().top}, 'slow');
}

$("a#blog").on('click', function(){
    // window.location = "file:///home/mark/Documents/work/CompanyWebsite/blog.html";

     window.location = "/blog.html";
});
$("a#home").on('click', function(){
    //window.location = "file:///home/mark/Documents/work/CompanyWebsite/index.html";
     window.location = "/index.html";
});
