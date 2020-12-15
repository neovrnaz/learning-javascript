this.table = 'window table';

this.garage = {
  table: 'garage table',
}

const cleanTable = function (soap) {
  let that = this;
  const innerFunction = function (_soap) {
    console.log(`Cleaning ${that.table} using ${_soap}`);
  }
  innerFunction(soap);
}

let createRoom = function (name) {
  this.table = `${name}'s room`;
}

createRoom.prototype.cleanTable = function (soap) {
  console.log(`Cleaning ${this.table} using ${soap}`);
}

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('some soap');

