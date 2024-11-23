// Fonction pour gérer la recherche et la pagination
document.addEventListener('DOMContentLoaded', () => {
    const studentsPerPage = 10;
    const studentContainer = document.getElementById('studentContainer');
    const searchBar = document.getElementById('searchBar');
    const students = Array.from(studentContainer.children);
    const pagination = document.getElementById('pagination');
    let currentPage = 1;

    const filterStudents = () => {
        const query = searchBar.value.toLowerCase();
        return students.filter(student => {
            const name = student.querySelector('h3').textContent.toLowerCase();
            const keywords = student.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
            return name.includes(query) || keywords.includes(query);
        });
    };

    const displayPagination = (filteredStudents) => {
        const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.disabled = i === currentPage;
            button.addEventListener('click', () => {
                currentPage = i;
                displayStudents(filteredStudents);
            });
            pagination.appendChild(button);
        }
    };

    const displayStudents = (filteredStudents) => {
        studentContainer.innerHTML = '';
        const start = (currentPage - 1) * studentsPerPage;
        const end = start + studentsPerPage;
        filteredStudents.slice(start, end).forEach(student => {
            studentContainer.appendChild(student);
        });
        displayPagination(filteredStudents);
    };

    searchBar.addEventListener('input', () => {
        currentPage = 1;
        displayStudents(filterStudents());
    });

    displayStudents(students);
});
