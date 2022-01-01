filterSelection(null);

function filterSelection(key) {
    $.getJSON('./menu.json', function (data) {
      let menu = data.menu;
  
      if (key) {
        menu = menu.filter(function (value) {
          return value.asal === key; //post.asal === 'Meksiko"
        });
      }
  
      $('#menu-makan')
        .empty()
        .append(
          menu.map(function (each) {
            return `<div class="col-md-4">
                        <div class="card bg-warning mb-3">
                            <img src="${each.gambar}" class="card-img-top" alt="..." width="300" height="400">
                            <div class="card-body">
                            <h5 class="card-title"><strong>${each.nama}</strong></h5>
                            <p class="card-text">${each.deskripsi}</p>
                            <p class="card-footer">Harga : ${each.harga}</p>
                            <p class="card-footer">Estimasi Masak : ${each.estimasi}</p>
                            <button type="button" class="btn btn-info">Pesan Sekarang</button>
                            </div>
                        </div>
                    </div>`;
          })
        );
    });
  }