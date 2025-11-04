const boxes=document.querySelectorAll(".box");
const body=document.querySelector("body");
const h1=document.querySelector("h1");

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(box.getAttribute("id")=="yellow")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="purple")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="red")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="green")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="black")
        {
            body.style.backgroundColor=box.getAttribute("id");
            h1.style.color="white";
        }
        else if(box.getAttribute("id")=="orange")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="brown")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="pink")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="grey")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }
        else if(box.getAttribute("id")=="blue")
        {
            body.style.backgroundColor=box.getAttribute("id");
        }

    });
});