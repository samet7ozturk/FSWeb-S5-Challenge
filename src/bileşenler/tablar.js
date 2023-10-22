import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const topics = document.createElement("div");
  topics.className = "topics";

  const tab1 = document.createElement("div");
  tab1.className = "tab";
  tab1.textContent = konu[0];

  const tab2 = document.createElement("div");
  tab2.className = "tab";
  tab2.textContent = konu[1];

  const tab3 = document.createElement("div");
  tab3.className = "tab";
  tab3.textContent = konu[2];

  const tab4 = document.createElement("div");
  tab4.className = "tab";
  tab4.textContent = konu[3];

  const tab5 = document.createElement("div");
  tab5.className = "tab";
  tab5.textContent = konu[4];

  topics.append(tab1, tab2, tab3, tab4, tab5);

  return topics;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const hedef = document.querySelector(secici);

  axios({
    method: "get",
    url: "http://localhost:5001/api/konular",
  })
    .then(function (response) {
      const tablar = Tablar(response.data.konular);
      hedef.append(tablar);
    })
    .catch(function (a) {
      alert("Sunucu bulunamadı!!!");
    });
};

export { Tablar, tabEkleyici };
