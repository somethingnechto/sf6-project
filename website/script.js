function performSearch() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  
  const headings = document.querySelectorAll('h3.searchable');
  
  headings.forEach(heading => {
      heading.classList.remove('highlight');
      heading.innerHTML = heading.textContent;
  });

  if (searchTerm) {
      let found = false;

      headings.forEach(heading => {
          if (!found && heading.textContent.toLowerCase().includes(searchTerm)) {
              found = true;

              const innerHTML = heading.innerHTML;
              const index = heading.textContent.toLowerCase().indexOf(searchTerm);
              const beforeMatch = heading.textContent.slice(0, index);
              const match = heading.textContent.slice(index, index + searchTerm.length);
              const afterMatch = heading.textContent.slice(index + searchTerm.length);

              heading.innerHTML = 
                  beforeMatch + '<span class="highlight">' + match + '</span>' + afterMatch;

              heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      });
  }
}