
let passwdArr = [["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
,["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "/", "," , "." ,";" , ":","&gt;","&lt;"],
 ['1','2',"3","4","5","6","7","8","9","0"]]

function passwd(){
    let passwdr = ""
    let passwdLength = +(document.querySelector("#passwdLength").value)
    
    if(passwdLength <6){
        alert("Kodun uzunluğu 6 dan böyük olmalıdır")
        return
         
    }
    if(passwdLength >60){
        alert("Kodun uzunluğu 60 dan böyük olmamalıdır")
        return
    }   
    let big = 1
    let small =1
    let symbol =1
    let number =1

    for(let a =0 ;a<passwdLength;a++){
        let arraySelectIndex = Math.floor(Math.random()*(passwdArr.length))
        let selectedArray = passwdArr[arraySelectIndex]
        let selectedElementIndex = Math.floor(Math.random()*(selectedArray.length))
        
        let element = selectedArray[selectedElementIndex]
        if(passwdArr[0].includes(element)){
            big -=1
        }else if(passwdArr[1].includes(element)){
            small-=1
        }else if(passwdArr[2].includes(element)){
            symbol -=1
        }else if (passwdArr[3].includes(element))(
            number -=1
        )
        
        
        passwdr +=element
        
      }
      if(big ==1 || small ==1 || symbol ==1 || number ==1){ 
        return passwd()
    }
    



      let element = document.querySelector(".generated_passwd")
      element.innerHTML= passwdr
}

let button = document.querySelector("#generate")

button.addEventListener('click',passwd)
