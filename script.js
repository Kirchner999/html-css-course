
if (document.querySelector("title").textContent === "Kindred") {
    document.addEventListener("DOMContentLoaded", function() {
        // On ajoute 8 fois la meme image de kindred
        document.body.innerHTML += `<div class="kindred"><img src="https://imgs.search.brave.com/rjgR-lqdIIc0zCLFec0B1G2YaoEZ8xVA8WGgEBVnQ7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/YWd1ZW9mbGVnZW5k/cy9pbWFnZXMvZC9k/NS9LaW5kcmVkX1Ro/ZV9Xb2xmXzIucG5n/L3JldmlzaW9uL2xh/dGVzdC9zY2FsZS10/by13aWR0aC1kb3du/LzQwMD9jYj0yMDE1/MDkxNTIxNDAyMw"/></div>`.repeat(8);

        const styleSheet = document.styleSheets[0];

        // On ajoute des regles de style pour les images de kindred
        styleSheet.insertRule(".kindred {position: absolute; transition: all 0.5s ease;}", 0);
        styleSheet.insertRule(".kindred.anime {transform: scale(2);}", 0);

        // On cree une fonction qui va s'executer toutes les secondes pour que les images de kindred bougent
        setInterval(function() {
            // On selectionne toutes les images de kindred
            document.querySelectorAll(".kindred").forEach(function(kindred) {
                // On leur donne une position aleatoire
                kindred.style.left = (Math.random() * (window.innerWidth - 300)) + 100 + "px";
                kindred.style.top = (Math.random() * (window.innerHeight - 350)) + 25 + "px";

                // On les fait apparaitre en les zoomant
                kindred.style.transform = "scale(0.5)";
                kindred.classList.add("anime");

                // On les fait disparaitre au bout de 2 secondes
                setTimeout(function() {
                    kindred.classList.remove("anime");
                }, 2000);
            });
        }, 1000);
    });
}

