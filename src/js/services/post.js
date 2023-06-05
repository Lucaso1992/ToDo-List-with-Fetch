export const post = (user) => {
  return fetch(`http://assets.breatheco.de/apis/fake/todos/user/${user}`, {
    method: "POST",
    headers: {
      "Content-type": "aplication/json",
    },
    body: JSON.stringify([]),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
};
