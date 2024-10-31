// const form = document.getElementById("userForm")


// let data = {

// }
// form.onsubmit = (event) =>{
    
//     event.preventDefault(); 

//     let formIsValid = true

    
//    let inps = document.querySelectorAll("input")
    
    
//     inps.forEach(inp => {
//         const errorMessage = inp.querySelectorAll('.error-message');

//         data[inp.name]= inp.value
       
//         if (inp.value.trim() === "") {
//             inp.classList.add("error");
//             errorMessage.style.display = "block";
//             formIsValid = false;
//         } else {
//             inp.classList.remove("error");
//             errorMessage.style.display = "none";
//         }
//     });

//     //
    

// }
  



const form = document.forms.namedItem("form")
const lbls = form.querySelectorAll('label')
const btn = form.querySelector('.btn')
const scs = document.querySelector('.scs')
const errs = document.querySelector('.err')
let truth = true

let correct = 0
let mistake = 0


form.onsubmit = (event) => {
    event.preventDefault()

const user = {}

lbls.forEach(label => {
    const inp = label.querySelector('input')
    let err_message = label.querySelector(".error-message")
    user[inp.name] = inp.value

    if (label.classList.contains('required') && inp.value.length === 0) {
        label.classList.add('error')
        err_message.textContent = `Please enter your ${inp.name}`,
        btn.style.background = "red"
        mistake ++
    }else if (label.classList.contains('required') && inp.value.length > 0){
        label.classList.remove('error')
        err_message.textContent = `Success`
        err_message.style.color = "green"
         btn.style.background = "green"
        correct ++
        
    }
    

    scs.textContent = correct,
    errs.textContent = mistake
})
  

console.log(user);
    

}


