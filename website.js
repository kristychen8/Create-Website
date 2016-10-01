
$('#sidebarContents').css('width','0');

// opening sidebar
$('#lines').click(function() {
    $('#sidebarContents').css('width', '250px');
});

// closing sidebar
$('#x').click(function() {
    $('#sidebarContents').css('width', '0');
});
