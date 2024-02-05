var pop=document.querySelector(".popup")
var overlay=document.querySelector(".overlay")
function popupp()
{
    pop.style.display="block";
    overlay.style.display="block";
}
function popup_Cancel(event)
{
    event.preventDefault();
    pop.style.display="none";
    overlay.style.display="none";
}
var container=document.querySelector(".book_title");
var input_title=document.getElementById("title");
var input_suject=document.getElementById("subject");
var input_des=document.getElementById("description");
function create(event)
{
    event.preventDefault();
   
    var create_title=document.createElement("h2")
    create_title.innerHTML=input_title.value;
    var create_book=document.createElement("div");
    create_book.setAttribute("class","book_container");
    create_book.innerHTML="<h3>"+input_suject.value+"</h3>"+"<p>"+input_des.value+"</p>"+"<button onclick='Delete(event,this)'>Delete</button>"; 
    container.append(create_title,create_book);
 pop.style.display="none";
 overlay.style.display="none";

}
function Delete(event,button)
        {
            event.preventDefault();
            var row = button.parentNode.parentNode;
            row.remove();
        }