---
title: Search
---

<style>
  #search-input {
    background: rgb(236, 237, 238);
    border: none;
    font: inherit;
    outline: none;
    padding: 1rem;
    width: 100%;
  }

  #results-container {
    margin: .5rem 0;
  }
</style>

<input type="text" id="search-input" placeholder="Search projects...">
<ol id="results-container"></ol>

<script>
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');
  let projects = [];

  function renderResults() {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.replaceChildren();
    if (!query) return;

    const matches = projects.filter((project) =>
      [project.title, project.description, project.tags]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.textContent = 'No results found';
      return;
    }

    matches.slice(0, 10).forEach((project) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = project.url;
      link.title = project.description;
      link.textContent = project.title;
      item.appendChild(link);
      resultsContainer.appendChild(item);
    });
  }

  fetch('{{ "/search.json" | relative_url }}')
    .then((response) => response.json())
    .then((data) => {
      projects = data;
      renderResults();
    });

  searchInput.addEventListener('input', renderResults);
</script>
