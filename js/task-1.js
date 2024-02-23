const listCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategoriesEl.length}`);

listCategoriesEl.forEach(el => console.log(`Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`));


