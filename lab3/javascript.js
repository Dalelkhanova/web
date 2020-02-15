function newElement()
{
    var li = document.createElement("li");
    var input = document.getElementById("myInput").value;
    var t = document.createTextNode(input);
    li.appendChild(t);

    if (input =='')
    {
        alert("Write smth");
    } else{
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var div = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(div);
    li.appendChild(span);

    var ch = document.createElement("input");
    ch.type = "checkbox";
    ch.className = "checked";
    list[i].prepend(ch);
    
        for(i=0; i < close.length; ++i)
        {
            close[i].onclick = function(){
                this.parentElement.style.display = "none";
            }
        }
        var checked = document.getElementsByClassName("checked");
        for (i = 0; i < checked.length; ++i)
        {
            checked[i].onchange = function()
            {
                if (this.checked)
                {
                    this.parentElement.classList.add("line");
                }
                else
                {
                     this.parentElement.classList.remove("line");
                }
            }
        }
}

var list = document.getElementsByTagName("li");
var i;

for (i = 0; i < list.length; i++)
{
    var span = document.createElement("span");
    var div = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(div);
    list[i].appendChild(span);
    
    var ch = document.createElement("span");
    ch.type = "checkbox";
    ch.className = "checked";
    list[i].prepend(ch);
}



var close = document.getElementsByClassName("delete");
var i;
for(i = 0; i < close.length; ++i)
{
    close[i].onclick = function(){
        this.parentElement.style.display = "none";
    }
}


var checked = document.getElementsByClassName("checked");
for (i = 0; i < checked.length; ++i)
{
    checked[i].onchange = function()
    {
        if (this.checked)
        {
            this.parentElement.classList.add("line");
        }else
        {
            this.parentElement.classList.remove("line");
        }
    }
}