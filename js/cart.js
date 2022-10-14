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
                                <input type="number" oninput="subtotal(value, ${compra.unitCost}, ${localStorage.setItem("dolar", compra.currency)} )" class="form-control form-control-lg text-center" id="count" min="1" max="5" placeholder="${compra.count}">
                            </td>
                            <td class="actions" data-th="Subtotal" id="cantidad">
                            ${compra.currency} ${compra.unitCost}
                            </td>
                            `;
                            
      document.getElementById("carrito").innerHTML = cart;
      document.getElementById("title").innerHTML = title;
    }
  }
}

function subtotal(value , compra){
  let subtotal="";

                            let subtotalmul = value*compra;                                                
                            console.log(subtotalmul)
                            subtotal=`
                            <td class="actions" data-th="Subtotal" id="cantidad">
                            ${localStorage.getItem("dolar")}
                            ${subtotalmul}
                            </td>
                        </tr>
                       
    </section>
`;
document.getElementById("cantidad").innerHTML=subtotal
}


