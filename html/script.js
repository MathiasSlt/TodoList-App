var urlApp = "http://localhost:3000/api/todoList";
function ajouterElement()
{
    let bodyRequest={
        name:document.getElementById("nameRequestTache").value,
        desc:document.getElementById("descritpionRequestTache").value,
        fini:false
    };
    let myRequest={
        method:'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(bodyRequest)
    };
    fetch(urlApp, myRequest).then(function(res){
            console.log(myRequest.body);
        }).catch(function(error){
            console.log("Erreur"+error);
        });
        refreshList();
}
function refreshList()
{
    var myheader = new Headers({
        "Content-Type": "text/plain",
        "X-Custom-Header": "ProcessThisImmediately",
    });
    var myInit={
        method:'GET',
        Headers: myheader,
        mode:'cors'
    };
    fetch(urlApp, myInit).then(function(res){
        res.json().then(function(jsonRes){
            let liste = document.getElementById("bodyTab");
            liste.innerHTML="";
            for(let j=0;j<jsonRes.length;j++)
                {
                    var row = document.createElement("tr");
                    var cellName = document.createElement("td");
                    var cellDesc = document.createElement("td");
                    var cellFini = document.createElement("td");
                    cellName.innerText=jsonRes[j].name;
                    cellDesc.innerText=jsonRes[j].desc;
                    if(jsonRes[j].fini==false)
                    {
                        cellFini.innerHTML="Non fini";
                        cellFini.style="color:#7D0F27;font-weight: bold;";
                    }
                    else{
                        cellFini.innerHTML="Fini";  
                        cellFini.style="color:#43B817;font-weight: bold;";
                    } 
                    //cellFini.innerHTML=jsonRes[j].fini;
                    row.appendChild(cellName);
                    row.appendChild(cellDesc);
                    row.appendChild(cellFini);
                    var cellCheckBox=document.createElement("td");
                    var checkBox = document.createElement("input");
                    checkBox.type="checkbox";
                    checkBox.className="checkBoxListe";
                    cellCheckBox.appendChild(checkBox);
                    row.appendChild(cellCheckBox);
                    liste.appendChild(row);
                }
        });
    }).catch(function(error){
        console.log("Erreur : "+error);
    });
}
function supprimerElement()

{
    let checkBoxsActive = document.getElementsByClassName("checkBoxListe");
        let myheader = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                });
        for(let i=0;i<checkBoxsActive.length;i++)
        {
            let parent = checkBoxsActive[i].parentNode;
            if(checkBoxsActive[i].checked==true)
            {
                let myInit={
                    method:'delete',
                    headers: myheader,
                    body:JSON.stringify({name:parent.previousSibling.previousSibling.previousSibling.textContent})
                };
                fetch(urlApp, myInit).then(function(res){
                    console.log(myInit.body);
                }).catch(function(error){
                        console.log("Erreur"+error);
                });
            }
                                
        }
    refreshList();
}
function changEtatTask()
{
    let checkBoxsActive = document.getElementsByClassName("checkBoxListe");
        let myheader = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                });
        for(let i=0;i<checkBoxsActive.length;i++)
        {
            let parent = checkBoxsActive[i].parentNode;
            
            if(checkBoxsActive[i].checked==true)
            {
                let value;
                if(parent.previousSibling.textContent=="Non fini")
                {
                    value="true";
                }
                else value="false";
                let myInit={
                    method:'put',
                    headers: myheader,
                    body:JSON.stringify({fini:value,name:parent.previousSibling.previousSibling.previousSibling.textContent})
                };
                fetch(urlApp, myInit).then(function(res){
                    
                }).catch(function(error){
                        console.log("Erreur"+error);
                });
            }
                                
        }
        refreshList();
}