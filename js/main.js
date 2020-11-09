const date = new Date();
let formdata = document.getElementById('formdata')
let loader = document.getElementById('loader');
loader.style.display = "none";
let redirectmsg = document.getElementById('redirectmsg');
redirectmsg.style.display = "none";

console.log("Page loaded")

function showQuestions(){
    formdata.style.display = "none";
    const today = date.getDate(); 
    console.log(today)
    const student_name = document.getElementById('fname').value;
    const className = document.getElementById('className').value;
    loader.style.display = "block";
    redirectmsg.style.display = "block";
        setTimeout(() => {
           helperQuestions(className, today);
        }, 2000)

    
}
//testlink - https://forms.gle/Rd7R1mQ62gdke534A
const helperQuestions  = (className, today) => {
    console.log(className, today)
    
    if(className === "5"){
        console.log("Class: ",className)
        switch(today){
            case 9:
                //maths
                window.location.href = "https://presenter.jivrus.com/p/1LUbe2iLiYF-wyh0Bq-L4uta9raZcv0YMRDeqYKJo37A"
                break;
            case 10:
                //science
                window.location.href = ""
                break;
            case 11:
                //sst
                window.location.href = "https://presenter.jivrus.com/p/1A8_TMv5gWY8fhi__aNAml7yGJJABNAgCk_udwzkIXsU"
                break;
            case 13:
                //english
                window.location.href = "https://presenter.jivrus.com/p/1IU7B6cq6XRU3FRuenC7TWXxyBa_IHZqMwiU66jlSDyY"
                break;
            case 8:
                window.location.href = "https://forms.gle/Rd7R1mQ62gdke534A"
                break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    } else if(className === "6"){
        console.log("Class: ",className)
        switch(today){
            case 9:
                //maths
                window.location.href = "https://forms.gle/BpMk5xWjn7yJw3t17"
                break;
            case 10:
                //science
                window.location.href = "https://presenter.jivrus.com/p/1G-rUzALu0tdBcIxZyVRCII1p1ER_4zPtO_nZWUvtO2s"
                break;
            case 12:
                //english
                window.location.href = "https://presenter.jivrus.com/p/127tcaPS_mg6SIcT1tSxO0L2x-zAkJmC55HJzqRF0kt0"
                break;
            case 13:
                //sst
                window.location.href = "https://presenter.jivrus.com/p/1rK64Ehj6ExxmwqkJ8xmyfSdwZY3cU5_oyILXakpVWKc"
                break;
            case 8:
                window.location.href = "https://forms.gle/Rd7R1mQ62gdke534A"
                break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    } else if(className === "7"){
        console.log("Class: ",className)
        switch(today){
            case 9:
                //Science
                window.location.href = "https://presenter.jivrus.com/p/1x1S8qeIPuRJB7eHCNxb48br-V3CYNov3WYNGKQiUq4s"
                break;
            case 11:
                //English
                window.location.href = ""
                break;
            case 12:
                //Math
                window.location.href = "https://presenter.jivrus.com/p/1uR2C0kAzpAe2nvh65UWIPatreVTjzeTs-aEAvEWI2Tg"
                break;
            case 13:
                //Sst
                window.location.href = "https://presenter.jivrus.com/p/1YARmnUj-w5nrqKQAPyctkZX14bO4z_RgEaO8ufCHHss"
                break;
                case 8:
                    window.location.href = "https://forms.gle/Rd7R1mQ62gdke534A"
                    break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    } else if(className === "8"){
        console.log("Class: ",className)
        switch(today){
            case 10:
                //English
                window.location.href = ""
                break;
            case 11:
                //Math
                window.location.href = ""
                break;
            case 12:
                //Science
                window.location.href = "https://presenter.jivrus.com/p/1L4Xrfoddrt1lDyhrYfqHc-PtjymR7ZgYpQVuP-U4IgI"
                break;
            case 13:
                //Sst
                window.location.href = "https://presenter.jivrus.com/p/14rh7w1csz46RtWJfR8By768-z8io4OiTi_BIcydg8-0"
                break;
                case 8:
                    window.location.href = "https://forms.gle/Rd7R1mQ62gdke534A"
                    break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    }
}
