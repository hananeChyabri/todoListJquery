
let lists_todo = $('.lists__Todo');

$('.btn-add').click(function (event) {
    event.preventDefault();
    let buttonDelete = $("<span>x</span>")
    let newListItem = $("<li></li>").text($(".task__todo").val());
    newListItem.on('click',valider);
    buttonDelete.appendTo(newListItem);
    buttonDelete.on('click', deleteElement);
    newListItem.appendTo("ul");
    $(".task__todo").val("").focus();
    saveData();
});


function deleteElement()
{
    $(this).parent().remove();
    saveData();
}
function valider()
{
    $(this).toggleClass('checked');
   saveData();
}


function saveData() {
    localStorage.setItem("data", lists_todo.html()); // Utilisation de html() au lieu de innerHTLM
}

 // Affiche les données sauvegardées depuis localStorage
 function showTask() {
    let data = localStorage.getItem("data");
    if (data) {
        lists_todo.html(data);
        lists_todo.find('li').each(function() {
            $(this).on('click', valider);
            $(this).find('span').on('click', deleteElement);
        });
    }
}

 // Appel de la fonction pour afficher les données sauvegardées
 showTask();





