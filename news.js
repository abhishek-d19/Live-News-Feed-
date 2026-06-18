//ad
// DOM Elements used throughout the application
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const newsContainer = document.getElementById("newsContainer");
const loading = document.getElementById("loading");

// API key for fetching live news
const API_KEY = "e831552f3144c501b0d8ee8e43508986";



//ad

/*
Fetch news articles from GNews API based on
search keyword or selected category.
*/
async function getNews(query = "technology") {
    try {
        // Display loading message while data is being fetched
        loading.innerText = "Loading news...";

        const response = await fetch(
            `https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${API_KEY}`
        );

        // Convert JSON response into JavaScript object
        const data = await response.json();

        // Send articles to display function
        displayNews(data.articles);



        // Disha - part 15













        // Bhagyashree
        /* Create and display news cards dynamically */
        function displayNews(articles) {
            newsContainer.innerHTML = "";
            if (!articles || articles.length === 0) {
                newsContainer.innerHTML = "<h2>No News Found</h2>";
                return;
            }



            
        // -- Uttkarsh --- Create one news card for each article---->
            
    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("news-card");

        card.innerHTML = `
          <img src="${article.image || 'https://via.placeholder.com/300x180'}" alt="News Image">
             <h3>${article.title}</h3>
                        <p>${article.description || "No description available"}</p>
                         <a href="${article.url}" target="_blank">
                Read More
            </a>
        `;

        newsContainer.appendChild(card);
    });
}







    //ad
    //Search news when user clicks Search button.
searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();

    if(searchTerm !== ""){
        getNews(searchTerm);
    }
});

// Sahil 
/*
Allow users to filter news using category buttons.
Uses custom data-category attribute from HTML.
*/
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        getNews(category);
    });
});
