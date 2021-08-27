    var data_div = document.getElementById('data');
    var cart_data = JSON.parse(localStorage.getItem('new_cart'));
    //console.log(data_div);
    var total=0;

    cart_data.forEach(function(product){
        let div =document.createElement('div');
        div.setAttribute('class','div')
        let new_div = document.createElement('div');
        new_div.setAttribute('class','new_div')
        let p_name = document.createElement('p');
        p_name.innerHTML=product.name;

        let p_price = document.createElement('p');
        p_price.innerHTML=product.price;

        let img = document.createElement('img');
        img.src = product.image;
        new_div.append(p_name,p_price)
        div.append(img,new_div);
        data_div.append(div)
        total=total+ Number(product.price);
    })

    let total_h1 = document.getElementById('total') 
    total_h1.innerHTML = `Total Price = ${total}`;
    var new_total =JSON.stringify(localStorage.setItem('new_total',total));
   // document.body.appendChild(total)
    //console.log(total)

   