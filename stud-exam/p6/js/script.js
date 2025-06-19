
   window.onload=function(){
     let gen = document.querySelector("#gen");
	 gen.addEventListener('click',function(){  //버턴에 이벤트 설정
		genRandom();
	});
   };
  
   // 참조
   function genRandom()
   {
	 let rr;
	 const start = 1, end = 50; 
     //랜덤 번호 생성, num 갯수 만큼
	 let list = document.querySelector('#list');
	 for (var i=0;i<num ;i++ )
	 {
        rr = Math.floor(Math.random()*(end-start+1)) + start;
	   	str += "<div>" + rr + "</div>";
	 }
	 list.innerHTML = str;
  }