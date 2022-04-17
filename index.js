function create()
{
  let divLeft=document.createElement("div");
  let divRight=document.createElement("div");
  document.body.appendChild(divLeft);
  document.body.appendChild(divRight);
 divLeft.setAttribute("id","leftDiv");
 divRight.setAttribute("id","rightDiv");
 let textArea=document.createElement("textarea");
 divRight.appendChild(textArea);
 textArea.setAttribute("id","textArea")
 textArea.setAttribute("placeholder","I NEED TO...")
 textArea.addEventListener("keyup",eventHandle);
}
create();

function structure()
{ let divL=document.getElementById("leftDiv");
 let divInLeftDiv=document.createElement("div");
   divInLeftDiv.setAttribute("id","divInLeftDiv");
   divL.appendChild(divInLeftDiv);
    let mainHeading=document.createElement("h1");
    mainHeading.innerHTML="TASK LIST";
    divInLeftDiv.appendChild(mainHeading);
    let peraInDivInLeftDiv=document.createElement("p");
    peraInDivInLeftDiv.innerHTML="Add tasks to your list by typing to the right and <b>press Enter</b> you may then view pending tasks below...";
    divInLeftDiv.appendChild(peraInDivInLeftDiv);
    peraInDivInLeftDiv.setAttribute("id","peraInDivInLeftDiv");
}
structure();
var color="orangered";
var todo=[];
function eventHandle(event)
{// console.log(event);
       let text=document.getElementById("textArea");
   let valueInTextArea=text.value;
  if(event.key==="Enter" && text.value !== "")
   { 
     event.preventDefault();
  // console.log(valueInTextArea);
   let divForData=document.getElementById("divInLeftDiv")
   


   let divLeftForTask=document.createElement("div");
   divLeftForTask.setAttribute("id","divLeftForTask");
   divForData.appendChild(divLeftForTask);
   divLeftForTask.style.background=color;
   
 
    let userData= document.createElement("h4");
    userData.setAttribute("id","data");
    userData.innerHTML=valueInTextArea;
    divLeftForTask.appendChild(userData);
     let cheak=document.createElement("input");
     cheak.setAttribute("type","checkbox");
     cheak.setAttribute("id","cheak");
     divLeftForTask.appendChild(cheak);
    
    
    
     let deleteButton=document.createElement("button");
     deleteButton.setAttribute("id","delete");
     


    

     deleteButton.innerHTML="&#10060;";
     divLeftForTask.appendChild(deleteButton);
  
     deleteButton.addEventListener("click",deleteButton);

     deleteButton.addEventListener('click', () => divLeftForTask.remove());
    divLeftForTask.appendChild(deleteButton);

     todo.push(valueInTextArea);
     localStorage.setItem("todo",JSON.stringify(todo));
     textArea.value="";
    
   }
}

var saveData=localStorage.getItem("todo");
if(saveData !== null)
{
todo=JSON.parse(saveData);
}
todo.forEach(function(valueInTextArea){
  let divForData=document.getElementById("divInLeftDiv");
   let divLeftForTask=document.createElement("div");
   divLeftForTask.setAttribute("id","divLeftForTask");
   divForData.appendChild(divLeftForTask);
   divLeftForTask.style.background=color;
   
 
    let userData= document.createElement("h4");
    userData.setAttribute("id","data");
    userData.innerHTML=valueInTextArea;
    divLeftForTask.appendChild(userData);
     let cheak=document.createElement("input");
     cheak.setAttribute("type","checkbox");
     cheak.setAttribute("id","cheak");
     divLeftForTask.appendChild(cheak);
     let deleteButton=document.createElement("button");
     deleteButton.setAttribute("id","delete");
     deleteButton.innerHTML="&#10060;";
     divLeftForTask.appendChild(deleteButton);
    
})


function deleteButton()
{
  console.log("Ayushi Sharma");
}
