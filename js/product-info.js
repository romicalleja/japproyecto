let prodinfoarray=[];
let prodcommentarray= []
let imgarray= []

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
        <div img src="${info.images[1]}">
         
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
            <div class="list-group-item list-group-item-action">
            <div class="row">
            <div class="col-3">
            <div>
            <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${
                  coment.user + " " + coment.score}</h4>
                <small class="text-muted">${coment.dateTime}</small>
            </div>
            <p class="mb-1">${coment.description}</p>
        </div>
      
    </div>
</div>
`;
            document.getElementById("comentcontainer").innerHTML=coments;
        }
    }
}
// function showpics(){
// let pics=""
// for(let i= 0; i < imgarray.length;i++){
//     let pic= imgarray[i]
//     {
//         pics+=`
//         <div img src="${pic[1]}">
            
//         </div>`;
    
//     document.getElementById("piccontainer").innerHTML=pics
//     }
// }
// }


document.addEventListener("DOMContentLoaded", function (e) {
    let prodinfoURL= PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json"
    getJSONData(prodinfoURL).then(function (resultObj) {
      if (resultObj.status === "ok") {
        prodinfoarray = resultObj.data;
        console.log(prodinfoarray);
        showproductinfo();
      }})}
      )
    //   document.addEventListener("DOMContentLoaded", function (e) {
    //     let prodinfoURL= PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json"
    //     getJSONData(prodinfoURL).then(function (resultObj) {
    //       if (resultObj.status === "ok") {
    //         imgarray = resultObj.data.images;
    //         console.log(imgarray);
    //         showpics();
    //       }})}
    //       )


    //   document.addEventListener("DOMContentLoaded", function(e){
    //     let comentsURL= PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID")+".json"
    //     getJSONData(comentsURL).then(function(resultObj){
    //         if(resultObj.status==="ok"){
    //             prodcommentarray=resultObj.data
    //             console.log(prodcommentarray)
    //             showcomments();
    //         }
    //     })
    //   })