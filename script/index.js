//  Fungsi untuk menampilkan headline berita
function getHeadLine() {
  $.getJSON("data/data-news.json", function (result) {
    let berita = result.berita;
    $("#headline-berita").append(
      `
       <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active bg-warning" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" class="bg-warning" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" class="bg-warning" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="" class="detail" data-bs-toggle="modal" data-bs-target="#exampleModal"  data-id="${berita[10].header_berita}">
                <img src="${berita[10].header_berita}" class="d-block w-100 rounded"  alt="..."
                />
                <div class="carousel-caption d-none d-md-block rounded w-75 text-start bg-dark px-3 bg-opacity-75">
                  <h5 class="fw-bold lh-sm">${berita[10].topik_berita}</h5>
                  <p class="fw-bold text-warning">
                      <small>${berita[10].tgl_berita}/10/2022, </small>
                      <small> ${berita[10].jam_terbit} WIB</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="carousel-item ">
             <a href="" class="detail" data-bs-toggle="modal" data-bs-target="#exampleModal"  data-id="${berita[20].header_berita}">
              <img src="${berita[20].header_berita}" class="d-block w-100 rounded" alt="..." />
              <div class="carousel-caption d-none d-md-block rounded text-start bg-dark px-3 bg-opacity-75">
                <h5>${berita[20].topik_berita}</h5>
                 <p class="fw-bold text-warning">
                      <small>${berita[20].tgl_berita}/10/2022, </small>
                      <small> ${berita[20].jam_terbit} WIB</small>
                  </p>
              </div>
             </a>
            </div>
            <div class="carousel-item ">
              <a href="" class="detail" data-bs-toggle="modal" data-bs-target="#exampleModal"  data-id="${berita[11].header_berita}">
             <img src="${berita[11].header_berita}" class="d-block w-100 rounded" alt="..." />
              <div class="carousel-caption d-none d-md-block rounded text-start bg-dark px-3 bg-opacity-75">
                <h5>${berita[11].topik_berita}</h5>
                 <p class="fw-bold text-warning">
                      <small>${berita[11].tgl_berita}/10/2022, </small>
                      <small> ${berita[11].jam_terbit} WIB</small>
                  </p>
              </div>
              </a>
            </div>
          </div>
        </div>
      `
    );
  });
}

getHeadLine();

//  Fungsi untuk menampilkan berita
function getNews() {
  $.getJSON("data/data-news.json", function (result) {
    let berita = result.berita;
    $.each(berita, function (index, data) {
      $("#list-berita").append(
        `
          <div class="col-lg-6">
            <div class="card mb-2 border-0">
              <div class="row g-0">
                <div class="col-md-4">
                <a href="" class="detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.header_berita}">
                <img src="${data.header_berita}" class="img-fluid rounded" alt="..." />
                </a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="" class="text-decoration-none detail text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.topik_berita}"><h5 class="card-title">${data.topik_berita}</h5></a>
                    <p class="card-text">
                    <small class="text-warning me-2">${data.author}</small>
                    <small>${data.tgl_berita}/10/2022, </small>
                    <small> ${data.jam_terbit} WIB</small>
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
            `
      );
    });
  });
}

getNews();

//  Pilihan berita berdasarkan kategori yang di klik
$(".nav-link").on("click", function () {
  //  hapus semua class nav-link
  $(".nav-link").removeClass(".active");
  //  this adalah apapun class nav-link yang saat ini sedang di klik lalu tambahkan class active
  $(this).addClass(".active");
  //  keadaan link pada navbar saat ini ketika di klik kemudian di simpan ke dalam sebuah variabel kategori
  let kategori = $(this).html();
  //  elemen h3 dengan id kategori berita di isi variabel kategori
  $("#kategori-berita").html(kategori);

  if (kategori == "News") {
    $("#list-berita").html("");
    $("#detail-berita").html("");
    $("body").css("background-color", "#fff");
    getNews();
    return;
  }

  $.getJSON("data/data-news.json", function (result) {
    let berita = result.berita;
    let content = "";

    $.each(berita, function (index, data) {
      if (data.genre == kategori.toLowerCase()) {
        content += `
         <div class="col-lg-8">
            <div class="card mb-2 border-0">
              <div class="row g-0">
                <div class="col-md-4">
                <a href="" class="detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.header_berita}">
                <img src="${data.header_berita}" class="img-fluid rounded" alt="..." />
                </a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="" class="text-decoration-none detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.topik_berita}"><h5 class="card-title">${data.topik_berita}</h5></a>
                    <p class="card-text">
                    <small class="text-warning me-2">${data.author}</small>
                    <small>${data.tgl_berita}/10/2022, </small>
                    <small> ${data.jam_terbit} WIB</small>
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>`;
      }
    });
    $("#list-berita").html(content);
    $("#detail-berita").html("");
    $("#headline-berita").html("");
    $("footer").css("margin-top", "250px");
    $("body").css("background-color", "#fff");
  });
});

