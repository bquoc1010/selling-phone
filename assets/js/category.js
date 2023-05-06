import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
//get category

fetchApi(API_CATEGORY)
    .then(data => {
        console.log(data);
        let htmls = data.map(item => {
            return `
                 <div class="category-item" data__category="${item}">${item}</div>
        `;
        });

        //console.log(htmls.join());
        const categories = document.querySelector("#category");
        categories.innerHTML = htmls.join('');
        const listCategory = document.querySelectorAll("#category .category__item");
        listCategory.forEach(item=>{
            item.addEventListener("click", function(){
                params.category = item.getAttribute("data__category");
                drawProduct();
            });
        })
    })
   //end category