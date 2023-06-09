export const post = (user) => {
  return fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify([]),
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
