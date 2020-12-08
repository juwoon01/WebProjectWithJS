function gotoProduct(){
  const imgTag = this.firstChild.nextSibling;
  const img= imgTag.getAttribute('src');
  const name = imgTag.nextSibling.nextSibling.firstChild.nextSibling.innerText;
  const cost = imgTag.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText;

  const obj ={
    name: name,
    img: img,
    cost: cost
  };
 localStorage.setItem("obj",JSON.stringify(obj));
 location.href= "HTML/product.html";

}
document.getElementById("album01").addEventListener('click', gotoProduct);
document.getElementById("album02").addEventListener('click', gotoProduct);
document.getElementById("album03").addEventListener('click', gotoProduct);
document.getElementById("album04").addEventListener('click', gotoProduct);
document.getElementById("album05").addEventListener('click', gotoProduct);
