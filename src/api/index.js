const API_BASE = 'https://randomuser.me/api/';


export const getUsers = ({results=10, page=1}) => {
  return  fetch(`${API_BASE}?seed=fd2022&page=${page}&results=${results}`)
.then((response) => response.json())
}