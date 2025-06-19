

    window.onload=function(){
	    var sbut = document.querySelectorAll("#dg>div");
	    var sop = document.querySelectorAll("#op>div");

		for (var i=0;i<sbut.length;i++)
		{ //숫자버턴에 이벤트 설정
			sbut[i].addEventListener('click',function(){ put(this.innerHTML); });
		}

		for ( i=0;i<sop.length;i++)
		{//연산자 버턴에 이벤트 설정
			sop[i].addEventListener('click',function(){ put(this.innerHTML); });
		}
	}

	function put(val) //수식 구성
	{
      let expr = document.querySelector("#expr");
	  let emsg = document.querySelector("#emsg");
	  //수식 검정코드///
	  
	  expr.innerHTML += val;
	}
	//참조-수식계산
	function calc()
	{
		var expr = document.querySelector("#expr");
		let emsg = document.querySelector("#emsg");

        expr.innerHTML += ` = ${eval(expr.innerHTML)}`;
	}
	//참조-back 버턴 처리
	function back()
	{
      var expr = document.getElementById("expr");
	  var txt = expr.innerHTML;
	  var len = txt.length;

	  expr.innerHTML = txt.slice(0,len-1);
	}

	//참조-clear버턴처리
	function clr()
	{
      document.getElementById("expr").innerHTML = "";
	  document.getElementById("emsg").innerHTML = "";
	}
