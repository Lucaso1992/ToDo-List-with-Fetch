export const get = (user) => {
  return fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));
};
