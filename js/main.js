const date = new Date();
let formdata = document.getElementById('formdata')
let loader = document.getElementById('loader');
loader.style.display = "none";
let redirectmsg = document.getElementById('redirectmsg');
redirectmsg.style.display = "none";

console.log("Page loaded")

//Clock-Function
const span_hr = document.getElementById('span_hrs');
const span_mnt = document.getElementById('span_mnt');
const span_sec = document.getElementById('span_sec');
const span_date = document.getElementById('current_date');

const date_time = new Date();

span_date.innerHTML = `${date_time.getDate()}/${date_time.getMonth()+1}/${date_time.getFullYear()}`;

const setTime = () => {
    const _time = new Date();
    let hour = _time.getHours();
    let min = _time.getMinutes();
    let sec = _time.getSeconds();
   // let millisecond = _time.getMilliseconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    span_hr.innerHTML = hour+` : `;
    span_mnt.innerHTML = min+` : `+sec;
   // span_sec.innerText =" : "+millisecond;
   
    let t = setTimeout(function(){ setTime() },0); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

setTime();
//Clock-function ends

function showQuestions(){
    formdata.style.display = "none";
    const today = date.getDate(); 
    console.log(today)
    const student_name = document.getElementById('fname').value;
    const className = document.getElementById('className').value;
    loader.style.display = "block";
    redirectmsg.style.display = "block";
        setTimeout(() => {
           helperQuestions(className, today, student_name);
        }, 1000)

    
}
//testlink - https://forms.gle/Rd7R1mQ62gdke534A
const helperQuestions  = (className, today, student_name) => {
    console.log(className, today)
    const clockHour = date_time.getHours();
    const welcm_msg = document.getElementById('welcome-msg').innerHTML = `Hari Om, ${student_name}. All The Best for your exam.😊`
    if(className === "5" && clockHour >= 10 && clockHour <= 12){
        console.log("Class: ",className)
        switch(today){
            case 9:
                //maths
                redirectmsg.innerHTML = `<iframe src="https://forms.gle/Rd7R1mQ62gdke534A" width="640" height="1301" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 10:
                //science
                redirectmsg.innerHTML = `<iframe src="https://forms.gle/4dm8vGMUUXy1fRsM8" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 11:
                //sst
                redirectmsg.innerHTML = `<iframe src="https://forms.gle/FVvsQ9oWb2brXozH8" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 13:
                //english
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnRWyAGywZ6wzUN3IoS20geByiwLQgyiwrxs-dWkYHfSqADA/viewform?embedded=true" width="640" height="11647" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    } else if(className === "6" && clockHour >= 10 && clockHour <= 12){
        console.log("Class: ",className)
        switch(today){
            case 9:
                //maths
                redirectmsg.innerHTML = "https://forms.gle/BpMk5xWjn7yJw3t17"
                break;
            case 10:
                //science
                redirectmsg.innerHTML = `<iframe src="https://forms.gle/YqLwxxvBeEHKk5u38" width="640" height="1301" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 12:
                //english
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwfIO5fBqtJkw9Pfdh1Jo3t45BC3WLSAx4E399YPjzB0SHqA/viewform?embedded=true" width="640" height="11745" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 13:
                //sst
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMH0iKCy5fMceJI4t8nT7EBbb6YE2J1kA3HdaScyqMGXlirg/viewform?embedded=true" width="640" height="11350" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    } else if(className === "7" && clockHour >= 10 && clockHour <= 12){
        console.log("Class: ",className)
        switch(today){
            case 9:
                //Science
                redirectmsg.innerHTML = ""
                break;
            case 11:
                //English
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFaJgF3rtdBWCqn9DYBt_PpCx9HTMuXel-uhiHxEN6-Rccpg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 12:
                //Math
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLqQgCOQajw8qy_oU-dD3E4JGQuZmjotCOxMln2r8Im3ZUXA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 13:
                //Sst
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdGPVn7HhBq7PjGr-hlX-VhR58rX963S5cWGuBV1CQLlSStVQ/viewform?embedded=true" width="640" height="11034" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    } else if(className === "8" && clockHour >= 10 && clockHour <= 12){
        console.log("Class: ",className)
        switch(today){
            case 10:
                //English
                redirectmsg.innerHTML = `<iframe src="https://forms.gle/qSVLkPYQgQZPLpAF8" width="640" height="1301" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 11:
                //Math
                redirectmsg.innerHTML = `<iframe src="https://forms.gle/qSVLkPYQgQZPLpAF8" width="640" height="1301" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 12:
                //Science
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdendbloGBJS28AqGp849Q77vp8gx6QKiG3xbDeUtmebSRGjA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            case 13:
                //Sst
                redirectmsg.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjFZasoq8qi9pYTChzws_JMFn2ChJBrJYps13Uywzto_lONw/viewform?embedded=true" width="640" height="11829" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
                break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    }
}

//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfVpTzIG22PqBEvEmzLZS57ljQpFkR-Szs9_j1D5GIpDx0nBQ/viewform?embedded=true" width="640" height="1301" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>