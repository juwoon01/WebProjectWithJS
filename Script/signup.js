
function signup_chk(){
  const signup_id = document.getElementById("signup_id").value,
        signup_pass = document.getElementById("signup_pass").value,
        signup_pass_chk = document.getElementById("signup_pass_chk").value,
        signup_name = document.getElementById("signup_name").value,
        signup_birth = document.getElementById("signup_birth").value,
        signup_gender = document.getElementById("signup_gender").value,
        signup_phone = document.getElementById("signup_phone").value,
        signup_agency = document.getElementById("signup_agency").value,
        signup_email = document.getElementById("signup_email").value;
  const pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi,
        pattern_chk2 = /[0-9]/,
        pattern_chk3 = /[a-zA-Z]/,
        pattern_chk4 = /[~!@#$%^&*()_+:{}]/,
        pattern_chk5 = /[1-4]/;

  if(signup_id.length == 0){
    alert("아이디를 입력해 주세요.");
    return;
  }
  else if(signup_id.search(/\s/) != -1){
    alert("아이디에 공백은 들어갈 수 없습니다.");
    return;
  }
  else if(pattern_chk1.test(signup_id)){
    alert("아이디에 특수문자는 들어갈 수 없습니다.");
    return;
  }
  else if(signup_pass.length < 8 || !pattern_chk2.test(signup_pass) || !pattern_chk3.test(signup_pass) || !pattern_chk4.test(signup_pass)){
    alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
    return;
  }
  else if(signup_pass != signup_pass_chk){
    alert("입력하신 비밀번호가 다릅니다.");
    return;
  }
  else if(signup_name.length == 0){
    alert("이름을 입력해 주세요.");
    return;
  }
  else if(signup_name.search(/\s/) != -1){
    alert("이름에 공백은 들어갈 수 없습니다.");
    return;
  }
  else if(pattern_chk1.test(signup_name)){
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return;
  }
  else if(pattern_chk2.test(signup_name)){
    alert("이름에 숫자는 들어갈 수 없습니다.");
    return;
  }
  else if(signup_birth.length == 0){
    alert("생년월일을 입력해주세요.");
    return;
  }
  else if(signup_birth.length != 6 || !pattern_chk2.test(signup_birth) || pattern_chk1.test(signup_birth) || pattern_chk3.test(signup_birth) ){
    alert("생년월일은 6자리 숫자이어야 합니다.");
    return;
  }
  else if(signup_gender.length == 0){
    alert("뒷 주민번호 첫번째 자리를 입력해세요.");
    return;
  }
  else if(signup_gender.length != 1 || !pattern_chk5.test(signup_gender)){
    alert("뒷 주민번호 첫번째 자리는 1~4만 입력 가능합니다.");
    return;
  }
  else if(signup_phone.length == 0){
    alert("전화번호를 입력해주세요.");
    return;
  }
  else if(signup_phone.length != 11 || !pattern_chk2.test(signup_phone) || pattern_chk1.test(signup_phone) || pattern_chk3.test(signup_phone)){
    alert("전화번호는 11자리 숫자이어야 합니다.");
    return;
  }
  else if(signup_agency.length == 0){
    alert("통신사를 선택해주세요.");
    return;
  }
  else if(signup_email.length == 0){
    alert("이메일을 입력해주세요.");
    return;
  }
  else{
    if(confirm("입력한 정보로 가입하시겠습니까?") == true){
      alert("가입이 성공적으로 완료되었습니다. 메인페이지에서 로그인 해주세요.");
      location.href = "../index.html";
    }
  }

}
