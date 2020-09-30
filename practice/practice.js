function changeColorRed(){
  const str = document.getElementById('col');
  str.style.color="red";
}

function addAnswer(obj,text){
  const o = obj.parentElement;
  const newP = document.createElement("p");

  newP.innerHTML = text;
  o.appendChild(newP);

  newP.onclick = function(){
    const p = this.parentElement;
    p.removeChild(this);
  };
}
