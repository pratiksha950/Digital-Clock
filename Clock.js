function ShowCurrentTime(){
  const hh=document.getElementsByClassName("hh")[0];
  const mm=document.getElementsByClassName("mm")[0];
  const ss=document.querySelector(".ss");
//   const ss=document.getElementsByClassName("ss");

  const date=new Date();
  hh.innerText=date.getHours();
  mm.innerText=date.getMinutes();
  ss.innerText=date.getSeconds();
}
setInterval(ShowCurrentTime,1000);