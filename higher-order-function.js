function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
