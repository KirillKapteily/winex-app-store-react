import apps from "../data/apps.json";
import slides from "../data/slider.json";

export const getApps = () => {
  return apps.filter((app) => app.downloadLinks?.os);
};

export const getSlider = () => {
  return slides;
};

export const getSlideId = (slideId) => {
  let debug = slides.find((slide) => slide.slideID === slideId);
  return debug;
};

export const getAppId = (appId) => {
  return apps.find((app) => app.id === appId);
};

export const searchForApps = (query, os, filter) => {
  if (filter === "all") {
    let search = apps.filter(
      (app) =>
        app.title.toLowerCase().includes(query.toLowerCase()) &&
        app.operatingSystems?.includes(os),
    );

    return search;
  } else {
    let search = apps.filter(
      (app) =>
        app.title.toLowerCase().includes(query.toLowerCase()) &&
        app.type === filter &&
        app.operatingSystems?.includes(os),
    );

    return search;
  }
};

export const filterApps = (filter, os) => {
  if (filter === "all") {
    let fill = apps.filter((app) => app.operatingSystems?.includes(os));
    return fill;
  } else {
    let fill = apps.filter(
      (app) => app.type === filter && app.operatingSystems?.includes(os),
    );
    return fill;
  }
};
