
  /* 다음은 이벤트를 설정하는 코드이니 필요시 활용하세요*/
  window.addEventListener('load',init);
  function init(){
    let pic = document.querySelector('#pic'); //select 테그
    let box = document.querySelector('#box'); //img 테그
   
    //콤보박스에 항목을 선택시 작동
    pic.addEventListener('change', function(){
      changeImage(this);
    });

    //이미지를 더블틀릭시 작동
    box.addEventListener('dblclick', function(){
      popWin(this);
    });
  }

  function changeImage(obj)
  {
   //이미지 변경하는 코드
   //제공한 예제 참조
  }

  function popWin(obj)
  {   //제공한 예제 참조
    pwin = window.open( );  
  }