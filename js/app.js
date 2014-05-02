$(document).ready(function() {

var trash = '<span class="trash"></span>';
var notification = '<span class="notification"></span>';


//To allow the user to use enter
function addItem(){
    $('#add-items').keydown(function(enter){
        if(enter.keyCode == 13) {
            postItem();
        }
    });
}

addItem();

//This is to append the new item to the list
function postItem(){
    var item = $('#add-items').val();
    var placeIt = $('<li>' + trash + item + notification +'</li>');
    $('.greatList').prepend(placeIt);
    $('#add-items').val('');
}

 //To remove li when .trash is clicked
 $(document).on('click', '.trash', function() {
    $(this).closest('li').fadeOut(350);
 });

//This is to toggle between pending and completed
$(document).on('click', '.notification', function(){
    $(this).toggleClass('checkmark');
    $(this).closest('li').toggleClass('cross');
});

  // item animation
  $(document).on('mouseenter', 'li', function() {
    if ($('span').first().next().hasClass('notification')){
      $(this).animate({'position': 'relative', 'bottom': '8px'}, 200);
    }
    });

  $(document).on('mouseleave', 'li', function() {
    if ($('span').first().next().hasClass('notification')){
      $(this).animate({'position': 'relative', 'bottom': '0px'}, 200);
    }
    });

});






