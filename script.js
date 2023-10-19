const inp=document.getElementById("input");

const li=document.getElementById("listContainer");


function myfunct()
{
    let x=document.getElementById("input");
    x.value=x.value.toUpperCase();
}

function func()
{
    if(document.getElementById("input").value=="")
    {
        alert("Please enter any task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=document.getElementById("input").value;
        listContainer.appendChild(li);
    }
    document.getElementById("input").value="";

}