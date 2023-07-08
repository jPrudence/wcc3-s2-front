var openModalBtn = document.getElementById('fille1');
var closeModalBtn = document.getElementsByClassName('close')[0];
var modal = document.getElementById('modal');


closeModalBtn.addEventListener('click', function (e) {
    modal.style.display = 'none';
});


document.getElementById('fille1').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille1').contentDocument;


    var fille1 = objectContent.getElementById('Calque_2');
    fille1.addEventListener('click', function () {
        modal.style.display = 'block';
    });
})


document.getElementById('fille2').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille2').contentDocument;


    var fille2 = objectContent.getElementById('Calque_2');
    fille2.addEventListener('click', function () {
        modal.style.display = 'block';
    });

})

// fille3

document.getElementById('fille3').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille3').contentDocument;

    var fille3 = objectContent.getElementById('Calque_2');
    fille3.addEventListener('click', function () {
        modal.style.display = 'block';
    });

});

// fille4

document.getElementById('fille4').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille4').contentDocument;

    var fille4 = objectContent.getElementById('Calque_2');
    fille4.addEventListener('click', function () {
        modal.style.display = 'block';
    });

})


