let cartarray = [];

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      cartarray = resultObj.data.articles;
      console.log(cartarray);
      showcart();
    }
  });
});

function showcart() {
  let cart = "";
  let title = "";
  title += `
<section class="pt-5 pb-5">
<div class="container">
  <div class="row w-100">
      <div class="col-lg-12 col-md-12 col-12">
          <h3 class="display-5 mb-2 text-center">Shopping Cart</h3>
          <p class="mb-5 text-center">Tienes
              <i class="text-info font-weight-bold">${cartarray.length}</i> productos en tu carro de compras</p>
              `;
  for (let i = 0; i < cartarray.length; i++) {
    let compra = cartarray[i];
    {
      cart += `
                        <tr>
                            <td data-th="Producto">
                                <div class="row">
                                    <div class="col-md-3 text-left">
                                        <img src="${compra.image}" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                    </div>
                                    <div class="col-md-9 text-left mt-sm-2">
                                       <h4>${compra.name}</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Costo">${compra.currency} ${compra.unitCost}</td>
                            <td data-th="Count">
                                <input type="number" class="form-control form-control-lg text-center" id="count" min="1" max="5">
                            </td>
                            <td class="actions" data-th="Subtotal" id="cantidad">
                            </td>
                        </tr>
                       
    </section>
`;

      document.getElementById("carrito").innerHTML = cart;
      document.getElementById("title").innerHTML = title;
    }
  }
}

let count= document.getElementById("count")

count.addEventListener("input", function(e){
    let subtotal=""
    subtotalmul=""
    for (let i = 0; i < cartarray.length; i++) {
        let compra = cartarray[i];
    
    let subtotalmul = document.getElementById("count")*compra.unitCost;
subtotal += `
<div class="text-right">
  <p>${compra.currency}${subtotalmul}}</p>
</div>
`;

document.getElementById("cantidad").innerHTML = subtotalmul;
    }
})


