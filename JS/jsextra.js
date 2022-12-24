let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let small = "abcdefghijklmnopqrstuvwxyz"
let sym = "!@#$%^&*(){}[]=/.;:,"
let num = "1234567890"

function generatePasswd(){
    let passwd = ""
    let passwdObj = {}
    let bigCheck = document.querySelector("#bigLetter")
    let smallCheck = document.querySelector("#smallLetter")
    let symCheck = document.querySelector("#symbol")
    let numCheck = document.querySelector("#number")
    let length = +(document.querySelector("#passwdLength").value)
    if(length <6){
        alert("Kodun uzunluğu 6 dan böyük olmalıdır")
        return
         
    }
    if(length >60){
        alert("Kodun uzunluğu 60 dan böyük olmamalıdır")
        return
    } 


    if(bigCheck.checked){
        passwdObj[big] =1
    }
    if(smallCheck.checked){
        passwdObj[small] =1
    }
    if(symCheck.checked){
        passwdObj[sym] =1
    }
    if(numCheck.checked){
        passwdObj[num] =1
    }  

    let passwdArr = Object.keys(passwdObj)
    if(passwdArr.length == 0){
        alert("Secim edin")
        return
    }

    for(let a =0;a<length ;a++){
        let arrayİndex = Math.floor(Math.random()*(passwdArr.length))
        
        let selectedStrig = passwdArr[arrayİndex]
        let elementIndex = Math.floor(Math.random()*(selectedStrig.length))
        let element = selectedStrig[elementIndex]
        for(let a = 0 ;a<passwdArr.length ;a++){
            if (passwdArr[a].includes(element)){
                passwdObj[passwdArr[a]] -=1
                break
            }
        }
        passwd += element
    }
    // console.log(passwdObj)
    let values = Object.values(passwdObj)
    // console.log(values)
    if(values.some((value)=>value==1)){
        return generatePasswd()

    }
    console.log(passwd)
    // console.log(passwdArr)

    let result = document.querySelector(".generated_passwd")
    result.innerHTML = passwd


    
}

let button = document.querySelector("#generate")
button.addEventListener("click",generatePasswd)