//  Pilihan berita berdasarkan inputan form pencarian
$("#search-button").on("click", function () {
  // Ambil data dari JSON
  $.getJSON("data/data-news.json", function (result) {
    // variabel yang berisi string kosong untuk di masukkan ke elemen html
    let content = "";
    //  ambil semua value yang di input
    let input = $("#search-input").val();
    //  simpan semua data pada objek berita ke dalam sebuah variabel berita (nama variabel bebas)
    let berita = result.berita;
    //  lakukan perulangan pada objek berita
    $.each(berita, function (index, data) {
      //  jika input yang dimasukkan sama dengan key pada objek berita maka lakukan perintah di bawah
      if (
        input == data.genre ||
        input == data.topik_berita ||
        input == data.topik_berita.toLowerCase()
      ) {
        $("#kategori-berita").html(data.genre);
        //  menambahkan elemen html ke dalam variabel content
        content += `
         <div class="col-lg-8">
            <div class="card mb-2 border-0">
              <div class="row g-0">
                <div class="col-md-4">
                <a href="" class="detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.header_berita}">
                <img src="${data.header_berita}" class="img-fluid rounded" alt="..." />
                </a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="" class="text-decoration-none detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.topik_berita}"><h5 class="card-title">${data.topik_berita}</h5></a>
                    <p class="card-text">
                    <small class="text-warning me-2">${data.author}</small>
                    <small>${data.tgl_berita}/10/2022, </small>
                    <small> ${data.jam_terbit} WIB</small>
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>

           `;
        //  Elemen html dengan id berita di isi dengan element html pada variabel content
        $("#list-berita").html(content);
        $("#detail-berita").html("");
        $("#headline-berita").html("");
      }
      //  kosongkan text pada form input
      $("#search-input").val("");
      $("body").css("background-color", "#fff");
    });
  });
});

//  Detail Berita
$("#list-berita").on("click", ".detail", function () {
  let klik = $(this).data("id");
  // console.log(klik);

  $("#kategori-berita").html("");
  $("#list-berita").html("");

  $.getJSON("data/data-news.json", function (result) {
    // console.log(klik);
    let berita = result.berita;
    $.each(berita, function (index, data) {
      // console.log(berita[index].topik_berita);
      if (
        klik == berita[index].topik_berita ||
        klik == berita[index].header_berita
      ) {
        $("#detail-berita").html(
          `
    <div class="col-lg-10">
      <div class="card mb-5">
      <div class="card-body">
       <h2 class="fw-bold">${data.topik_berita}</h2>
          <p class="card-text"><small class="text-muted"><a class="text-decoration-none" href="index.html">WorldNews.com</a> - ${data.tgl_berita}/10/2022, ${data.jam_terbit} WIB</small></p>
          <div class="my-3">
          <span class="fw-bold">BAGIKAN : </span>
                <a href="https://instagram.com/mchdysf" target="_blank"
                  ><i class="fa-brands fa-instagram text-danger mx-2 fs-4"></i
                ></a>
                <a href=""><i class="fa-brands fa-facebook me-2 fs-4"></i></a>
                <a href="https://twitter.com/mchdysf" target="_blank"
                  ><i class="fa-brands fa-twitter text-info me-2 fs-4"></i
                ></a>
                <a href="https://wa.me/+6283869696964" target="_blank"><i class="fa-brands fa-whatsapp fa-solid text-success fs-4"></i></a>
              </div>
      <img src="${data.header_berita}" class="card-img-top w-75 mb-3" alt="...">
          <p class="card-text">${data.isi_berita}</p>
          <p class="card-text"><small class="text-muted">Terakhir diperbarui : ${data.jam_terbit} WIB</small></p>
          <p class="card-text"><small class="text-muted">Editor : <span class="text-warning fw-bold">${data.author}</span></small></p>
          <p class="card-text"><small class="text-muted">Kategori : <span>${data.genre}</span></small></p>
        </div>
      </div>
    </div>
    `
        );
        $("body").css("background-color", "#ddd");
        $("#headline-berita").hide();
        $("hr").hide();
      }
    });
  });
});

//  Detail Berita headline
$("#headline-berita").on("click", ".detail", function () {
  let klik = $(this).data("id");
  // console.log(klik);

  $("#kategori-berita").html("");
  $("#list-berita").html("");

  $.getJSON("data/data-news.json", function (result) {
    // console.log(klik);
    let berita = result.berita;
    $.each(berita, function (index, data) {
      // console.log(berita[index].topik_berita);
      if (
        klik == berita[index].topik_berita ||
        klik == berita[index].header_berita
      ) {
        $("#detail-berita").html(
          `
    <div class="col-lg-10">
      <div class="card mb-5">
      <div class="card-body">
       <h2 class="fw-bold">${data.topik_berita}</h2>
          <p class="card-text"><small class="text-muted"><a class="text-decoration-none" href="index.html">WorldNews.com</a> - ${data.tgl_berita}/10/2022, ${data.jam_terbit} WIB</small></p>
          <div class="my-3">
          <span class="fw-bold">BAGIKAN : </span>
                <a href="https://instagram.com/mchdysf" target="_blank"
                  ><i class="fa-brands fa-instagram text-danger mx-2 fs-4"></i
                ></a>
                <a href=""><i class="fa-brands fa-facebook me-2 fs-4"></i></a>
                <a href="https://twitter.com/mchdysf" target="_blank"
                  ><i class="fa-brands fa-twitter text-info me-2 fs-4"></i
                ></a>
                <a href="https://wa.me/+6283869696964" target="_blank"><i class="fa-brands fa-whatsapp fa-solid text-success fs-4"></i></a>
              </div>
      <img src="${data.header_berita}" class="card-img-top w-75 mb-3" alt="...">
          <p class="card-text">${data.isi_berita}</p>
          <p class="card-text"><small class="text-muted">Terakhir diperbarui : ${data.jam_terbit} WIB</small></p>
          <p class="card-text"><small class="text-muted">Editor : <span class="text-warning fw-bold">${data.author}</span></small></p>
          <p class="card-text"><small class="text-muted">Kategori : <span>${data.genre}</span></small></p>
        </div>
      </div>
    </div>
    `
        );
        $("body").css("background-color", "#ddd");
        $("#headline-berita").hide();
        $("hr").hide();
      }
    });
  });
});
