import md5 from "md5";

let users = [];

export function cadastro(body) {
  console.log(body);
  const user = users.find(({ email }) => email === body.email);
  if (user) throw new Error("Usuário já cadastrado");

  if (!body.password) {
    throw new Error("Senha não informada");
  }

  if (!body.email) {
    throw new Error("Email não informado");
  }
  const hashedPassword = md5(body.password);
  const newUser = { ...body, password: hashedPassword };
  users.push(newUser);
  return "Usuário Cadastrado com sucesso!";
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email);
  if (!user) throw new Error("Usuário não encontrado");

  const hashedPassword = md5(body.password);
  if (user.password !== hashedPassword) throw new Error("Senha incorreta");
}
