export const deleteAll = (user) => {
  return fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error)); 
};
