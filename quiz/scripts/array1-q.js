window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        // We will only allow a term to be entered if the search input isn't empty
        if (inp.value !== '') {
            // Add the search term to the history array
            myHistory.push(inp.value);

            // Empty the list so that we don't display duplicate entries
            list.innerHTML = '';

            // Loop through the history array and display all the search terms in the list
            for (const itemText of myHistory) {
                const li = document.createElement('li');
                li.textContent = itemText;
                list.appendChild(li);
            }

            // If the array length is greater than the maximum history length, remove the oldest search term
            if (myHistory.length > MAX_HISTORY) {
                myHistory.shift(); // Remove the oldest search term from the beginning of the array
            }

            // Empty the search input and focus it, ready for the next term to be entered
            inp.value = '';
            btn.focus();
        }
    };
};
