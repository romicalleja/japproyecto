let prodinfoarray = [];
let prodcommentarray = [];
let imgarray = [];
const comentar = document.getElementById("enviarcomentario");
let puntosarray = [];

function showproductinfo() {
  let productsInfo = "";
  {
    let info = prodinfoarray;

    {
      productsInfo += `
        
    <div class="container">
            <h2>${info.name}</h2>
             </div>
             <hr></hr>
            <div>
        <p class="bold">Precio</p>
        <p>${info.currency + " " + info.cost}</p>
        <p class="bold">${"Descricion"} </p>
        <p> ${info.description}</p>
        <p class="bold">${"Categoria"}</p>
        <p>${info.category}</p>
        <p class="bold">${"Cantidad de Vendidos"}</p>
        <p>${info.soldCount}</p>
        <p class="bold">${"Imagenes ilustrativas"}
        <div class="col-1-4"><img class="img-fit" src=${info.images[0]}></div>
        <div class="col-1-4"><img class="img-fit" src=${info.images[1]}></div>
        <div class="col-1-4"><img class="img-fit" src=${info.images[2]}></div>
        <div class="col-1-4"><img class="img-fit" src=${info.images[3]}></div>
        </div>
        <div>
        </div>
    </div>
    </div>
</div>
    
`;
      document.getElementById("prodinfocontainer").innerHTML = productsInfo;
    }
  }
}
function showcomments() {
  let coments = "";
  

  for (let i = 0; i < prodcommentarray.length; i++) {
    let coment = prodcommentarray[i];
    let stars = "";
  let starsn = "";
    for (let s = 0; s <coment.score; s++) {
      stars += `
            <p class="fa fa-star checked"></p>
            `;
      console.log(stars);
    }
    for (let n = coment.score; n <5; n++) {
      starsn += `
            <p class="fa fa-star"></p>
            `;
    }
    coments += `
            <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
            <div class="container" class="col-3" >
                <p class="bold">${coment.user}
                <small class="text-muted">${coment.dateTime}</small> </p>
                <div id="">${stars}${starsn}</div>
                <p class="mb-1">${coment.description}</p>
        </div>
       </div>
</div>
`;
    // document.getElementById("papa").innerHTML = stars;
    document.getElementById("comentcontainer").innerHTML = coments;
  }
}

// function estrellitas(){
//     let stars=""
//     let e =prodcommentarray.length
//     let s= 5
//     while(e>0){
//         e--
//        stars+= `
//        <p class=""fa fa-star checked"">a</p>
//        `
//        document.getElementById("stars").innerHTML=stars
//        console.log(stars)
//     }
// }

document.addEventListener("DOMContentLoaded", function (e) {
  let prodinfoURL = PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json";
  getJSONData(prodinfoURL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      prodinfoarray = resultObj.data;
      console.log(prodinfoarray);
      showproductinfo();
    }
  });
});
document.addEventListener("DOMContentLoaded", function (e) {
  let comentsURL =
    PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + ".json";
  getJSONData(comentsURL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      prodcommentarray = resultObj.data;
      console.log(prodcommentarray);
      showcomments();
    }
  });
});

comentar.addEventListener("click", function (e) {
  let newcoments = "";
  let punto = document.getElementById("punt").value;
  let comentario = document.querySelector("opinion").value;
  let user = localStorage.getItem("mail");
  console.log(punto);
  console.log(comentario);
  newcoments += `
    <div class="list-group-item list-group-item-action cursor-active">
    <div class="row">
    <div class="container" class="col-3">
        <p class="bold">${user}
        <p>${punto}</p>
    <p class="mb-1">${comentario}</p>
</div>
</div>
</div>
`;
  document.getElementById("newcom").innerHTML = newcoments;
});
