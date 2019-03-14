$(document).ready(function(){
	
	var $in = $('.wu5 input');
	var you = /^\w+@\w+(\.\w)*\.\w{2,6}$/;
	var $p = $('.si5');
	var $wu = $('.wu1 input');
	var kk ="" ;
	console.log($in.eq(2));
	 $in.eq(0).blur(function(){
		if(!(you.test(this.value))){
			$p.text('您输入的Email有误!')
		}else{
			$p.text('')
		}
		$in.eq(0).focus(function(){
			$p.text('')
		})
	}) ;
	
	$in.eq(2).blur(function(){
		console.log($in.eq(0).val());
		if(this.value != $in.eq(1).val()){
			$p.text('您输入的密码不一致!')
		}else {
			$p.text('')
		}
	});
	
	$('.si3').click(function(){
		var su = ''
		if($('.si3 p').text()){
			$('.si3 p').text('') ;
		}	
		for(let i = 0 ;i<4; i++){
		var suji = parseInt(Math.random()*10);
          su += suji;
		}
		$('.si3 p').text(su) ;
	});
	$in.eq(3).blur(function(){
		if(this.value != $('.si3 p').text()){
			console.log(this);
			$p.text('您输入的验证码不正确!');
		}else {
			$p.text('')
		}
	});
	
	$('.wu3').click(function(){
		$(this).css({"border-bottom" : "2px solid #ff6a00"});
		$('.wu4').css({"border-bottom" : "2px solid #e7e7e7"});
		$('.wu1').css({'display' : "block",});
		$('.wu5').css({'display' : "none"});
	});
	$('.wu4').click(function(){
		$(this).css({"border-bottom" : "2px solid #ff6a00"});
		$('.wu3').css({"border-bottom" : "2px solid #e7e7e7"});
		$('.wu5').css({'display' : "block",});
		$('.wu1').css({'display' : "none"});
	});
	
	
	 $('.si42').click(function(){
		if(you.test($in.eq(0).val())&& $in.eq(1).val()==$in.eq(2).val() && $in.eq(3).val()==  $('.si3 p').text()){
			// kk++;
			$.cookie(""+$in.eq(0).val(),""+$in.eq(1).val(),{ path: '/', expires: 1000});	
		}else {
			alert('请您检查输入是否正确');
		}
		$in.eq(0).val('')
		$in.eq(1).val('')
		$in.eq(2).val('')
		$in.eq(3).val('')
	}) ;
	 
	$('.si41').click(function(){
		console.log($.cookie($wu.eq(0).val()));
		if($.cookie($wu.eq(0).val())){
			if($wu.eq(1).val() == $.cookie($wu.eq(0).val())){
				window.location.href="http://127.0.0.1:8848/HTML5/js/xiangmu/html/flower.html"
			}else{
				alert('您输入的密码不正确')
				}
		}else {
			alert('您输入的账号不正确')
		}
		$wu.eq(0).val('')
		$wu.eq(1).val('')
	}) 
	
	
})
