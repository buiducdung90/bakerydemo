let list = document.querySelectorAll('.products_top .card__product-top')
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            let newItem = item.cloneNode(true)
            let productImg = newItem.querySelector('img').src ;
            let productName = newItem.querySelector('h3').innerText ;
            let productPrice = newItem.querySelector('.card__price span').innerText ;
            addcart(productImg,productName,productPrice)
        }
        function addcart(productImg,productName,productPrice){
            let addtr = document.createElement("tr")
            let trcontent = '<tr> <th scope="row">1</th> <td scope="col col-sm-2"><img src="./img/chef/01-1.jpg"  width= 50 alt=""></td> <td scope="col col-sm-2"><span class ="title_productname">productName</span></td><td scope="col col-sm-2" ><span class = "products">productPrice</span></td><td scope="col col-sm-2" ><input type="number" value="1" min="0"></td> <td class ="cart_delete col col-sm-2">xóa</td> </tr>'
            let cardTable = document.querySelector('tbody')
            addtr.innerHTML = trcontent
            cardTable.append(addtr)
            let count = productPrice.length
            console.log(count)
        }










    })
})