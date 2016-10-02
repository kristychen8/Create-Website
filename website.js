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

// modals for sidebar options
$('.navList').click(function() {
    $('#' + $(this).prop('id') + 'Modal').modal({show:true, backdrop:'static', keyboard:false});
});

// process input
$('#headerOK').click(function() {
    var headerName = $('#headerInput').val();
    var imageSrc = $('#pictureLink').val();

    var height = screen.height / 3;
    var html;
    html = '<div class="headerUserContent" style="postition: relative; background: url(' + imageSrc + '); width: 100%; height: ' + height + '";>'
    + '<img src="' + imageSrc + '">'
	+ '<p style="color: #7FFF00; font-size: 45px; position: absolute; top: 1em; right: 1em;">' + headerName.substring(0, headerName.length / 2) + '</p>' 
	+ '<p style="color: #FF00FF; font-size: 45px; position: absolute; top: 1em; left: 1em;">' + headerName.substring(headerName.length / 2) + '</p>'
    +'</div>';
    $('#headerUser').append(html);

    $('#headerInput').val('');
    $('#pictureLink').val('');
});
