export default function aleatoryNumber(number) {
  let array = Array.from(Array(number), (x, i) => i + 1),
      aleatoryNumber = array.sort(() => Math.random() > 0.5 ? 1 : -1);
  
  return aleatoryNumber[0];
}
