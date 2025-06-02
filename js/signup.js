
const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const inputPass = document.getElementById("inputPassword")
const inputRepass = document.getElementById("inputRepass")
const inputPhone = document.getElementById("inputPhone")
const btnSignup = document.querySelector(".btn")

btnSignup.addEventListener("click", () => {
    let dataUser = {
        name:inputName.value,
        email:inputEmail.value,
        password:inputPass.value,
        rePassword:inputRepass.value,
        phone:inputPhone.value
    }
    localStorage.setItem("user", JSON.stringify(dataUser))
    console.log(dataUser)
    signUp(dataUser)
})

async function signUp(data){
    let res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',
        {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    let result = await res.json();
    console.log(result);
    
    if(result.message === "success"){
        alert("Signup successful")
        window.location.href = "index.html"
    }else if(result.message === "fail"){
        alert("Signup failed")
    }
}

