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
 if(location.href == "file:///C:/Users/82105/Desktop/%EC%BD%94%EB%94%A9/%EC%9B%B9%ED%94%842%ED%95%99%EA%B8%B0/index.html"){
   location.href= "HTML/product.html";
 }
 else{
    location.href= "./product.html";
 }
}

document.getElementById("album01").addEventListener('click', gotoProduct);
document.getElementById("album02").addEventListener('click', gotoProduct);
document.getElementById("album03").addEventListener('click', gotoProduct);
document.getElementById("album04").addEventListener('click', gotoProduct);
document.getElementById("album05").addEventListener('click', gotoProduct);
