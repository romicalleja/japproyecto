let productsArray = [];
const ORDER_ASC_BY_Price = "AZ";
const ORDER_DESC_BY_Price = "ZA";
const ORDER_BY_SOLD_COUNT = "SOLD";
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
const busqueda= document.getElementById("busqueda")


function setproductid(id){
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"
}

function sortproducts(criteria, array) {
  let result = [];
  if (criteria === ORDER_ASC_BY_Price) {
    result = array.sort(function (a, b) {
      if (a.cost < b.cost) {return -1;}
      if (a.cost > b.cost) {return 1;}
      return 0;
    });
  } else if (criteria === ORDER_DESC_BY_Price) {
    result = array.sort(function (a, b) {
      if (a.cost > b.cost) {return -1;}
      if (a.cost < b.cost) {return 1;}
      return 0;
    });
  } else if (criteria === ORDER_BY_SOLD_COUNT) {
    result = array.sort(function (a, b) {
      let aCount = parseInt(a.soldCount);
      let bCount = parseInt(b.soldCount);

      if (aCount > bCount) {return -1;}
      if (aCount < bCount) {return 1;}
      return 0;
    });
  }
  return result;
}

function showProducts() {
  let htmlContentToAppend = "";

  for (let i = 0; i < productsArray.length; i++) {
    let product = productsArray[i];
    if (
      (minCount == undefined ||
        (minCount != undefined && parseInt(product.cost) >= minCount)) &&
      (maxCount == undefined ||
        (maxCount != undefined && parseInt(product.cost) <= maxCount))
    ) {
      htmlContentToAppend += `
        <div  onclick="setproductid(${product.id})"class="list-group-item list-group-item-action">
            <div class="row">
            <div class="col-3">
            <img src="${product.image}" alt="${
        product.description
      }" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${
                  product.name + " - " + product.currency + " " + product.cost
                }</h4>
                <small class="text-muted">${product.soldCount} Vendidos</small>
            </div>
            <p class="mb-1">${product.description}</p>
        </div>
    </div>
</div>
`;
      document.getElementById("prodcontainer").innerHTML = htmlContentToAppend;
      //console.log(htmlContentToAppend)
    }
  }
}

function sortAndShowProducts(sortCriteria, curproductsArray) {
  currentSortCriteria = sortCriteria;

  if (curproductsArray != undefined) {
    productsarray = curproductsArray;
  }

  productsarray = sortproducts(currentSortCriteria, productsArray);

  showProducts();
}

document.addEventListener("DOMContentLoaded", function (e) {
  let prodURL= PRODUCTS_URL + localStorage.getItem("catID") + ".json"
  getJSONData(prodURL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      console.log(resultObj);
      productsArray = resultObj.data.products;
      console.log(productsArray);
      showProducts();
    }
  });
  document.getElementById("sortAsc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_ASC_BY_Price);
  });

  document.getElementById("sortDesc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_DESC_BY_Price);
  });

  document.getElementById("sortByCount").addEventListener("click", function () {
    sortAndShowProducts(ORDER_BY_SOLD_COUNT);
  });

  document.getElementById("clearRangeFilter").addEventListener("click", function () {
      document.getElementById("rangeFilterCountMin").value = "";
      document.getElementById("rangeFilterCountMax").value = "";

      minCount = undefined;
      maxCount = undefined;

      showProducts();
    });

  document    .getElementById("rangeFilterCount").addEventListener("click", function () {
      minCount = document.getElementById("rangeFilterCountMin").value;
      maxCount = document.getElementById("rangeFilterCountMax").value;

      if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }
      
      showProducts();
      
    });
    busqueda.addEventListener("input", function(e){
      let value = e.target.value
      productsArray.forEach(product => {
        const isVisible = product.name.includes(value) || product.description.includes(value)
        product.classList.toggle("hide", !isVisible)
      });
    })
});
