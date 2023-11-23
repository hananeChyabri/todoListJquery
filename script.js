
let lists_todo = $('.lists__Todo');

$('.btn-add').click(function (event) {
    console.log
    event.preventDefault();
    let buttonDelete = $("<span>x</span>")
    let newListItem = $("<li></li>").text($(".task__todo").val());
    newListItem.on('click',valider);
    buttonDelete.appendTo(newListItem);
    buttonDelete.on('click', deleteElement);
    newListItem.appendTo("ul");
    $(".task__todo").val("").focus();
   // saveData();
});

function deleteElement()
{
    $(this).parent().remove();
    saveData();
}
function valider()
{
    $(this).toggleClass('checked');
//    saveData();
}


// function saveData() {
//     localStorage.setItem("data", $('.lists__Todo').);
// }

// // Affiche les données sauvegardées depuis localStorage
// function showTask() {
//     $('.lists__Todo').html(localStorage.getItem("data"));
// }

// // Appel de la fonction pour afficher les données sauvegardées
// showTask();





