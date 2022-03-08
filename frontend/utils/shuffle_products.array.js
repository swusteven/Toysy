export const shuffleArray = (productsArray, length) => {
  let currentIndex = productsArray.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [productsArray[currentIndex], productsArray[randomIndex]] = [
      productsArray[randomIndex], productsArray[currentIndex]];
  }

  return productsArray.slice(0,length)
}
