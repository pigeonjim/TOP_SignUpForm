let sndBtn = document.querySelector("button");
sndBtn.addEventListener("click", (event) => pssWrdCheck(event));

function pssWrdCheck(event){
    let box1 = document.getElementById("password");
    let box2 = document.getElementById("pswdCheck");

    if(box1.value.length == 0){
        alert("Password is required");
        event.preventDefault();
    }else if(box2.value.length == 0){
        alert("Please confrim password")
        event.preventDefault();
    } else if(box1.value != box2.value){
        alert("Passwords do not match.")
        event.preventDefault();      
    }
}