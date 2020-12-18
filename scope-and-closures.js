var engine = {
  maker: 'Ford',
  headGasket: {
    pots: ['piston1', 'piston2'],
  },
};

function runExpression() {
  var a = 10;

  function add() {
    return a + 90;
  }

  return add();
}

console.log(runExpression());
console.log(engine.headGasket.pots);
