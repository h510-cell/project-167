AFRAME.registerComponent("play-on-click", {
    
     schema :{isplaying:{type:"boolean",default:false}},
     init: function(){
         this.videoEl = this.el.getAttribute("material").src
         this.onClick = this.onClick.bind(this)
     },
    play:function() {
         window.addEventListener("click",this.onClick)
    },
     OnClick :function(evt) {
        if(!this.videoEl){
            return;
        }
        var isPlaying = this.el.getAttribute("play-on-click").isplaying;
        this.el.object3D.visible=true;
        if(!isPlaying){
            this.el.setAttribute("play-on-click",{
                isplaying:true
            });
            this.videoEl.play()
        }
        else{
            this.el.setAttribute("play-on-click"),{
                isplaying:false
            }
            this.videoEl.pause()
        }
    }
   });
   