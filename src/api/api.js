import apps from "../data/apps.json";
import slides from "../data/slider.json";

export const getApps = () => {
  return apps.filter((app) => app.downloadLinks?.os);
};

export const getSlider = () => {
  return slides;
};

export const getSlideId = (slideId) => {
  //let slideInfo = slide.find((s) => s.slideId == slideId)
   
  let debug = slides.find((slide) => slide.slideID === slideId);
  console.log(debug);
  return debug;
  
};

export const getAppId = (appId) => {
  return apps.find((app) => app.id === appId);
};

export const searchForApps = (query, os, filter) => {

console.log("SEARCH DEBUG!!!!!!" , query, os, filter);

  if (filter === "all") {
     let search = apps.filter((app) =>
    app.title.toLowerCase().includes(query.toLowerCase())&& app.operatingSystems?.includes(os)
  );
  console.log(search);
  return search;
  } else {
  

  let search = apps.filter((app) =>
    app.title.toLowerCase().includes(query.toLowerCase()) && app.type === filter && app.operatingSystems?.includes(os),
  );
  console.log(search);
  return search;
  }
};

export const filterApps = (filter, os) => {
  if (filter === "all") {
    console.log("OS!!!", os);
    console.log("os debug!!!!", apps);
    
   let fill = apps.filter((app) => app.operatingSystems?.includes(os));
     return fill;
  } else {
    let fill = apps.filter((app) => app.type === filter && app.operatingSystems?.includes(os));
    return fill;
  }
};
