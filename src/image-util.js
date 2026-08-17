function getImageURL(name) {
    const url =new URL(`./assets/app/${name}.svg`, import.meta.url).href;
   
    
  return url;
}

export { getImageURL };
