
//ajax

// //ambil elemen2 yang dibutuhkan
// var keyword = document.getElementById('keyword');
// var tombolCari = document.getElementById('tombol_cari');
// var tombolReset = document.getElementById('tombol_reset');
// var container = document.getElementById('container');

// //tambah event ketika keyword ditulis
// keyword.addEventListener('keyup', function () {

//   //buat object ajax
//   var xhr = new XMLHttpRequest();

//   //cek kesiapan ajax
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       container.innerHTML = xhr.responseText;
//     }
//   }

//   //eksekusi ajax
//   xhr.open('GET', 'ajax/mahasiswa.php?keyword=' + keyword.value, true);
//   xhr.send();
// });

$(document).ready(function () {

  //hilangkan tombol cari
  $('#tombol_cari').hide();

  //event ketika keyword ditulis
  $('#keyword').on('keyup', function () {
    $('#container').load('ajax/mahasiswa.php?keyword=' + $('#keyword').val());
  });

});