const textNum = document.getElementById("textNum");
const inquiry_textarea = document.getElementById("inquiry_textarea");
let inquiry_textarea_now;
let count;
function countText(){
  inquiry_textarea_now = inquiry_textarea.value;
  count = inquiry_textarea_now.length;
  textNum.innerText = count + "/100";
}

const list_wrap = document.getElementById("list_wrap");

function upload(){
  inquiry_textarea_now = inquiry_textarea.value;
  inquiry_textarea.value = "";
  textNum.innerText = 0 + "/100";
  const list_div = document.createElement("div");
  const span = document.createElement("span");
  const text_div = document.createElement("div");

  span.innerText="관리자";
  text_div.innerText = inquiry_textarea_now;

  list_div.classList.add("product_inquiry_list");
  span.classList.add("user_name");
  text_div.classList.add("product_inquiry_text");

  list_div.appendChild(span);
  list_div.appendChild(text_div);
  list_wrap.appendChild(list_div);

}

function init(){
  if(localStorage.getItem('obj')){
    const obj = JSON.parse(localStorage.getItem('obj'));

    document.getElementById('product_img').setAttribute('src',"."+obj.img);
    document.getElementById('product_name').innerText = obj.name;
    document.getElementById('product_cost').innerText = obj.cost;
  }
}

init();
