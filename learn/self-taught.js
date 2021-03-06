// // Membuat sebuah object
// let person = {
//   nama: "Muhamad Aziz",
//   umur: 22,
//   verifikasi: true,
// };
// console.log(person);
// console.log(person.nama);
// console.log(person.umur);
// console.log(person.verifikasi);

// // Memanggil object dengan Bracket Notation
// let orang = {
//   nama: "Ironman",
//   umur: 40,
//   "alamat sekarang": "Jakarta, Indonesia",
// };
// console.log(orang["nama"]);
// console.log(orang["umur"]);
// console.log(orang["alamat sekarang"]);

// // Update sebuah object
// let profesi = {
//   keamanan: "Polisi",
//   insinyur: "teknik mesin",
//   teknologi: "pemrograman",
// };
// profesi.keamanan = "Tentara";
// profesi.kesehatan = "Dokter";
// console.log(profesi);

// // update semua data
// let keahlian = {
//   keamanan: "Polisi",
//   insinyur: "teknik mesin",
//   teknologi: "pemrograman",
// };

// keahlian = {
//   profesiSaya: "Software Engineer",
// };
// console.log(keahlian);

// // Menghapus Sebuah Object
// let keahlian = {
//   keamanan: "Polisi",
//   insinyur: "teknik mesin",
//   teknologi: "pemrograman",
// };

// delete keahlian.keamanan;q
// console.log(keahlian);

// // METHOD
// const ucapan = {
//   pagi: function () {
//     return "Halo, Selamat Pagi!";
//   },
//   siang: function () {
//     return "Halo, Selamat Siang!";
//   },
//   malam: function () {
//     return "Halo, Selamat Malam !";
//   },
// };

// console.log(ucapan.pagi());

// NESTED OBJECT
// const muhamadAziz = {
//   pekerjaan: "Software Engineer",
//   lokasi: "Jakarta, Indonssia",
//   pengalaman: {
//     pendidikan: {
//       pati: "SMPN 6 Pati",
//       yogyakarta: "Universitas Terbuka",
//     },
//   },
// };
// console.log("Pekerjaannya adalah", muhamadAziz.pekerjaan);
// console.log("Tinggal di", muhamadAziz.lokasi);
// console.log("Pernah belajar di ", muhamadAziz.pengalaman.pendidikan.yogyakarta);

// // Mengubah data object dengan function
// let nomor = {
//   nomorSatu: 11,
//   nomorDua: 20,
//   nomorTiga: 7,
// };
// function gantiNomor(benda) {
//   benda.nomorSatu = 10;
//   benda.nomorDua = 46;
//   benda.nomorTiga = 76;
// }
// gantiNomor(nomor);
// console.log(nomor.nomorSatu);
// console.log(nomor.nomorDua);
// console.log(nomor.nomorTiga);

// // Looping Pada Object
// const muhamadAziz = {
//   pekerjaan: "Software Engineer",
//   lokasi: "Jakarta, Indonssia",
//   pengalaman: {
//     pendidikan: {
//       pati: "SMPN 6 Pati",
//       yogyakarta: "Universitas Terbuka",
//     },
//   },
// };

// for (let data in muhamadAziz) {
//   console.log(muhamadAziz[data]);
// }

// for (let pendidikan in muhamadAziz.pengalaman.pendidikan) {
//   console.log(muhamadAziz.pengalaman.pendidikan[pendidikan]);
// }

// Array of object

let buah = [
  {
    nama: "Apple",
    warna: "hijau",
    namaLatin: "Malus sylvestris",
    tipeBiji: "single seed",
  },
  {
    nama: "Banana",
    warna: "kuning",
    namaLatin: "Musa paradisiaca",
    tipeBiji: "single seed",
  },
  {
    nama: "Blueberry",
    warna: "ungu",
    namaLatin: "Vaccinium corymbosum",
    tipeBiji: "single seed",
  },
  {
    nama: "Cherry",
    warna: "merah",
    namaLatin: "Prunus apetala",
    tipeBiji: "Double seed",
  },
  {
    nama: "Lemon",
    warna: "Kuning",
    namaLatin: "Citrus limon",
    tipeBiji: "Single seed",
  },
  {
    nama: "Mango",
    warna: "Kuning",
    namaLatin: "Citrus reticulata",
    tipeBiji: "Double seed",
  },
  {
    nama: "Orange",
    warna: "Kuning",
    namaLatin: "Malus sylvestris",
    tipeBiji: "Single seed",
  },
  {
    nama: "Pear",
    warna: "kuning kehijauan",
    namaLatin: "Pyrus caucasica",
    tipeBiji: "Double seed",
  },
];

buah.forEach((daftarBuah) => {
  console.log(daftarBuah);
});
