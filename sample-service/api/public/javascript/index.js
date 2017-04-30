
$(document).ready(function(){
    $('#react').click(function(){
        // $(this).append('<p> Dont Touch Me</p>');
        $.get('/employee',{},function (res) {
        	var data = res.data;
        	$("#employees").html(' ');
        	data.forEach(function (item,i) {        		
        		$("#employees").append('<li>'+item.FullName+'</li>');
        	});
        	console.log(res);
        },'json');
    });
});
