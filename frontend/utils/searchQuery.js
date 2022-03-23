export const searchQuery =(searchValue, products) =>{
  if (!searchValue) return [];
    
  let productsInArray = Array.from(Object.values(products));
  let searchValueInArray = searchValue.split(" ");

  const results = new Set();

  productsInArray.forEach(product=>{
    let productName = product.name.toLowerCase()
    for (let i = 0; i < searchValueInArray.length; i++) {
          if (productName.includes(searchValueInArray[i].toLowerCase())){
              results.add(product)
              continue
          }
    }   
  });

  return Array.from(results)
}
