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
                window.location.href = ""
                break;
            case 10:
                //science
                window.location.href = ""
                break;
            case 11:
                //sst
                window.location.href = ""
                break;
            case 13:
                //english
                window.location.href = ""
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
                window.location.href = ""
                break;
            case 12:
                //english
                window.location.href = ""
                break;
            case 13:
                //sst
                window.location.href = ""
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
                window.location.href = ""
                break;
            case 11:
                //English
                window.location.href = ""
                break;
            case 12:
                //Math
                window.location.href = ""
                break;
            case 13:
                //Sst
                window.location.href = ""
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
                window.location.href = ""
                break;
            case 13:
                //Sst
                window.location.href = ""
                break;
                case 8:
                    window.location.href = "https://forms.gle/Rd7R1mQ62gdke534A"
                    break;
            default:
                alert("Enter correct details or Contact to office!!")
        }
    }
}