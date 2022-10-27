let cartarray = [];
const modalpago = document.getElementById("modalpago");
let codigo= document.getElementById("codigo")
let tarjeta=document.getElementById("tarjeta")
let vencimiento= document.getElementById("vencimiento")
let cuenta=document.getElementById("cuenta")

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
                                        <img src="${
                                          compra.image
                                        }" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                    </div>
                                    <div class="col-md-9 text-left mt-sm-2">
                                       <h4>${compra.name}</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Costo">${compra.currency} ${
        compra.unitCost
      }</td>
                            <td data-th="Count">
                                <input type="number" oninput="subtotal(value, ${compra.unitCost}, ${localStorage.setItem("dolar",compra.currency)})"
                                 class="form-control form-control-lg text-center" id="count" min="1" max="5" placeholder="${compra.count}">
                            </td>
                            <td class="actions" data-th="Subtotal" id="cantidad">
                            ${compra.currency} ${compra.unitCost}
                            </td>
                            `;

      document.getElementById("carrito").innerHTML = cart;
      document.getElementById("title").innerHTML = title;
    }
    total(localStorage.getItem("costoenvio"));
  }
}

function costoenvio(costoenvio) {
  localStorage.setItem("costoenvio", costoenvio);
  total(localStorage.getItem("costoenvio"));
}

function subtotal(value, compra) {
  let subtotal = "";

  let subtotalmul = value * compra;
  console.log(subtotalmul);
  subtotal = `
                            <td class="actions" data-th="Subtotal" id="cantidad">
                            ${localStorage.getItem("dolar")}
                            ${subtotalmul}
                            </td>
                        </tr>
                       
    </section>
`;
  document.getElementById("cantidad").innerHTML = subtotal;

  localStorage.setItem("subtotal", subtotalmul);
  total(localStorage.getItem("costoenvio"));
}

function total(envio) {
  let subtotal= localStorage.getItem("subtotal")
  let envios = (subtotal / 100) * envio;
  let total = Number(subtotal)+Number(envios);
  // console.log(localStorage.getItem("costoenvio"));

  let costos = "";
  costos = `
  <h3>Costos</h3>
  <div>
  <div class="list-group-item">
 Subtotal:USD ${subtotal}
  </div>
  <div class="list-group-item">
  Envio: 
  USD ${envios}
  </div>
  <div class="list-group-item">
  Total:
   USD ${total}
  </div>
  </div>

  `;

  document.getElementById("costos").innerHTML = costos;
}

function enable(cual){
  console.log(cual)
  localStorage.setItem("pago", cual)
  if (cual = transferencia){
    cuenta.disabled= false
    tarjeta.disabled=true
    codigo.disabled=true
    vencimiento.disabled= true
  }
  else if(cual = credito){
    cuenta.disabled= true
    tarjeta.disabled=false
    codigo.disabled=false
    vencimiento.disabled= false
  }
}

function pago(){
  let pago= localStorage.getItem("pago")
  if (codigo.length>>0 && tarjeta.length>>0 && vencimiento.length>>0){
    console.log(codigo.length)
    localStorage.setItem("pagocompleto", "si")
  }
  else if (cuenta.length>>0){
    localStorage.setItem("pagocompleto", "si")
  }
  localStorage.setItem("pagocompleto", "no")
}

function finalizar(){
  pago()
  let pagocompleto= localStorage.getItem("pagocompleto")
  if (pagocompleto= "si"){
  let alerta= ""

  alerta +=`
  <div class="alert alert-success" role="alert">
  Compra completada con exito!
  `

 document.getElementById("alert").innerHTML=alerta
 console.log(alerta)
}
else{
  let alerta= ""

  alerta +=`
  <div class="alert alert-danger" role="alert">
Complete los datos  `

 document.getElementById("alert").innerHTML=alerta

}
}
