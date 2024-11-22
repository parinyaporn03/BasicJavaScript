const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const product = [];
function addItem() {
  rl.question("รหัสสินค้า(ต้องไม่ซ้ำกัน): ", (id) => {
    if (product.map((productId) => productId.id).includes(id)) {
      console.log("รหัสต้องไม่ซ้ำกัน");
      recursiveQuestion();
    } else {
      rl.question("ชื่อสินค้า: ", (name) => {
        rl.question("ราคาสินค้า: ", (price) => {
          const itemPrice = Number(price);
          if (isNaN(itemPrice)) {
            console.log("เพิ่มสินค้าไม่สำเร็จ: กรุณาใส่ข้อมูลที่ถูกต้อง");
            recursiveQuestion();
          } else {
            product.push({
              id: id,
              name: name,
              price: itemPrice,
            });
            console.log("เพิ่มสินค้าเรียบร้อย!");
            console.log("+--------------------------------+");
            console.table(product);
            console.log("+--------------------------------+");
            recursiveQuestion();
          }
        });
      });
    }
  });
}
function deleteItem() {
  rl.question("กรุณาใส่ชื่อสินค้า: ", (name) => {
    if (product.map((productId) => productId.name).includes(name)) {
      const indexItem = product.findIndex((i) => i.name === name);
      product.splice(indexItem, 1);
      console.log("ลบสินค้าเรียบร้อย!");
      console.log("+--------------------------------+");
      console.table(product);
      console.log("+--------------------------------+");
      recursiveQuestion();
    } else {
      console.log("ลบสินค้าไม่สำเร็จ: ไม่พบชื่อสินค้านี้ในระบบ");
      recursiveQuestion();
    }
  });
}
function recursiveQuestion() {
  rl.question("กรุณาพิมพ์คำสั่ง(add,delete,close):  ", function (answer) {
    if (answer === "add") {
      addItem();
    } else if (answer === "delete") {
      deleteItem();
    } else if (answer === "close") {
      console.log("จบการทำงาน");
      return rl.close();
    } else {
      console.log("คำสั่งไม่ถูกต้อง");
    }
    recursiveQuestion();
  });
}
recursiveQuestion();
