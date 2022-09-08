let prodinfoarray=[];
let prodcommentarray= []
let imgarray= []
const comentar= document.getElementById("enviarcomentario")

function showproductinfo(){
        let productsInfo= ""
{
        let info = prodinfoarray
    {
        productsInfo +=  `
        
    </div>
    <div class="col">
        <div class="d-flex w-100 justify-content-between">

            <h2 class="mb-1">${
              info.name
            }</h2>
            <br></br>
            </div>
        </div>
        <p>Precio  <br></br>
        ${info.currency +" "+ info.cost}</p>
        <p class="mb-1">${"Descricion"+ "<br></br>"+ info.description}</p>
        <p class="mb-1">${"categoria"+ "<br></br>"+ info.category}</p>
        <p class="mb-1">${"Cantidad de Vendidos"+ "<br></br>"+ info.soldCount+" "+"vendidos"}</p>
        <div class="row">
        <div class="col-3">
        <div img src="${info.images[0].src}">
         
        </div>
    </div>
    </div>
</div>
</div>
        
`;
document.getElementById("prodinfocontainer").innerHTML = productsInfo;
    }
}
}
function showcomments(){
    let coments= ""
    for(let i= 0; i < prodcommentarray.length;i++){
        let coment= prodcommentarray[i]
        {
            coments+=`
            <div>
            <div class="row">
            <div>
                <p class="bold">${coment.user}
                <small class="text-muted">${coment.dateTime}</small> </p>
                <p>${coment.score}</p>
            <p class="mb-1">${coment.description}</p>
        </div>
       </div>
</div>
`;
            document.getElementById("comentcontainer").innerHTML=coments;
        }
    }
}
function showpics(){
let pics=""
for(let i= 0; i < imgarray.length;i++){
    let pic= imgarray[i]
    {
        pics+=`
        <div img src="${pic[0].src}">
            
        </div>`;
    
    document.getElementById("piccontainer").innerHTML=pics
    }
}
}


document.addEventListener("DOMContentLoaded", function (e) {
    let prodinfoURL= PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json"
    getJSONData(prodinfoURL).then(function (resultObj) {
      if (resultObj.status === "ok") {
        prodinfoarray = resultObj.data;
        console.log(prodinfoarray);
        imgarray = resultObj.data.images
        console.log(imgarray)
        showproductinfo();
        showpics();
      }})}
      )
         document.addEventListener("DOMContentLoaded", function(e){
        let comentsURL= PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID")+".json"
        getJSONData(comentsURL).then(function(resultObj){
            if(resultObj.status==="ok"){
                prodcommentarray=resultObj.data
                console.log(prodcommentarray)
                showcomments();
            }
        })
      })

comentar.addEventListener("click",function(e){
    let newcoments= ""
    let punto = document.getElementById("punt");
    let comentario= document.getElementById("opinion");
    let user= localStorage.getItem("mail")
    console.log(punto.value);
    console.log(comentario);
    newcoments+=`
    <div>
    <div class="row">
    <div>
        <p class="bold">${user}
        <p>${punto.value}</p>
    <p class="mb-1">${comentario}</p>
</div>
</div>
</div>
`;
document.getElementById("newcom").innerHTML=newcoments;

})