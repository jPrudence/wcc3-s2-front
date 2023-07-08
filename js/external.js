var openModalBtn = document.getElementById('fille1');
var closeModalBtn = document.getElementsByClassName('close')[0];
var modal = document.getElementById('modal');


closeModalBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    modal.style.display = 'none';
});


document.getElementById('fille1').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille1').contentDocument;


    var fille1 = objectContent.getElementById('Calque_2');
    fille1.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // fille1.addEventListener("mouseover", function () {
    //     alert("Hey, je t'avais dit de ne pas me toucher !")
    // });
})


document.getElementById('fille2').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille2').contentDocument;


    var fille2 = objectContent.getElementById('Calque_2');
    fille2.addEventListener('click', function () {
        alert('Vous avez cliqué sur un élément dans le fichier importé!');
    });

    fille2.addEventListener("mouseover", function () {
        alert("Hey, je t'avais dit de ne pas me toucher !")
    });
})

// fille3

document.getElementById('fille3').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille3').contentDocument;

    var fille3 = objectContent.getElementById('Calque_2');
    fille3.addEventListener('click', function () {
        alert('Vous avez cliqué sur un élément dans le fichier importé!');
    });

    fille3.addEventListener("mouseover", function () {
        alert("Hey, je t'avais dit de ne pas me toucher !")
    });
});

// fille4

document.getElementById('fille4').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille4').contentDocument;

    var fille4 = objectContent.getElementById('Calque_2');
    fille4.addEventListener('click', function () {
        alert('Vous avez cliqué sur un élément dans le fichier importé!');
    });

    fille4.addEventListener("mouseover", function () {
        alert("Hey, je t'avais dit de ne pas me toucher !")
    });

})


