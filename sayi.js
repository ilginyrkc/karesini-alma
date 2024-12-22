function kareleriniAl(dizi) {
    const kareler = dizi.map(x => x * x);
    return kareler;
}

const sayilar = [1, 2, 3, 4, 5];
const kareler = kareleriniAl(sayilar);
console.log("Oluşan dizi:", kareler);
