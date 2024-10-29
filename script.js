const form = document.getElementById("userForm")


let data = {

}
form.onsubmit = (event) =>{
    
    event.preventDefault(); 

    let formIsValid = true

    
   let inps = document.querySelectorAll("input")
    
    
    inps.forEach(inp => {
        const errorMessage = inp.querySelectorAll('.eror-message');

        data[inp.name]= inp.value
       
        if (inp.value.trim() === "") {
            inp.classList.add("error");
            errorMessage.style.display = "block";
            formIsValid = false;
        } else {
            inp.classList.remove("error");
            errorMessage.style.display = "none";
        }
    });

    //
    

}
  
