/**************************************

                SIDEBAR

**************************************/

// hide sidebar at beginning
$('#sidebarContents').css('width','0');

// opening sidebar
$('#lines').click(function() {
    $('#sidebarContents').css('width', '250px');
    $('#lines').css('z-index', '0');
});

// closing sidebar
$('#x').click(function() {
    $('#sidebarContents').css('width', '0');
    $('#lines').css('z-index', '3');
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

// Generating a website: removes the sidebar option
$('#done').click(function() {
    $('#sideOptions').remove();
});

// Resetting a website: resets user's work
$('#reset').click(function() {
    $('#headerUser').empty();
    $('#navbarUser').empty();
    $('#bgUser').empty();
    $('#pictxtUser').empty();
    $('#listUser').empty();
    $('#tableUser').empty();

    $('body').css('background-image', 'none');
    $('body').css('background-color', 'rgb(255,255,255)');
});


/**************************************

                MODAL

**************************************/

// modals for sidebar options
$('.navList').click(function() {
    $('#' + $(this).prop('id') + 'Modal').modal({show:true, backdrop:'static', keyboard:false});
});

// process input for header
$('#headerOK').click(function() {
    var headerName = $('#headerInput').val();
    var imageSrc = $('#pictureLink').val();

    var height = screen.height / 3;
    var html;

    // if image has invalid source, or if no image is entered
    // set image to a default
    if (imageSrc == '' || (imageSrc.match(/\.(jpeg|jpg|gif|png)$/) == null)) {
	// chicken image
	//imageSrc = 'http://www.brilliantstore.com/pimagesl/l_os-yj0013y-4.jpg';
	// gif
	imageSrc = 'https://media.tenor.co/images/87bc727f6e742842f05cfc656a4be118/raw';
    }
    html = '<div id="headerUserContent" style="position: relative; background: url(' + imageSrc + '); width: 100%; height: ' + height + '";>';
    html +=  '<p style="color: #7FFF00; font-size: 55px; position: absolute; top: 1em; right: 1em;">' + headerName.substring(0, headerName.length / 2) + '</p>' 
	+ '<p style="color: #FF00FF; font-size: 55px; position: absolute; bottom: 1em; left: 1em;">' + headerName.substring(headerName.length / 2) + '</p>'
    +'</div>';
    $('#headerUser').append(html);

    $('#headerInput').val('');
    $('#pictureLink').val('');
});

// process input for background
$('#bgOK').click(function() {
    var selection = $('#bgModal input[name="bgChoice"]:checked').val();
    if (selection === 'image') {
	var imageSrc = $('#radioImageText').val();
	if (imageSrc == '' || imageSrc.match(/\.(jpeg|jpg|gif|png)$/) == null) {
	    imageSrc = 'http://www.brilliantstore.com/pimagesl/l_os-yj0013y-4.jpg';
	}
	$('body').css('background-image', 'url(' + imageSrc + ')');
    } else {
	var colorOptions = $('#bgModal select option');
	var color = colorOptions[Math.floor(Math.random() * colorOptions.length)].value;
	$('body').css('background-color', color);
    }
});

// process input for navbar
$('#navbarOK').click(function() {
    // reset navbar
    $('#navbarUser').empty();
    
    var allOptions = $('#navbarModal input');
    var selectedOptionsJQuery = $('#navbarModal input:checked');
    var selectedOptions = [];
    for (var k = 0; k < selectedOptionsJQuery.length; k++) {
	selectedOptions.push(selectedOptionsJQuery[k]);
    }
    
    var notSelectedOptions = [];
    for (var i = 0; i < allOptions.length; i++) {
	// if option was not selected, add to not selected array
	if (selectedOptions.indexOf(allOptions[i]) === -1) {
	    notSelectedOptions.push(allOptions[i]);
	}
    }

    // navbar elements
    var listHtml = '';
    for (var j = 0; j < notSelectedOptions.length; j++) {
	listHtml += '<li><a href="#">' + notSelectedOptions[j].value + '</a></li>';
    }

    // html for navbar
    var html = '<nav class="navbar navbar-default navbar-fixed-top">'
    + '<div class="container-fluid">'
	+ '<div class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">'
	+ '<ul class="nav navbar-nav">'
	+ listHtml
	+ '</ul></div></div></nav>'
    $('#navbarUser').append(html);
});
		    
