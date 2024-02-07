window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        if (inp.value !== '') {
            myHistory.unshift(inp.value);
            if (myHistory.length > MAX_HISTORY) {
                myHistory.pop();
            }
            list.innerHTML = '';
            myHistory.forEach((itemText) => {
                const listItem = document.createElement('li');
                listItem.textContent = itemText;
                list.appendChild(listItem);
            });
            inp.value = '';
            inp.focus();
        }
    };
};
