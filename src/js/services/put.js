export const put = (user, todos) => {
  return fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console(res);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};
