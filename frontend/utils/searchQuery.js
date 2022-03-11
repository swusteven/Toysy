export const searchQuery =(searchValue, products) =>{
  if (!searchValue){
    return []
  }

  let productsInArray = Array.from(Object.values(products));
  let searchValueInArray = searchValue.split(" ");

  let results = [];

  productsInArray.forEach(product=>{
    let productName = product.name.toLowerCase()
    for (let i = 0; i < searchValueInArray.length; i++) {
          if (productName.includes(searchValueInArray[i].toLowerCase())){
              results.push(product)
            continue
          }
    }   
  });

  if (results.length === 0 ) return [];

  let visited = [];
  let finalResults = [];
  
 for (let i = 0; i < results.length; i++) {
    if (!visited.includes(results[i].id)){
      finalResults.push(results[i])
    }   
 }

  return finalResults

}
