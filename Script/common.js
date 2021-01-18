let isLogin;
const signButton = document.querySelector(".signbt");

function loginCheck(){
  const chk_id = document.getElementById("id").value;
  const chk_pass = document.getElementById("pass").value;

 //로그인 체크 (admin/admin123, user01/user111, user02/user222, user03/user333)
  if(chk_id=="admin" && chk_pass=="admin123"){
    alert("admin 님 환영합니다");
    loginSetting();
  }
  else if(chk_id=="user01" && chk_pass=="user111"){
    alert("user01 님 환영합니다");
    loginSetting();
  }
  else if(chk_id=="user02" && chk_pass=="user222"){
    alert("user02 님 환영합니다");
    loginSetting();
  }
  else if(chk_id=="user03" && chk_pass=="user333"){
    alert("user03 님 환영합니다");
    loginSetting();
  }
  else{
    alert("아이디, 비밀번호가 일치하지 않습니다.");
  }
}

function enterKey(){
  if(window.event.keyCode == 13){
      loginCheck();
  }

}

function preparing(){
  alert("준비중인 기능입니다.");
}

function goToLogin(){
  location.href="./login.html";
}

function goToLoginFromIndex(){
  location.href="./HTML/login.html";
}

function loginSetting(){
  location.href="../index.html";
  localStorage.setItem("isLogin", "true");

}

function logOut(){
  if(confirm("로그아웃 하시겠습니까?") == true){
    localStorage.setItem("isLogin", "false");
    if(document.location.href == "file:///C:/Users/82105/Desktop/%EC%BD%94%EB%94%A9/%EC%9B%B9%ED%94%842%ED%95%99%EA%B8%B0/index.html"){
      location.href= "./index.html";
    }
    else{
      location.href= "../index.html";
    }
  }

}

function loginButtonText(){
  if(isLogin == "true"){
    signButton.innerText = "Logout";
    signButton.setAttribute("onclick", "logOut()");
  }
  else{
    signButton.innerText = "Sign In";

    if(document.location.href == "file:///C:/Users/82105/Desktop/%EC%BD%94%EB%94%A9/%EC%9B%B9%ED%94%842%ED%95%99%EA%B8%B0/index.html"){
      signButton.setAttribute("onclick", "goToLoginFromIndex()");
    }//이거 불가능
    else{
      signButton.setAttribute("onclick", "goToLogin()");
    }

  }
}



function init() {
  isLogin = localStorage.getItem("isLogin");
  loginButtonText();
}

init();
