export function saveToLocal(state,item){
  localStorage.removeItem(item);
  localStorage.setItem(item, JSON.stringify(state[item]));
}
export function removeFromLocal(item){
    localStorage.removeItem(item);
}