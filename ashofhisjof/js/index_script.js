// Função para gerar a barra de navegação
function generateNavBar() {
    document.getElementById('navbar').innerHTML = `
        <nav>
        
        <div class="align">
            <div class="navAlign">
            <div class="logo">
                <img src="../img/br/BR.png" style="height:30px; width:30px; margin-right:10px">
                <p><a href="index.html" style="font-size:20px">Regiões do Brasil</></p>  
                </div> 
                <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="centro-oeste.html">Centro-Oeste</a></li>
                        <li><a href="sudeste.html">Sudeste</a></li>
                        <li><a href="norte.html">Norte</a></li>
                        <li><a href="nordeste.html">Nordeste</a></li>
                        <li><a href="sul.html">Sul</a></li>
                        <li><a href="contato.html">Contato</a></li>
                </ul>
            </div>
            </div>
        </nav>
    `;
}

function generateFooter() {
    document.getElementById('footer').innerHTML = `
        <footer>
            <p>&copy; 2023 Site das Regiões do Brasil</p>
        </footer>
    `;
}


document.addEventListener('DOMContentLoaded', function() {
    generateNavBar();
    generateFooter();
});
