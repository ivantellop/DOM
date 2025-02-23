// Espera a que todo el contenido de la página cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos del DOM con los que vamos a interactuar
    const commentInput = document.getElementById("commentInput"); // Caja de comentarios
    const addCommentBtn = document.getElementById("addCommentBtn"); // Botón para agregar el comentario
    const commentList = document.getElementById("commentList"); // Lista donde se mostrarán los comentarios

    // Agregamos un evento al botón para que, cuando se haga clic, agregue un comentario
    addCommentBtn.addEventListener("click", () => {
        const commentText = commentInput.value.trim(); // Obtenemos el texto del comentario y eliminamos espacios extra

        if (commentText === "") {
            alert("El comentario no puede estar vacío."); // Validamos que el usuario no envíe un comentario vacío
            return; // Detenemos la ejecución si el comentario está vacío
        }

        // Creamos un nuevo elemento de lista para el comentario
        const commentItem = document.createElement("li");
        commentItem.classList.add("comment"); // Le asignamos la clase "comment" para los estilos CSS

        // Obtenemos la fecha y hora actual en un formato legible
        const date = new Date();
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

        // Insertamos el contenido del comentario en el <li>
        commentItem.innerHTML = `
            <p>${commentText}</p> <!-- Contenido del comentario -->
            <small>${formattedDate}</small> <!-- Fecha y hora de publicación -->
        `;

        // Creamos el botón de eliminar comentario
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar"; // Cambiamos el texto del botón
        deleteBtn.classList.add("delete-btn"); // Agregamos una clase CSS para darle estilo

        // Agregamos un evento al botón para eliminar el comentario cuando se haga clic
        deleteBtn.addEventListener("click", () => {
            commentList.removeChild(commentItem); // Elimina el comentario de la lista
        });

        // Agregamos el botón de eliminar dentro del comentario
        commentItem.appendChild(deleteBtn);

        // Agregamos el comentario a la lista de comentarios en el DOM
        commentList.appendChild(commentItem);

        // Limpiamos el campo de texto después de agregar el comentario
        commentInput.value = "";
    });
});
