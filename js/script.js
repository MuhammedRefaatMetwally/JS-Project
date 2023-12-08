let userInfo = document.querySelector("#user_info");

let userData = document.querySelector("#user");

let links = document.querySelector("#links");

let logoutBtn = document.querySelector("#logout");
if (localStorage.getItem("firstName")) {
  links.remove();
  userInfo.style.display = "flex";
  userData.innerHTML = "Welcome  " + localStorage.getItem("firstName");
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
});
///////////////////////////////////////////////////////////////////////

let allProduct = document.querySelector(".products");

let products = [
  {
    id: 1,
    title: "Mac Laptop",
    price: "20000",
    imageUrl: "/images/laptop2.jpg",
    category: "Electronics",
    count: 1,  
  },

  {
    id: 2,
    title: "Apple Watch",
    price: "25000",
    imageUrl: "/images/watch2.jpg",
    category: "Electronics",
    count: 1,   
  },

  {
    id: 3,
    title: "EarPods",
    price: "3000",
    imageUrl: "/images/earPods1.jpg",
    category: "Electronics",
    count: 1,    
  },

  {
    id: 4,
    title: "Iphone 14pro MAx",
    price: "34000",
    imageUrl: "/images/mobile1.jpg",
    category: "Electronics",
    count: 1, 
  },

  {
    id: 5,
    title: "T-shirt Sport1",
    imageUrl: "/images/sport1.jpg",
    price: "200",
    category: "Sports",
    count: 1,  
  },

  {
    id: 6,
    imageUrl: "/images/sport2.jpg",
    title: "T-shirt Sport2",
    price: "150",
    category: "Sports",
    count: 1,    
  },

  {
    id: 7,
    title: "Apple Watch3",
    imageUrl: "/images/watch3.jpg",
    price: "6000",
    category: "Electronics",
    count: 1  ,
  },

  {
    id: 8,
    title: "Watch2",
    price: "10000",
    imageUrl: "/images/watch1.jpg",
    category: "Electronics",
    count: 1,    
  },
  {
    id: 9,
    title: "Tv1",
    price: "5000",
    imageUrl: "/images/tv1.jpg",
    category: "Electronics",
    count: 1,    
  },
  {
    id: 10,
    title: "Tv2",
    price: "20000",
    imageUrl: "/images/tv2.jpg",
    category: "Electronics",
    count: 1,    
  },
  {
    id: 11,
    title: "EarPods2",
    price: "7000",
    imageUrl: "/images/earpods2.jpg",
    category: "Electronics",
    count: 1,
    },
  {
    id: 12,
    title: "Mobile2",
    price: "7800",
    imageUrl: "/images/mobile2.jpg",
    category: "Electronics",
    count: 1,
  },
];

function drawProducts(products) {
  let prod = products.map((item) => {
    return `
      <div class="productCard card container m-5" style="width: 20rem;">
      <img src="${item.imageUrl}" class="card-img mt-2 product_img" alt="...">
      <div class="card-body">
        <h4 class="card-title" id="productTitle">Product: ${item.title} </h4>
        <h5 class="card-text" id="productPrice">Price: ${item.price}  </h5>
        <h5 class="card-text" id="productCategory">Category: ${item.category} </h5>
        <div class="d-flex justify-content-between mt-4">
          <button type="button" onclick="addToCart(${item.id})" class="btn btn-primary addToCartBtn" id="addToCartBtn">Add To Cart</button>
          <i onclick="addToFavorites(${item.id})" class="fas fa-heart " style="color: grey; font-size: 24;" id="heartIcon"></i>
        </div>
      </div>
    </div>
    `;
  });

  allProduct.innerHTML = prod;
}

drawProducts(products);

let cartsProductDiv = document.querySelector(".cart_products div");
let badge = document.querySelector(".badge");

let addedItems = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

if (addedItems) {
  addedItems.map((item) => {
    cartsProductDiv.innerHTML += `
    <p>
     <div class="badgeItems">
     <span>${item.title} </span>
     <span>${item.count}</span>
     <button type="button" onclick="addNewProductsToCart(${item.id})" class="btn btn-light btn-sm btn-outline-primary " style="font-size: 18; ">+</button>
     <button type="button" onclick="removeNewProductsToCart(${item.id})" class="btn btn-light btn-sm btn-outline-danger " style="font-size: 18; " "> - </button>
     </div>
    </p>
    `;
  });

  badge.style.display = "block";
  badge.innerHTML = addedItems.length;
}

let addToCartBtn = document.getElementById("addToCartBtn");
let heartIcon = document.getElementById("heartIcon");

