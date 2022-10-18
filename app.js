

function add_item() {
    let list_item = document.querySelector(".list_item");
    let item = document.getElementById("box");
    if (item.value != "") {
    let make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value));
    list_item.appendChild(make_li);
    item.value = "";
    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    alert("добавьте задачу!");
  }
  const delBtn = document.querySelector('.delete_btn')
    delBtn.onclick = function (){
        while(list_item.childNodes.length) {
        list_item.childNodes[0].parentNode.removeChild(list_item.childNodes[0]);
}
  }
}
