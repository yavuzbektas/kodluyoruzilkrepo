let myname;



function name() {
    let yname=window.prompt("Lütfen Adınızı Giriniz")
    console.log(yname)
    let myname = document.querySelector('#myName')
    myname.innerHTML=yname
}
function showTime()
{
    let nDate =new  Date();
    let d = nDate.getDate();
    let m = nDate.getMonth();
    let h = nDate.getHours();
    let mi = nDate.getMinutes();
    let s = nDate.getSeconds();
    let y = nDate.getFullYear();
    let myDate = document.querySelector('#myClock')
    let alldate = y +" "+ (m+1) + " " + d + " " + h+":"+mi+":"+s
    myDate.innerHTML = alldate;
    myDate.textContent = alldate;
    setTimeout(showTime, 1000)

}
name()
showTime()