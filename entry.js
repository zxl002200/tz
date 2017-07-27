require("./style.css")
window.onload = function () {
            new Drag();
            var oDiv=document.querySelector('#div2');
            var x=0;
            var y=0;
            oDiv.onmousedown=function(ev){
                var oTip=document.createElement('p');
                oTip.className='tip';
                oTip.style.left=x+'px';
                oTip.style.top=y+'px';
                document.body.appendChild(oTip);
                var ev=ev||event;
                var disX=ev.clientX-oDiv.offsetLeft;
                var disY=ev.clientY-oDiv.offsetTop;
                document.onmousemove=function(ev){
                    var ev=ev||event;
                    x=ev.clientX-disX;
                    y=ev.clientY-disY;
                    oTip.style.left=x+'px';
                    oTip.style.top=y+'px';
                };
                document.onmouseup=function(){

                    oDiv.style.left=x+'px';
                    oDiv.style.top=y+'px';
                    document.body.removeChild(oTip);
                    document.onmouseup=null;
                    document.onmousemove=null;
                };
                return false;
            };
        };

        class Drag {
            constructor() {
                this.oDiv = document.querySelector("#div1");
                this.disX = 0;
                this.disY = 0;
                this.init();
                this.fnDown();

            }
            init(){
                let This = this;
                //改变fnDown里面的this指向
                this.oDiv.onmousedown = function (ev) {
                    This.fnDown(ev);
                };
            }
            fnDown(ev) {
                var ev = ev || event;
                this.disX = ev.clientX - this.oDiv.offsetLeft;
                this.disY = ev.clientY - this.oDiv.offsetTop;

                var This = this;
                document.onmousemove = function (ev) {
                    This.fnMove(ev);
                };
                document.onmouseup = this.fnUp;
                return false;
            }

            fnUp() {
                document.onmousemove = null;
                document.onmouseup = null;
            }
            fnMove  (ev) {
            var ev = ev || event;
            this.oDiv.style.left = ev.clientX - this.disX + "px";
            this.oDiv.style.top = ev.clientY - this.disY + "px";
        }
        }