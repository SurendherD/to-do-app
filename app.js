
var list=[];
var input=document.getElementById("input");

document.getElementById("button").onclick =click;

function click(){
    list.push(input.value);
    input="";
    show();
}

var todolist=document.getElementById("todolist");

function show(){
    todolist.innerHTML = " ";

    list.forEach(function (i, j) {
        todolist.innerHTML +=
          "<li>" +
          i +
          "<a onclick='edit(" +
          j +
          ")'>Edit</a>" +
          "<a onclick='del(" +
          j +
          ")'>&times | </a></li>";
      });
    
}

function del(j){
    list.splice(j, 1);
    show();
}

function edit(j){
    var newinput=prompt("Please enter new value");
    list.splice(j,1,newinput);
    show();
}

