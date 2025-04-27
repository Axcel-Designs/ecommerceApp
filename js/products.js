const productList = document.getElementById("productList");

async function getData(url) {
  const data = await fetch(url);
  const response = await data.json();

//   response.productforEach((product) => {
      response.products.forEach((product) => {
        console.log(product);
        
    // const productCell = document.createElement("div");
    // productCell.className = "productCell";

    // const productTitle = document.createElement("h2");
    // productTitle.textContent = product.title;

    // const productPrice = document.createElement("h2");
    // productPrice.textContent = product.price;

    // const productDescription = document.createElement("h2");
    // productDescription.textContent = product.description;

    // const productImage = document.createElement("img");
    // productImage.src = product.image;
    // productImage.className = "productImage";
    // productImage.style.width = "100%";
    // productImage.alt = product.title;

    // const productCategory = document.createElement("h2");
    // productCategory.textContent = product.category;
    // productCategory.className = "productCategory";

    // productCell.append(
    //   productImage,
    //   productTitle,
    //   productCategory,
    //   productPrice,
    // //   productDescription,
    // );
    // productList.append(productCell);
    productList.innerHTML += `        
        <div class="productCell">
          <img src="${product.thumbnail}" alt="${product.title}" class="productImage" width='100%' />
          <details>
            <summary><h4 class="productTitle">${product.title}</h4></summary>
            <p class="description">${product.description.length > 50 ? product.description.substring(0, 50) + '...' : product.description}</p>
          </details>
          <p class="category">Category: ${product.category}</p>
          <div class='productPriceContainer'>
           <p class="price">Price: N${product.price}</p>
           <button class="addtocart">Add to Cart</button>
          </div>
        </div>`;
  });
}
// getData("https://fakestoreapi.com/products");
getData("https://dummyjson.com/products");
