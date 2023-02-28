//Code to close the hamberguer menu on mobile divices
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

//Code to change active clase on click in the navbar
$('.ml-auto li a').each(function () {
  $(this).click(function () {
    updateClassActive(this);
  })
})

function updateClassActive(element) {
  $('.ml-auto li').removeClass('active');
  $(element).parents('li').addClass('active');
}


$(window).off('scroll');

$(window).on('scroll', function(){

    let scrollTop = $(window).scrollTop() + 15;

    let home = getSectionOffsetTop('hero');
    let about = getSectionOffsetTop('about');
    let projects = getSectionOffsetTop('projects');
    let contacts = getSectionOffsetTop('contacts');
    
    if (scrollTop >= home)         setActiveItem('hero');
    if (scrollTop >= about)        setActiveItem('about');
    if (scrollTop >= projects)     setActiveItem('projects');
    if (scrollTop >= (contacts - 700)) setActiveItem('contacts');
});

function setActiveItem(id){
    $('#navbarNav li').removeClass('active');
    $(`a[href="#${id}"]`).parent().addClass('active');
    
}

function getSectionOffsetTop(id){
    return $(`#${id}`).offset().top;
}