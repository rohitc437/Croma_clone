let count=0
const phones = [
    {
      name: "OnePlus Nord CE 5G (128GB ROM, 8GB RAM, Charcoal Ink)",
      price: 24999,
      image: "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_350,w_350/v1623389338/Croma%20Assets/Communication/Mobiles/Images/235151_j94pg0.png",
    },
];

const phones_json = JSON.stringify(phones);

  //step 3 - Store above data in localstorage

  localStorage.setItem("myPhones", phones_json);

  //Step 4 - Display on webpage

  let myPhones = localStorage.getItem("myPhones");

  //Step 4.1 - convert into operatable format, object!

  myPhones = JSON.parse(myPhones);

  function showProducts() {
    let name_div = document.getElementById("name");
    let price_div = document.getElementById("price");
    let image_div = document.getElementById("image");
    let cart_btn = document.getElementById("cart_btn");
    myPhones.forEach(function (product) {


      name_div.innerText = product.name;


      price_div.innerText =   product.price;


      image_div.src = product.image;


      cart_btn.onclick = function() {
          addtocart(product);
      }


    });
  }
  var cart_value = document.getElementById("cart_value");
  showProducts();
  

  if(localStorage.getItem('new_cart') === null){
  localStorage.setItem('new_cart',JSON.stringify([]));
  }

  function addtocart(prod){
      count=count+1;
    cart_value.innerHTML=count;
    let cart_data1 = JSON.parse(localStorage.getItem('new_cart'));
    
    cart_data1.push(prod)
    //console.log(cart_data1)

    localStorage.setItem('new_cart', JSON.stringify(cart_data1));
  }
  