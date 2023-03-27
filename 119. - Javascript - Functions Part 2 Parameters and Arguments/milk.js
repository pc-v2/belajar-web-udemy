//  function beliSusu(duit) {
//      // harga dalam $
//      // beberapa baris berikut adalah langkah ke toko
//      console.log("keluar rumah");
//      console.log("ambil sepeda");
//      console.log("naik sepeda");
//      console.log("jalan lurus");
//      console.log("belok kanan");
//      console.log("jalan hingga 10 meter");
//      console.log("parkir di Indomaret");
//      // beberapa baris berikut merupakan kalkulasi pembelian
//      let hargaPerBotol = 1.5
//      let sisa = duit % hargaPerBotol;
//      let pengurangan = duit - sisa;
//      let nrBotol= (pengurangan / hargaPerBotol);
//      alert = console.log("beli susu sebanyak " + nrBotol);
//      console.log("bayar");
//      console.log("keluar Indomaret");
//      console.log("ambil sepeda");
//      console.log("naik sepeda");
//      console.log("jalan hingga 10 meter");
//      console.log("belok kiri");
//      console.log("jalan lurus");
//      console.log("parkir sepeda");
//      console.log("pulang");
//  }
// beliSusu(10);

// more advanced
function beliSusu(uang) {
    // harga dalam $
    // beberapa baris berikut adalah langkah ke toko
    console.log("keluar rumah");
    console.log("ambil sepeda");
    console.log("naik sepeda");
    console.log("jalan lurus");
    console.log("belok kanan");
    console.log("jalan hingga 10 meter");
    console.log("parkir di Indomaret");
    // baris berikut merupakan kalkulasi pembelian
    var numBotol = Math.floor(uang / 1.5);
    alert = console.log("beli susu sebanyak " + numBotol);
    console.log("bayar");
    console.log("keluar Indomaret");
    console.log("ambil sepeda");
    console.log("naik sepeda");
    console.log("jalan hingga 10 meter");
    console.log("belok kiri");
    console.log("jalan lurus");
    console.log("parkir sepeda");
    console.log("pulang");
    return uang % 1.5 // mengembalikan nilai
}
beliSusu(10);

// moar moar advanced!!
function getMilk(money, costPerBottle) {
    // harga dalam Rp
    // beberapa baris berikut adalah langkah ke toko
    console.log("keluar rumah");
    console.log("ambil sepeda");
    console.log("naik sepeda");
    console.log("jalan lurus");
    console.log("belok kanan");
    console.log("jalan hingga 10 meter");
    console.log("parkir di Indomaret");
    // memanggil fungsi calcBottles
    console.log("beli susu sebanyak " + calcBottles(money, costPerBottle)); 
    console.log("bayar");
    console.log("keluar Indomaret");
    console.log("ambil sepeda");
    console.log("naik sepeda");
    console.log("jalan hingga 10 meter");
    console.log("belok kiri");
    console.log("jalan lurus");
    console.log("parkir sepeda");
    console.log("pulang");
    // mengembalikan nilai dengan fungsi calcChange
    return calcChange(money, costPerBottle);
}
function calcBottles(startingMoney, costPerBottle) {
       var numberOfBottles = Math.floor(startingMoney / costPerBottle);
   return numberOfBottles;
}

function calcChange (startingAmount, costPerBottle) {
   var change = startingAmount % costPerBottle;
   return change;
}

prompt("Mau beli berapa susu?",uang);
console.log("Dek, ini jumlah kembaliannya (Rp" + getMilk(uang, 1500) + ")");