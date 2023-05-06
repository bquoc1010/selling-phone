import { fetchApi } from "./fetchApi.js";
import { API_PRODUCTS } from "./constant.js";
import { params } from "./variables.js";
const products = document.querySelector("#products")
export const drawProduct = () => {
    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }
    const api = `${API_PRODUCTS}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                //console.log(item)
                return `
                    <div class="products__item">
                    <div class="products__image">
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <div class="products__percent">
                        ${item.discountPercentage}%
                        </div>
                    </div>
                    <div class="products__content">
                        <h3 class="products__title">${item.title}</h3>
                        <div class="products__meta">
                            <div class="products__price ">${item.price}$</div>
                            <div class="products__stock">Còn lại: ${item.stock} sp</div>
                        </div>
                    </div>
                </div>
            
            `;
            })
            products.innerHTML = htmls.join('');
        });

}