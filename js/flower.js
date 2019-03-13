$(document).ready(function(){
	var $san = $("#san");
	var $ol = $("#san ol li");
	var $liwidth = $ol.eq(0).width();
	var $ul = $("#san ul li")
	var timer = null;
	var index = 0;
	var shu = 1;
	//给每一ol li 绑定事件
	 $ul.hover(function(){
	    $(this).css({"background": "url(../img/common_z.png) 326px 17px"})
		index = $ul.index(this)
		$ol.eq(index).animate({zIndex :shu++ },300)
	},function(){
		 $(this).css({"background": "url(../img/common_z.png) 340px 17px"})
	}) ;
	
	$('.san1').click(function(){
		index--;
		if(index == -1){
			index =$ul.length-1
		};
		console.log(index)
		$ol.eq(index).animate({zIndex :shu++ },300)
	});
	$('.san2').click(function(){
		index++;
		if(index == $ul.length){
			index = 0;
		};
		console.log(index)
		$ol.eq(index).animate({zIndex :shu++ },300)
	});
	timer = setInterval(function(){
		index ++
		if(index == $ul.length){
			index = 0;
		}
		$ol.eq(index).animate({zIndex :shu++ },300)
	},3000)
	$ol.hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function(){
			index ++
			if(index == $ul.length){
				index = 0;
			}
			$ol.eq(index).animate({zIndex :shu++ },300)
		},3000)
	})
	$('.s23').hover(function(){
			$(this).animate({left:990},300);
		},function(){
			$(this).animate({left:1000},300);
		});
		for(let i = 1;i<7;i++){
			$('.shib'+(i+1)).hover(function(){
			$('.sn'+(i)).animate({left:1110,opacity : 1},300);
			console.log($('shib'+(i+1)))
			console.log($('.sn'+(i)))
		},function(){
			$('.sn'+(i)).animate({left:1080,opacity : 0},300);
			console.log($('shib'+(i+1)))
			console.log($('.sn'+(i)))
			
		})
			
		};
		$('#shiy li a').mouseover(function(){
			index = $('#shiy li a').index(this)
			//arr.push(index)
			$('#shiy li a img').eq(index).css({zIndex: shu++})
			$('#shiy li a p').eq(index).css({background : 'red'})
			$('#shiy li a').eq(index).css({color : '#ff6a00'})
			console.log(shu)
		});
		
		 $('#shiy li a').mouseout(function(){
			index = $('#shiy li a').index(this)
			// 
			//$('#shiy li a img').eq(index).css({zIndex: shu++})
			$('#shiy li a p').eq(index).css({background : '#7e7e7e'})
			$('#shiy li a').eq(index).css({color : '#7e7e7e'})
			//console.log(shu)
		}) ;
		$('.san1 a img').mouseover(function(){
			index = $('.san1 a img').index(this)
			$('.san1 img').eq(index).css({zIndex: shu++})
		});
		
})
