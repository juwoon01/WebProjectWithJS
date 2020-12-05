let certification = 0;
function getCertification(){
  const signup_name = document.getElementById("signup_name").value,
        signup_phone = document.getElementById("signup_phone").value;

  const pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi,
        pattern_chk2 = /[0-9]/,
        pattern_chk3 = /[a-zA-Z]/;



  if(signup_name.length == 0){
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
  else if(signup_phone.length == 0){
    alert("전화번호를 입력해주세요.");
    return;
  }
  else if(signup_phone.search(/\s/) != -1){
    alert("전화번호에 공백은 들어갈 수 없습니다.");
    return;
  }
  else if(signup_phone.length != 11 || !pattern_chk2.test(signup_phone) || pattern_chk1.test(signup_phone) || pattern_chk3.test(signup_phone)){
    alert("전화번호는 11자리 숫자이어야 합니다.");
    return;
  }
  else{
    certification = 1234;
    alert("인증번호가 발송되었습니다.");
  }
}

function certification_chk(){
  signup_certification = document.getElementById("signup_certification").value
  if(certification == 0){
    alert("인증번호를 받아야합니다.");
  }
  else if(signup_certification != certification){
    alert("인증번호가 다릅니다.(1234)");
  }
  else{
    alert("입력하신 정보의 회원정보가 존재하지 않습니다.");
  }
}
