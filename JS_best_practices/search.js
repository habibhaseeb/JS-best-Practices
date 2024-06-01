const keyword = ["what is Ai","how to learn web-development in 2024","how AI works", "what is encapsulation in programming language"];
// const keyword2 = ["what is Github" , "what is google"];
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("searchResults");

function Search(query){
  searchResults.innerHTML = "";
  if(query.length > 0) {
    const matchingTopics = keyword.filter(topic => topic.toLowerCase().includes(query.toLowerCase()) );
    if(matchingTopics.length > 0){
      matchingTopics.forEach(topic => {

        const suggestion = document.createElement("div");
        suggestion.textContent = topic;

        suggestion.addEventListener("click", () => {
          document.getElementById("search-input").value = topic;
          searchResults.innerHTML = "";
        });

        searchResults.appendChild(suggestion);
      });

      (searchResults.style.display = 'block',
        searchResults.style.backgroundColor = '#eff34f',searchResults.style.cursor = "pointer");
    } 
    else {
      searchResults.style.display = "none";
    }

  } 

  else {
    searchResults.style.display = "none";
  }
}

searchInput.addEventListener("input", function(){
  Search(searchInput.value);
});

document.addEventListener("click", function(event){
  const searchInput = document.getElementById("search-input");

  const searchResults = document.getElementById("searchResults");


  if(event.target !== searchInput && event.target !== searchResults){
    searchResults.style.display = "none";
  }
});

let btnHandler = document.querySelectorAll("#btn");
 function ExecutebtnHandler(){
        console.log(`Your button is clicked and response is sent to server for execution`);
    }
