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

<input type="text" id="search-input" placeholder="Search writing...">
<ol id="results-container"></ol>

<script>
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');
  let entries = [];

  function renderResults() {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.replaceChildren();
    if (!query) return;

    const matches = entries.filter((entry) =>
      [entry.title, entry.description, entry.publisher, entry.tags]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.textContent = 'No results found';
      return;
    }

    matches.slice(0, 10).forEach((entry) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = entry.url;
      link.title = entry.description;
      link.textContent = entry.title;
      item.appendChild(link);
      resultsContainer.appendChild(item);
    });
  }

  fetch('{{ "/search.json" | relative_url }}')
    .then((response) => response.json())
    .then((data) => {
      entries = data;
      renderResults();
    });

  searchInput.addEventListener('input', renderResults);
</script>
