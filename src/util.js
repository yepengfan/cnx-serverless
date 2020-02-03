export default class Util {
  static roll() {
    const random = Math.random();
    return (random > 0.9 || random < 0.1);
  } 
}
