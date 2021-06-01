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
    let day = nDate.getDay();
    let dayString="";
    switch (day) {
        case 1:
            dayString="Pazartesi";
            break;
        case 2:
            dayString="Salı";
            break;
        case 3:
            dayString="Çarşamba";
            break;
        case 4:
            dayString="Perşembe";

            break;
        case 5:
            dayString="Cuma";
            break;
        case 6:
            dayString="Cumartesi";
            break;
        case 0:
            dayString="Pazar";
            break;
        default:
            break;
    }
    if (m<10) {m="0"+(m+1); }
    if (d<10) {d="0"+(d+1); }
    let myDate = document.querySelector('#myClock')
    let alldate = y +" "+ m + " " + d + " " + h+":"+mi+":"+s + " " + dayString 
    myDate.innerHTML = alldate;
    myDate.textContent = alldate;
    setTimeout(showTime, 1000)

}
name()
showTime()