
let textarea=document.querySelector(".textarea");
let filename=document.querySelector(".filename");
let submit=document.querySelector(".submit");


function invalid_detals()
{
    if(textarea.value==="" || filename.value ==="")
        {
            alert("please complete the required details")
        }
}

submit.addEventListener("click",invalid_detals);