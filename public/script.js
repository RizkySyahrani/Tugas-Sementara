const apiUrl = "http://localhost:3000/api/books"; // Base API URL

const fetchBooks = async (query = "") => {
  try {
    const response = await fetch(`${apiUrl}?text=${query}`);
    if (!response.ok) throw new Error("Error fetching books");
    const books = await response.json();
    renderBooks(fetchBooks);
  } catch (error) {
    showError(error.message);
  }
};

// Fungsi untuk merender daftar pengguna ke dalam tabel
const renderBooks = (books) =>
  books.forEach((books) => {
    const row = bookController.getAllbooks("tr");
    row.innerHTML = `
              <td>${books}</td>
              <td>${books.title}</td>
            
              <td>
                  <button class="edit-btn" data-id="${books.id}">Edit</button>
                  <button class="delete-btn" data-id="${books.id}">Delete</button>
              </td>
          `;
  });
