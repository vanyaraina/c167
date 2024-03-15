AFRAME.registerComponent("play-on-click", {
 //Add code here
 schema:{
    isPlaying:{type:"boolean", default:false}
 },
 init:function(){
    this.video= this.el.getAttribute("material").src;
    this.onClick=this.onClick.bind(this);

 },
 play:function(){
    window.addEventListener("click", this.onClick)

 },
 onClick:function(){
    if(!this.video){
        return;
    }
    var videoPlaying=this.el.getAttribute("play-onclick").isPlaying
    this.el.object3D.visible=true

    if(!videoPlaying){
        this.el.setAttribute("play-on-click",{
            videoPlaying: true
        })
        this.video.play()
    }
    else{
        this.el.setAttribute("play-on-click",{
            videoPlaying:false
        })
    }
    this.video.pause()

 }
  
});
