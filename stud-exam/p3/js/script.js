
        let color = ['yellow','red','green'];
        let td = [2000, 4000, 6000];

        window.addEventListener('load',init);

        function init(){
            btn = document.querySelector("#btn");
            btn.addEventListener('click', stopGo); //stop,start 버턴 클릭시 작동
            //
        }
        //필요시 활용
        function changeColor(){

            
        }

            //필요시 활용
        function clear(){
            let tb = document.querySelectorAll('#box>div');
            tb.forEach(element => {
                element.style.backgroundColor = "white";
                element.innerHTML = "";
            });
        }

        //필요시 활용
        function stopGo(){


        }