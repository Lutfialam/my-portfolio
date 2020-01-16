import $ from './jquery.min'
import Swal from './sweetalert2.all.min'
document.getElementsByClassName("popup").onclick = function() {
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    });
};



$('.tombol-hapus').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'apakah anda yakin',
        text: "data ini akan di hapus?", 
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'hapus data!'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })

});