
const fileInput=document.querySelector('input');

fileInput.addEventListener('change',()=>{
    const fr= new FileReader();
    fr.readAsText(fileInput.files[0]);
    fr.onload=function(){
        const csv= fr.result;
        const array=csv.split('\r\n').map((line)=>{
            return line.split(',');
        });
        array.shift();
        console.log(array);
        Window.valNo=0;
        Window.invalNo=0;
        
        Window.valMail=[];
        Window.invalMail=[];
        array.forEach(line => {
            let em= String(line);
            let m= line.map(line=>{
                return `<td>${line}</td>`;
            })
            let creEle= document.createElement("tr");
            creEle.innerHTML=m;
            if (em!= "") {
                
            
                
            if (em.charAt(em.length-4)==".") {
                document.getElementById('val').appendChild(creEle);
                Window.valMail.push(em);
                Window.valNo=Window.valNo+1;
                return false;
            }
            else if(em.charAt(em.length-3)=="."){
                document.getElementById("val").appendChild(creEle);
                Window.valMail.push(em);
                Window.valNo=Window.valNo+1;
                return false;
            }
            else{
                document.getElementById("inval").appendChild(creEle);
                Window.invalMail.push(em);
                Window.invalNo=Window.invalNo+1;
                return false;
            }
        }
        });
        document.querySelector("#valCount").innerHTML=Window.valNo;
        document.querySelector("#invalCount").innerHTML=Window.invalNo;
        

        
    };
});
document.getElementById("val").style.display = "none";
document.getElementById("inval").style.display = "none";

document.getElementById("myButton").addEventListener("click", function(){
    document.getElementById("val").style.display = "block";
  });
  
document.getElementById("myButton").addEventListener("click", function(){
    document.getElementById("inval").style.display = "block";
  });
  document.getElementById("myButton").addEventListener("click", function(event){
    event.preventDefault()
  });

