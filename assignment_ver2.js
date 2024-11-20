const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const product = [];
async function main() {
  try {
    while (true) {
      const input = await new Promise((resolve, reject) => {
        rl.question(`กรุณาพิมพ์คำสั่ง(add,delete,close): `, resolve);
      });
      if (input === "add") {
        const itemId = await new Promise((resolve, reject) => {
          rl.question(`รหัสสินค้า(ต้องไม่ซ้ำกัน): `, resolve);
        });
        if (product.map((productId) => productId.id).includes(itemId)) {
          console.log("สินค้ามีในระบบแล้ว กรุณกรอกรหัสใหม่");
        } else {
          const itemName = await new Promise((resolve, reject) => {
            rl.question(`ชื่อสินค้า: `, resolve);
          });
          const itemPrice = await new Promise((resolve, reject) => {
            rl.question(`ราคาสินค้า: `, resolve);
          });
          const price = Number(itemPrice);
          if (isNaN(price)) {
            console.log("เพิ่มสินค้าไม่สำเร็จ: กรุณาใส่ข้อมูลที่ถูกต้อง");
          } else {
            product.push({
              id: itemId,
              name: itemName,
              price: price,
            });
            console.log("เพิ่มสินค้าสำเร็จ");
            console.table(product);
          }
        }
      } else if (input === "delete") {
        const deleteName = await new Promise((resolve, reject) => {
          rl.question(`ชื่อสินค้า: `, resolve);
        });
        if (product.map((productId) => productId.name).includes(deleteName)) {
          const indexItem = product.findIndex((i) => i.name === deleteName);
          product.splice(indexItem, 1);
          console.log("ลบสินค้าเรียบร้อย!");
          console.table(product);
        } else {
          console.log("ลบสินค้าไม่สำเร็จ: ไม่พบชื่อสินค้านี้ในระบบ");
        }
      } else if (input === "close") {
        console.log("จบการทำงาน");
        break;
      } else {
        console.log("คำสั่งไม่ถูกต้อง");
      }
    }
    rl.close();
  } catch (error) {
    console.log({ error });
  }
}
main();
