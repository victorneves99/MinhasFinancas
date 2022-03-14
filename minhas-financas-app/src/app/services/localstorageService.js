export default class LocalStorageService {
  static additem(chave, valor) {
    return localStorage.setItem(chave, JSON.stringify(valor));
  }

  static obetItem(chave) {
    const item = localStorage.getItem(chave);
    return JSON.parse(item);
  }
}
