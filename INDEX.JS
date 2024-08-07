
const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#Message");
const sahana=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");


function validateForm()
{
    clearMessages();
    let  errorflag=false
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="name cannot be blank";
        errorflag=true;
        nameInput.classList.add("error-border");
    }
    if(!emailIsValid(email.value))
    {
         errorNodes[1].innerText="email is not valid";
         errorflag=true;
         email.classList.add("error-border");
    }
    if(message.value.length<1)
        {
            errorNodes[2].innerText="message cannot be blank";
            errorflag=true;
            message.classList.add("error-border");
        }
    if(!errorflag)
    {
        sahana.innerHTML="form validation successful";

    }
    
}
function clearMessages()
{
    for(i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText=" ";
    }   
    nameInput.classList.remove("error-border");
    message.classList.remove("error-border");
    email.classList.remove("error-border");
}
function emailIsValid(email)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}

