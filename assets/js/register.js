document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    
    if (password1.length < 8) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        return;
    }

    if (password1 !== password2) {
        alert("Les mots de passe ne correspondent pas.Répeter l'opération SVP");
        return;
    }

    document.getElementById('confirmation').style.display = 'flex';

    setTimeout(function() {
        document.getElementById('confirmation').style.display = 'none';
    }, 3000);
});
