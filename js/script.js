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