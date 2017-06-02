
$(function() {
    $(".tab li").click(function() {
        var num = $(".tab li").index(this);
        $(".tabContent").removeClass('active');
        $(".tabContent").eq(num).addClass('active');
        $(".tab li").removeClass('active');
        $(this).addClass('active')
    });
});


function SetTab(id,pageid) {
	var contents_div = document.getElementById('contents');
	var d_height = document.getElementById(id).clientHeight;
	contents_div.style.height = d_height+100; 

	bodyid = document.getElementById(gv_pageid);
	bodyid.id = pageid;
	gv_pageid = pageid;
}


function SetListHeight(id,pageid) {
	var div_foo_table = document.getElementById('foo-table');
	var chatdata_height = document.getElementById('chatdata').clientHeight;
	var foo_table_height = document.getElementById('foo-table').clientHeight;
}
