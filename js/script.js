$(function(){


  $("#bgndVideo").YTPlayer({
    videoURL:'c7Tg5uNTmfg',
    containment:'self',
    autoPlay:true, //자동으로 재생 
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false, 
    //playOnlyIfVisible: true, //영상이 멈춰있다가 재생해줌.
  });


})