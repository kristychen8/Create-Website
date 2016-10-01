/**************************************

                SIDEBAR

**************************************/

// hide sidebar at beginning
$('#sidebarContents').css('width','0');

// opening sidebar
$('#lines').click(function() {
    $('#sidebarContents').css('width', '250px');
});

// closing sidebar
$('#x').click(function() {
    $('#sidebarContents').css('width', '0');
});

// change background when hovering over sidebar elements
$('#sidebarContents li').hover(function() {
    $(this).css('background-color', '#008B8B');
}, function() {
    $(this).css('background-color', 'rgb(50,50,50)');
});

// change background when hovering over top of sidebar
$('#top').hover(function() {
    $(this).css('background-color', 'rgb(100,100,100)');
}, function() {
    $(this).css('background-color', 'rgb(50,50,50)');
});

// set page to top (clicking top of sidebar)
$('#top').click(function() {
    $('html body').animate({scrollTop: 0}, 'fast');
});


/**************************************

                MODAL

**************************************/
$('.ok').click(function() {
 // READ AND PROCESS INPUT HERE
});
$('.navList').click(function() {
    $('#' + $(this).prop('id') + 'Modal').modal({show:true, backdrop:'static', keyboard:false});
});