if (localStorage.getItem("firstName")) {
  function addToCart(id) {
    let chosenItem = products.find((item) => item.id == id);
    if (chosenItem.id == id) {
      cartsProductDiv.innerHTML = `
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
      cartsProductDiv.innerHTML += `
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

    addedItems = [...addedItems, chosenItem];
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItems));

    let cartProductsDivLength = document.querySelectorAll(
      ".cart_products div p"
    );
    badge.style.display = "block";
    badge.innerHTML = cartProductsDivLength.length;

    chosenItem.count += 1;

    cards.forEach((card, I) => {
      card.addEventListener("click", function (e) {
        if(e.target.innerHTML= "Add To Cart"){
          e.target.style.color = "white";
          e.target.style.backgroundColor = "red"
          e.target.style.border= "none"
          e.target.innerHTML= "Remove From Cart"
        }else{
          removeNewProductsToCart(id)
        }
      });
    });

  }
} else {
  window.location = "login.html";
}

function addNewProductsToCart(id) {
  addToCart(id);
}

function removeNewProductsToCart(id) {
  if(e.target.innerHTML= "Remove From Cart"){
          e.target.style.color = "white";
          e.target.style.backgroundColor = "blue"
          e.target.style.border= "none"
          e.target.innerHTML= "Add To Cart" 
  }
  addedItems.splice(
    addedItems.findIndex(function (i) {
      return i.id === id;
    }),
    1
  );

  localStorage.setItem("ProductsInCart", JSON.stringify(addedItems));

  let cartProductsDivLength = document.querySelectorAll(".cart_products div p");
  badge.style.display = "block";
  badge.innerHTML = cartProductsDivLength.length;

  chosenItem.count -= 1;
}



let favoriteProducts = localStorage.getItem("FavoriteProducts")
  ? JSON.parse(localStorage.getItem("FavoriteProducts"))
  : [];

const cards = document.querySelectorAll(".productCard");

function addToFavorites(id) {
  let chosenItem = products.find((item) => item.id == id);
  // console.log(chosenItem);
  chosenItem.isFavorite = true;

  favoriteProducts = [...favoriteProducts, chosenItem];
  localStorage.setItem("FavoriteProducts", JSON.stringify(favoriteProducts));

  cards.forEach((card, I) => {
    card.addEventListener("click", function (e) {
      if (chosenItem.isFavorite) {
        e.target.style.color = "red";
        chosenItem.isFavorite = false;
      } else {
        e.target.style.color = "gray";
        chosenItem.isFavorite = true;
      }
    });
  });

}




let newsList = favoriteProducts.map((item,i2)=>{
  cards.forEach((card, i) => { 
   if( item.id ==  products[i].id){
        if(item.isFavorite){
          card.children[1].children[3].children[1].style.color ="red"
        } else{
         card.children[1].children[3].children[1].style.color ="gray"
        }
   }
})

})


  

  


let favoriteItems = JSON.parse(localStorage.getItem("FavoriteProducts"));
  function removeFromFavorites(id){
    favoriteItems.splice(favoriteItems.findIndex(function(i){
      return i.id === id;
  }), 1);

        localStorage.setItem("FavoriteProducts",JSON.stringify(favoriteItems))
        localStorage.setItem("isFavorite",false);
        drawFavorites(favoriteItems)
  }

///////////////////////////////////////////////////////////////////

let shoppingCartIcon = document.querySelector(".shopping_cart");

let cartProducts = document.querySelector(".cart_products");

shoppingCartIcon.addEventListener("click", opencart);

function opencart() {
  console.log("clicked");
  if (cartsProductDiv.innerHTML != "") {
    if (cartProducts.style.display == "block") {
      cartProducts.style.display = "none";
    } else {
      cartProducts.style.display = "block";
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

let sByName = document.querySelector(".sByName");
let sByCategory = document.querySelector(".sByCategory");
let searachInput = document.querySelector(".searchInput");

searachInput.addEventListener("change", searchByCategory);
searachInput.addEventListener("input", searchByName);

function searchByCategory() {
  let searchProducts = products.filter(
    (item) => searachInput.value == item.category.trim().toLocaleLowerCase()
  );
  if (searachInput.value != "" && sByCategory.selected) {
    drawProducts(searchProducts);
  } else {
    drawProducts(products);
  }
}

function searchByName() {
  let searchProducts = products.filter((item) =>
    searachInput.value
      .trim()
      .toLowerCase()
      .includes(item.title.toLowerCase().trim())
  );

  if (searachInput.value != "" && sByName.selected) {
    drawProducts(searchProducts);
  } else {
    drawProducts(products);
  }
}
