const remember = document.getElementById("remember")
const login = document.getElementById("login")
localStorage.setItem("remember", false)
login.onclick=()=>{
if (remember.checked=true) {
    localStorage.setItem("remember", true)
} else {
    localStorage.setItem("remember", false)
}
}