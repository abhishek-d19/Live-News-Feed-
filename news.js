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



        // Disha

        
