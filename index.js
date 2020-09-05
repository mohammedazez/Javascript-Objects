let fruit = [
  {
    nama: "Apple",
    warna: "hijau",
    namaLatin: "Malus sylvestris",
    tipeBiji: "single seed",
    picture: "./assets/apel.jpg",
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

// Pemanggilan menggunakan DOM
let buah = document.querySelector(".buah");

// Function Looping untuk show
let display = () => {
  fruit.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML = `
    <h5>${item.nama}</h5>
    <p>Warna: ${item.warna}</p>
    <p>Nama Latin: ${item.namaLatin}</p>
    <p>Tipe Biji: ${item.tipeBiji}</p>
    <p>Gambar: ${item.picture}<p>
  `;
    buah.appendChild(card);
  });
};

// Panggil Functionya
display();
