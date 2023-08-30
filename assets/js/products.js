import { drawProduct } from "./drawProduct.js";
import { pagiNext, pagiNumber, pagiPrev, params, searchButton, searchInput } from "./variables.js";

drawProduct()
// search
const search = () => {
    params.q = searchInput.value;
    drawProduct();
}
searchButton.addEventListener("click", function () {
    search()
});
searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search()
    }
});
// end search


// sort 

const filter = document.querySelector("#filter");
filter.addEventListener("change", function(e){
    console.log(e.target.value);
    switch(e.target.value){
        case "mac-dinh":
            params.sort = '';
            params.order = '';
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc";
            break;
        case "giam-gia-nhieu":
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();

});

// end sort
// pagination

pagiPrev.addEventListener("click", function(){
    if(params.page>1){
        parseInt(params.page)-=1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
});
pagiNext.addEventListener("click", function(){
    parseInt(params.page)+=1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
});


// end pagination