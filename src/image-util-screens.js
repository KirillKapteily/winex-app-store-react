function getScreenImageURL(name) {
    const url =new URL(`./assets/appsscreens/${name}.webp`, import.meta.url).href;
   
    
  return url;
}

export { getScreenImageURL };
