let input=document.getElementById("input");
let addBtn=document.getElementById("add");
let list=document.getElementById("list");
let clearBtn=document.getElementById("clear");

// addBtn.addEventListener("click",function(){    if(input.value.trim()!=""){
//         let li=document.createElement("li");
//         li.textContent=input.value;
//         list.appendChild(li);
//         input.value="";
//     }
// });

add.addEventListener("click",function(){
    if(input.value.trim()!=""){
        let li=document.createElement("li");
        li.textContent=input.value;
        list.appendChild(li);
        // input.value="";
    }});


    let hi=input.value;

    console.log(hi);

    clearBtn.addEventListener("click",function(){
        list.innerHTML="";
    }) ; 
    
// list.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("completed");
//     }});

// list.addEventListener("contextmenu",function(e){
//     e.preventDefault();
//     if(e.target.tagName==="LI"){
//         list.removeChild(e.target);
//     }});            
        