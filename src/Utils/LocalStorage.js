//! get data to local storage

export const localInstallApps = () => {
  try {
    const data = localStorage.getItem("installApps");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// ! save data local storage

export const localUpdateApps = (product) => {
  const installApp = localInstallApps();

  try {
    const isDuplicateInstallApps = installApp.some(
      (app) => app.id === product.id
    );
    if (isDuplicateInstallApps) {
      return alert("Already install this app");
    }

    const updateLocalInstallApps = [...installApp, product];
    localStorage.setItem("installApps", JSON.stringify(updateLocalInstallApps));
  } catch (error) {
    console.log(error);
  }
};

// ! delete data local storage

export const removeLocalStorageInstallApp = (id) => {
  const installApp = localInstallApps();

  try {
    const updateLocalInstallApps = installApp.filter((app) => app.id !== id);
    localStorage.setItem("installApps", JSON.stringify(updateLocalInstallApps));
  } catch (error) {
    console.log(error);
  }
};
