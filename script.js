// this function generates a random option for the throw
const randomThrow = () => Math.floor(Math.random() * 2);

// these functions perform the results for the coins throw
const coin1 = () => {
  if (randomThrow() === 0) return "Tail";
  else return "Head";
};

const coin2 = () => {
  if (randomThrow() === 0) return "Tail";
  else return "Head";
};

// count throws and print them
const letsPlay = () => {
  let headHead = 0;
  let tailTail = 0;
  let headTail = 0;
  for (let i = 0; i < 100; i++) {
    if (coin1() === "Head" && coin2() === "Head") {
      headHead++;
    } else if (coin1() === "Tail" && coin2() === "Tail") {
      tailTail++;
    } else {
      headTail++;
    }
  }
  console.log(`
  Head & Head: ${headHead}
  Tail & Tail: ${tailTail}
  Mix: ${headTail}
  `);
};

letsPlay();