const API_BASE = 'https://fakestoreapi.com';


export const getData = () => fetch(`${API_BASE}/products`)
.then((response) => response.json())
