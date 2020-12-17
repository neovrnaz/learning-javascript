function f1(a) {
  let b = 2;
  setTimeout(() => {
    console.log(a, b);
  }, 1000);
}

// Challenge
function f2() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

// Solution 1
function f2() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

// Solution 2
function f3() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (x => {
        console.log(x);
      }).bind(this, i),
      1000 * i
    );
  }
}

// f1();
// f2();
f3();
