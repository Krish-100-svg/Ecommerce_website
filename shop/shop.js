// Product Grid / List Toggle

const gridBtn = document.querySelector(".fa-grip");
const listBtn = document.querySelector(".fa-list");
const productGrid = document.querySelector(".product-grid");

if(gridBtn && listBtn){

gridBtn.addEventListener("click", () => {
    productGrid.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
    productGrid.classList.add("list-view");
});

}