export const getLocalData = (lsKey, key, defaultValue = 0) => {
  const localData = JSON.parse(localStorage.getItem(lsKey));
  return localData ? localData[key] || localData : defaultValue;
};
