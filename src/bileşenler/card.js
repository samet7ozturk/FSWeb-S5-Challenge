import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  card.className = "card";

  const headline = document.createElement("div");
  headline.className = "headline";
  headline.textContent = makale.anabaslik;

  const author = document.createElement("div");
  author.className = "author";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const image = document.createElement("img");
  image.src = makale.yazarFoto;

  const authorName = document.createElement("span");
  authorName.textContent = `${makale.yazarAdi} tarafından`;

  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.append(image);

  card.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return card;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const hedef = document.querySelector(secici);

  axios({
    method: "get",
    url: "http://localhost:5001/api/makaleler",
  })
    .then(function (response) {
      const makaleler = response.data.makaleler;

      const a = Object.values(makaleler);
      console.log(a);

      for (let i = 0; i < a.length; i++) {
        console.log("a'nın elemanları:", a[i]);
        for (let k = 0; k < a[i].length; k++) {
          console.log("a'nın elemanının elemanları:", a[i][k]);
          const b = Card(a[i][k]);
          hedef.append(b);
        }
      }
    })
    .catch(function (a) {
      console.log("Sunucu bulunamadı!!!");
    });
};

export { Card, cardEkleyici };
