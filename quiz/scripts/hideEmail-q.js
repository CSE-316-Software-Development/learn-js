const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];

window.onload = function hideEmail() {
    const list = document.getElementById('emails');
    list.innerHTML = '';
    
    for (const email of emails) {
        let anonymizedEmail;
        if (email.includes('@')) {
            const atIndex = email.indexOf('@');
            const localPart = email.slice(0, atIndex);
            const domainPart = email.slice(atIndex);
            anonymizedEmail = '*'.repeat(localPart.length) + domainPart;
        } else {
            anonymizedEmail = email; // Handle email addresses without domain parts
        }

        const li = document.createElement('li');
        li.textContent = anonymizedEmail;
        list.appendChild(li);
    }
};
