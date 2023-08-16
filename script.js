
  		{
  			function startTime()
  			{
  				var today = new Date();
  				var h = today.getHours();
  				var m = today.getMinutes();
  				var s = today.getSeconds();
  				m = checkTime(m);
  				s = checkTime(s);
  				document.getElementById('time').innerHTML =h + ":" + m + ":" + s ;
  				var t =setTimeout(startTime,500);
  			}
  			function checkTime(i)
  			{
  				if(i<10)
  				{
  					i="0"+ i
  				};
  				return i;
  			}
  		}
  		{
  			var im=
  		[
"https://www.holidify.com/images/cmsuploads/square/Taj_Mahal_20180814141729.png",
"https://www.holidify.com/images/cmsuploads/compressed/Qutub_Minar_in_the_monsoons_20170908115259.jpg",
"https://www.holidify.com/images/bgImages/AJANTA-AND-ELLORA-CAVES.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/1030_20190404091854.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG",
"https://www.holidify.com/images/cmsuploads/compressed/9713607938_4bd9507080_b_20180302141225.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/attr_1568_20191102174918.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/799px-Agra_FortAgra_India_20200702133907.jpg",
"https://www.holidify.com/images/compressed/attractions/attr_1742.jpg",
"https://www.holidify.com/images/compressed/1174.jpg"
  		];
  	{
  		var i=0;function slide()
  		{
  			document.getElementById("imag").src=im[i];
  			if(i<(im.length-1))
  				i++;
  			else i=0;
  		}
  		setInterval(slide,2000);
  	}
  	{
  			var i=3;function slide()
  		{
  			document.getElementById("image").src=im[i];
  			if(i<(im.length-1))
  				i++;
  			else i=0;
  		}
  		setInterval(slide,2100);
  	}
  }
  	{var form=document.querySelector("form");
  		form.addEventListener("submit",function(e)
  		{
  			e.preventDefault();
  			var search=form.querySelector("input[type=search]");
  			search.value=search.value;
  			form.submit();
  		});
  	}