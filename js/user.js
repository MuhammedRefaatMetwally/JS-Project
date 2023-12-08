let userInfo = document.querySelector("#user_info");

let userData = document.querySelector("#user");

let links = document.querySelector("#links")

let logoutBtn = document.querySelector("#logout")

if (localStorage.getItem("firstName")) {
  links.remove()
  userInfo.style.display = "flex"
  userData.innerHTML = localStorage.getItem("firstName")
}

logoutBtn.addEventListener("click",function(){
  localStorage.clear();
  setTimeout(()=>{
   window.location = "login.html"
  },1500)
})