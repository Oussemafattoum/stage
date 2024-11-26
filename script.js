document.addEventListener("DOMContentLoaded", () => {
    // Recherche dans la liste des étudiants
    const searchBar = document.getElementById("searchBar");
    const studentContainer = document.getElementById("studentContainer");
    const students = studentContainer.getElementsByClassName("etudiant");

    // Événement de recherche
    searchBar.addEventListener("input", () => {
        const filter = searchBar.value.toLowerCase();
        Array.from(students).forEach(student => {
            const studentName = student.querySelector("h3").textContent.toLowerCase();
            const studentKeywords = student.querySelector("p:last-of-type").textContent.toLowerCase();
            if (studentName.includes(filter) || studentKeywords.includes(filter)) {
                student.style.display = "block"; // Affiche l'étudiant correspondant
            } else {
                student.style.display = "none"; // Masque les étudiants qui ne correspondent pas
            }
        });
    });
});