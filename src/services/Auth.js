import { connect } from "./Connect";

export function signin(usuario, senha) {
  return connect
    .get("")
    .then((resolve) => {
      setTimeout(() => {
        resolve({
          token: "sdkfngjqgnkl",
          user: {
            name: "teste",
            email: "teste@gmail.com",
          },
        });
      }, 2000);
    })
    .catch((error) => {});
}
