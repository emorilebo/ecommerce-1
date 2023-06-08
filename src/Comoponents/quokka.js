const random = Math.floor(Math.random() * 6) + 1;
console.log(random);
const display = console.log;

switch (random) {
  case 1:
    display(2);
    break;
  case 2:
    display(4);
    break;
  default:
    display(6);
    break;
}
