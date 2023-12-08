
let producutsInCart = localStorage.getItem("ProductsInCart");
let favoriteProducts = localStorage.getItem("FavoriteProducts");

let allProduct = document.querySelector(".products");
let allFavorite = document.querySelector(".favorites");
let totalPriceH2 = document.querySelector(".totalPrice");

if(producutsInCart){
    let items = JSON.parse(producutsInCart);
    drawProductInCart(items)
}

if(favoriteProducts){
  let items = JSON.parse(favoriteProducts);
  drawFavorites(items)
}


function drawProductInCart(products) {
    let cartProducts = products.map((item) => {
      return `
        <div class="card container m-5" style="width: 20rem;">
        <img src="${item.imageUrl}" class="card-img mt-2 product_img" alt="...">
        <div class="card-body">
          <h4 class="card-title" id="productTitle">Product: ${item.title} </h4>
          <h5 class="card-text" id="productPrice">Price: ${item.price}  </h5>
          <h5 class="card-text" id="productCategory">Category: ${item.category} </h5>
          <div class="d-flex justify-content-between mt-4">
          <button type="button" onclick="removeFromCart(${item.id})" class="btn btn-danger" id="addToCartBtn">Remove From Cart</button>
          <button type="button" onclick="addNewProductsToCart(${item.id})" class="btn btn-light btn-sm btn-outline-primary " style="font-size: 18; ">+</button>
       <button type="button" onclick="removeFromCart(${item.id})" class="btn btn-light btn-sm btn-outline-danger " style="font-size: 18; " "> - </button>
        </div>
        </div>
      </div>
      `
    });
  
  
    allProduct.innerHTML = cartProducts;
   
  let productPrices =  products.map((item)=>  parseInt(item.price));


   let totalPrices = products.length <1 ? 0 :productPrices.reduce((total , item)=> total + item);

   totalPriceH2.innerHTML = "Totale Price: "+ totalPrices;
  }

  let items =  JSON.parse(producutsInCart);
  
  function removeFromCart(id){

     items.splice(items.findIndex(function(i){
      return i.id === id;
  }), 1);
      
        localStorage.setItem("ProductsInCart",JSON.stringify(items))

        drawProductInCart(items)
  }

 
  let addedItems2 = producutsInCart ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];


  function addNewProductsToCart(id) {
    addToCart(id);
  }

  let cartsProductDiv2 = document.querySelector(".cart_products div");
  let badge2 = document.querySelector(".badge");
  function addToCart(id) {
    let chosenItem = items.find((item) => item.id == id);
    if (chosenItem.id == id) {
      cartsProductDiv2.innerHTML = `
      <p>
       <div class="badgeItems">
       <span>${chosenItem.title} </span>
       <span>${chosenItem.count}</span>
       <button type="button" onclick="addNewProductsToCart(${chosenItem.id})" class="btn btn-light btn-sm btn-outline-primary " style="font-size: 18; ">+</button>
       <button type="button" onclick="removeNewProductsToCart(${chosenItem.id})" class="btn btn-light btn-sm btn-outline-danger " style="font-size: 18; " "> - </button>
       </div>
      </p>
      `;
    } else {
      cartsProductDiv2.innerHTML += `
      <p>
       <div class="badgeItems">
       <span>${chosenItem.title} </span>
       <span>${chosenItem.count}</span>
       <button type="button" onclick="addNewProductsToCart(${chosenItem.id})" class="btn btn-light btn-sm btn-outline-primary " style="font-size: 18; ">+</button>
       <button type="button" onclick="removeNewProductsToCart(${chosenItem.id})" class="btn btn-light btn-sm btn-outline-danger " style="font-size: 18; " "> - </button>
       </div>
      </p>
      `;
    }

    addedItems2 = [...addedItems2, chosenItem];
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItems2));

    let cartProductsDivLength = document.querySelectorAll(
      ".cart_products div p"
    );
    badge2.style.display = "block";
    badge2.innerHTML = cartProductsDivLength.length;

    chosenItem.count += 1;
    drawProductInCart(addedItems2)
  }

  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  

  function drawFavorites(products){
    let y = products.map((item)=>{
      return  `
      <div class="card container m-5" style="width: 20rem;">
      <img src="${item.imageUrl}" class="card-img mt-2 product_img" alt="...">
      <div class="card-body">
        <h4 class="card-title" id="productTitle">Product: ${item.title} </h4>
        <div class="d-flex justify-content-between mt-4">
        <h5 class="card-text" id="productCategory">Category: ${item.category} </h5>
          <i onclick="removeFromFavorites(${item.id})" class="fas fa-heart mt-1" style="color: red; ; font-size: 24;" id="heartIcon"></i>
        </div>
      </div>
    </div>
    `
     })

     allFavorite.innerHTML = y;

  }


   let favoriteItems = JSON.parse(favoriteProducts);
  function removeFromFavorites(id){
    favoriteItems.splice(favoriteItems.findIndex(function(i){
      return i.id === id;
  }), 1);

        localStorage.setItem("FavoriteProducts",JSON.stringify(favoriteItems))
        localStorage.setItem("isFavorite",false);
        drawFavorites(favoriteItems)
  }

  
