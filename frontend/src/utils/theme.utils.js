export const getDarkMode = () => {
  return localStorage.getItem("dark-mode") === "true";
};

export const setDarkMode = (mode) => {
  return localStorage.setItem("dark-mode", mode);
};
