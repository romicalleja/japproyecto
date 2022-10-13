let prodinfoarray = [];
let prodcommentarray = [];
let imgarray = [];
const comentar = document.getElementById("enviarcomentario");
const d = new Date();
relatedarray = [];

function showproductinfo() {
  let productsInfo = "";
  {
    let info = prodinfoarray;

    {
      productsInfo += `
        
    <div class="container">
            <h2 class="float-start">${info.name}</h2> <button class="float-end">COMPRAR</button>
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
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <img src=${info.images[0]} class="d-block w-100">
    </div>
    <div class="carousel-item">
    <img src=${info.images[1]} class="d-block w-100">
    </div>
    <div class="carousel-item">
    <img src=${info.images[2]} class="d-block w-100">
    </div>
    <div class="carousel-item">
    <img src=${info.images[3]} class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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

function showrelatedprod() {
  let htmlContentToAppend = "";

  for (let i = 0; i < relatedarray.length; i++) {
    let product = relatedarray[i];

    htmlContentToAppend += `
        <div onclick="setproductid(${product.id})">
            <div class="col-1-2">
            <img id="img" src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <p>${product.name}</p>
        </div>
        </div>
`;
    document.getElementById("relatedprod").innerHTML = htmlContentToAppend;
  }
}
function setproductid(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html";
}

function showcomments() {
  let coments = "";
  for (let i = 0; i < prodcommentarray.length; i++) {
    let coment = prodcommentarray[i];
    let stars = "";
    let starsn = "";
    for (let s = 0; s < coment.score; s++) {
      stars += `
            <p class="fa fa-star checked"></p>
            `;
    }
    for (let n = coment.score; n < 5; n++) {
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
                <div>${stars}${starsn}</div>
                <p class="mb-1">${coment.description}</p>
        </div>
       </div>
</div>
`;
    document.getElementById("comentcontainer").innerHTML = coments;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  let prodinfoURL = PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json";
  let comentsURL =PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + ".json";
  getJSONData(prodinfoURL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      prodinfoarray = resultObj.data;
      relatedarray = resultObj.data.relatedProducts;
      //   console.log(prodinfoarray);
      showproductinfo();
      showrelatedprod();
    }
  });
  getJSONData(comentsURL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      prodcommentarray = resultObj.data;
      //   console.log(prodcommentarray);
      showcomments();
    }
  });
});

comentar.addEventListener("click", function (e) {
  let newcoments = "";
  let punto = document.getElementById("punt").value;
  var comentario = document.getElementById("opinion").value;
  let user = localStorage.getItem("mail");
  console.log(comentario);
  let stars = "";
  let starsn = "";
  for (let s = 0; s < punto; s++) {
    stars += `
            <p class="fa fa-star checked"></p>
            `;
  }
  for (let n = punto; n < 5; n++) {
    starsn += `
            <p class="fa fa-star"></p>
            `;
  }
  newcoments += `
    <div class="list-group-item list-group-item-action cursor-active">
    <div class="row">
    <div class="container" class="col-3">
        <p class="bold">${user}
        <small class="text-muted">${d.toISOString()}</small> </p>
    
        <p>${stars}${starsn}</p>
    <p class="mb-1">${comentario}</p>
</div>
</div>
</div>
`;
  document.getElementById("newcom").innerHTML = newcoments;
});
