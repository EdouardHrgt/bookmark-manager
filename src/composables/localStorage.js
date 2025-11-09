export function saveStorage(key, data) {
  if (!key || !data) {
    console.error("Error saving datas in Storage");
    return;
  }
  console.log(data);
  const label = key.toUpperCase();
  localStorage.setItem(label, data);
}

export function getStorage(key) {
  if (key) {
    const label = key.toUpperCase();
    return localStorage.getItem(label);
  }
  console.error("Error collecting datas in Storage");
}
