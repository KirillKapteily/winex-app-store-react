import apps from "../data/apps.json";

export const getApps = () => {
  return apps;
};

export const getAppId = (appId) => {
  return apps.find((app) => app.id === appId);
};

export const searchForApps = (query) => {
  let search = apps.filter((app) =>
    app.title.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(search);
  return search;
};

export const filterApps = (filter) => {
  if (filter === "all") {
    return apps;
  } else {
    let fill = apps.filter((app) => app.type === filter);
    return fill;
  }
};
