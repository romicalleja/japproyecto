let productsArray = [];

function showProducts() {
  let htmlContentToAppend = "";

  for (let i = 0; i < productsArray.length; i++) {
    let product = productsArray[i];
    htmlContentToAppend +=`
        <div  onclick="setproduct(${product.name})"class="list-group-item list-group-item-action">
            <div class="row">
            <div class="col-3">
            <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${product.name+ " - "+ product.currency+" "+product.cost}</h4>
                <small class="text-muted">${product.soldCount} Vendidos</small>
            </div>
            <p class="mb-1">${product.description}</p>
        </div>
    </div>
</div>
`;
        document.getElementById("carcontainer").innerHTML = htmlContentToAppend;
        //console.log(htmlContentToAppend)
  }
}


document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CAR_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      console.log(resultObj)
      productsArray = resultObj.data;
      console.log(productsArray);
      productsArray =resultObj.data.products
      console.log(resultObj.data.products)
      showProducts(productsArray);
    }
    
  });
});
