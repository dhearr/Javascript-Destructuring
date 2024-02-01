// ==========================================================================================================
// // DESCTRUCTURING VARIABLE / ASSIGMENT
// // DESTRUCTURING ARRAY
// const angka = ["satu", "dua", "tiga"];
// // const [a, , c] = angka; // SKIPPING ITEMS
// const [a, b, c] = angka;
// console.log(a); // "satu"
// console.log(b); // "dua"
// console.log(c); // "tiga"

// // SWAP ITEMS
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // RETURN VALUE PADA FUNCTION
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

// // REST PARAMETER
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// // DESTRUCTURING OBJECT
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
// };
// const { nama, umur, email } = mhs;
// console.log(nama); // "dhea ramdani"
// console.log(umur); // "24"
// console.log(email); // "dhearr27@gmail.com"

// // ASSIGMENT TANPA DEKLARASI OBJECT
// ({ nama, umur, email } = {
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
// });
// console.log(nama); // "dhea ramdani"
// console.log(umur); // "24"
// console.log(email); // "dhearr27@gmail.com"

// // ASSIGN KE VARIABLE BARU
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
// };
// const { nama: a, umur: u, email: e } = mhs;
// console.log(a); // "dhea ramdani"
// console.log(u); // "24"
// console.log(e); // "dhearr27@gmail.com"

// // MEMBERI DEFAULT VALUE
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   //   email: "dhearr27@gmail.com",
// };
// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(nama); // "dhea ramdani"
// console.log(umur); // "24"
// console.log(email); // "dhearr27@gmail.com" / "email@default.com"

// // MEMBERI DEFAULT VALUE DAN ASSIGN KE VARIABLE BARU
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   //   email: "dhearr27@gmail.com",
// };
// const { nama: a, umur: u, email: e = "email@default.com" } = mhs;
// console.log(a); // "dhea ramdani"
// console.log(u); // "24"
// console.log(e); // "dhearr27@gmail.com" /  "email@default.com"

// // REST PARAMETER
// const mhs = {
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
// };
// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);

// // MENGAMBIL FIELD PADA OBJECT, SETELAH DIKIRIM SEBAGAI PARAMETER UNTUK FUNCTION
// const mhs = {
//   id: 127,
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
// };

// function getIdMhs({ id }) {
//   return id;
// }
// console.log(getIdMhs(mhs));

// // DESTRUCTURING FUNCTION RETURN VALUE
// // ARRAY
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(kali);

// // OBJECT
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { tambah, kurang, kali, bagi } = kalkulasi(2, 3);
// console.log(kurang);

// // DESTRUCTURING FUNCTION ARGUMENTS
// const mhs1 = {
//   id: 127,
//   nama: "dhea ramdani",
//   umur: 24,
//   email: "dhearr27@gmail.com",
//   nilai: {
//     tugas: 90,
//     uts: 87,
//     uas: 85,
//   },
// };

// function cetakMahasiswa({ nama, umur, nilai: { tugas, uts, uas } }) {
//   return `Halo nama saya ${nama}, saya berumur ${umur}, dan nilai tugas uts saya adalah ${uts}`;
// }
// console.log(cetakMahasiswa(mhs1));
// ==========================================================================================================
