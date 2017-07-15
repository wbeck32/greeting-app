function greeter(name) {
  let gr = '';
  name ?
    gr = `Hello ${name}!` : gr = 'Hello stranger!';
  return gr;
}

module.exports = greeter;
