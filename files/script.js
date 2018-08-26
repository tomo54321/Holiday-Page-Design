function Utils() {}
			Utils.prototype = {
				constructor: Utils,
				isElementInView: function (element, fullyInView) {
					var pageTop = $(window).scrollTop();
					var pageBottom = pageTop + $(window).height();
					var elementTop = $(element).offset().top;
					var elementBottom = elementTop + $(element).height();

					if (fullyInView === true) {
						return ((pageTop < elementTop) && (pageBottom > elementBottom));
					} else {
						return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
					}
				}
			};
			var util = new Utils();
			$(document).scroll(function(){
				var x = $(this).scrollTop();
				$(".hol_head_bg").css('background-position','0% '+parseInt(-x/10)+'px');
				
				if(util.isElementInView($(".hol_head"), false) == true){
					if(!$(".hol_info_fixed").hasClass("hidden")){
						$(".hol_info_fixed").addClass("hidden");
					}
				}
				else{
					if($(".hol_info_fixed").hasClass("hidden")){
						$(".hol_info_fixed").removeClass("hidden");
					}
				}
				
			});
