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
    picture: "./assets/banana.jpg",
  },
  {
    nama: "Blueberry",
    warna: "ungu",
    namaLatin: "Vaccinium corymbosum",
    tipeBiji: "single seed",
    picture: "./assets/blueberry.jpg",
  },
  {
    nama: "Cherry",
    warna: "merah",
    namaLatin: "Prunus apetala",
    tipeBiji: "Double seed",
    picture: "./assets/cherry.jpg",
  },
  {
    nama: "Lemon",
    warna: "Kuning",
    namaLatin: "Citrus limon",
    tipeBiji: "Single seed",
    picture: "./assets/lemon.jpg",
  },
  {
    nama: "Mango",
    warna: "Kuning",
    namaLatin: "Citrus reticulata",
    tipeBiji: "Double seed",
    picture: "./assets/mango.jpg",
  },
  {
    nama: "Orange",
    warna: "Kuning",
    namaLatin: "Malus sylvestris",
    tipeBiji: "Single seed",
    picture: "./assets/orange.jpg",
  },
  {
    nama: "Pear",
    warna: "kuning kehijauan",
    namaLatin: "Pyrus caucasica",
    tipeBiji: "Double seed",
    picture: "./assets/pear.jpg",
  },
];

// Pemanggilan menggunakan DOM
let buah = document.querySelector(".buah");

// Function Looping untuk show
let display = () => {
  fruit.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${item.picture}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${item.nama}</h5>
      <p>${item.warna}</p>
      <p>${item.warna}</p>
      <p>${item.namaLatin}</p>
      <p>${item.tipeBiji}</p>
      <a href="#" class="btn btn-primary">Beli Sekarang</a>
    </div>
  </div>`;
    buah.appendChild(card);
  });
};

// Panggil Functionya
display();
