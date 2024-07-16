document.addEventListener('DOMContentLoaded', function() {
    const estadoContent = document.getElementById('estado-content');
    const stateCode = localStorage.getItem('selectedState');


    const stateContent = {
        'sp': {
            'title': 'Estado de São Paulo',
            'content': `
                <a class="text m" href="sudeste.html" style="font-size:15px">Voltar<\a>
                <p class="text m">São Paulo, uma das 27 unidades federativas do Brasil, destaca-se como o estado mais populoso do país, 
                além de ser a terceira unidade administrativa mais populosa de toda a América do Sul. Caracteriza-se também como o mais rico entre os estados brasileiros, 
                refletindo uma economia diversificada e dinâmica. A sua capital, a cidade de São Paulo, não apenas dá nome ao estado, 
                mas também se consagra como a capital econômica do Brasil, sendo um importante polo financeiro, corporativo e cultural na América Latina.</p>
                
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é a cidade de São Paulo.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li >Avenida Paulista</li>
                    <li >Parque Ibirapuera</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li >Virado à Paulista</li>
                    <li >Feijoada</li>
                </ul>
            `,
            'images': [
                '../img/sp/1.jpg',
                '../img/sp/5.jpg',
                '../img/sp/2.jpeg',
                '../img/sp/3.jpg',
                '../img/sp/4.jpg'
                
            ],
            'captions': [
                'Vista da cidade de São Paulo', 
                "Avenida Paulista em São Paulo"  ,
                'Parque Ibirapuera em São Paulo' ,
                'Virado à Paulista',
                "Feijoada",
                    
            ]
        },
        'mg': {
            'title': 'Estado de Minas Gerais',
            'content': `
            <a class="text m" href="sudeste.html" style="font-size:15px">Voltar<\a>
                <p class="text m">Minas Gerais, conhecido por sua rica história colonial e por ser o berço da Inconfidência Mineira, é um dos estados mais importantes do Brasil. 
                Sua capital, Belo Horizonte, é uma metrópole cheia de cultura e história, além de ser famosa por sua culinária e arquitetura. 
                Minas Gerais também é conhecido por suas cidades históricas, como Ouro Preto e Diamantina, que atraem turistas do mundo todo.</p>
                
                <h2 class="text">Capital:</h2>
                <p class="text m">A capital do estado é a cidade de Belo Horizonte.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li >Inhotim</li>
                    <li >Ouro Preto</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li >Pão de Queijo</li>
                    <li >Feijão Tropeiro</li>
                </ul>
            `,
            'images': [
                '../img/mg/1.jpg',
                '../img/mg/2.jpg',
                '../img/mg/3.jpg',
                '../img/mg/4.jpg',
                '../img/mg/5.jpg'
            ],
            'captions': [
                'Vista da cidade de Belo Horizonte',
                "Inhotim em Minas Gerais",
                'Cidade histórica de Ouro Preto',
                'Pão de Queijo',
                "Feijão Tropeiro",
            ]
        },
        'rj': {
            'title': 'Estado do Rio de Janeiro',
            'content': `
                <a class="text m" href="sudeste.html" style="font-size:15px">Voltar<\a>
                <p class="text m">O Rio de Janeiro é famoso por suas praias deslumbrantes, o icônico Cristo Redentor, e o animado Carnaval. 
                Sua capital, também chamada Rio de Janeiro, é um dos principais destinos turísticos do mundo, conhecido por sua beleza natural e vibrante vida cultural.</p>
                
                <h2 class="text">Capital:</h2>
                <p class="text m">A capital do estado é a cidade do Rio de Janeiro.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li >Cristo Redentor</li>
                    <li >Pão de Açúcar</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li >Feijoada</li>
                    <li >Biscoito Globo</li>
                </ul>
            `,
            'images': [
                '../img/rj/1.jpg',
                '../img/rj/2.jpg',
                '../img/rj/3.jpg',
                '../img/rj/3.webp',
                '../img/rj/4.webp'
            ],
            'captions': [
                'Vista aérea do Rio de Janeiro',
                "Cristo Redentor",
                'Pão de Açúcar',
                'Feijoada carioca',
                "Biscoito Globo",
            ]
        },
        'es': {
            'title': 'Estado do Espírito Santo',
            'content': `
                <a class="text m" href="sudeste.html" style="font-size:15px">Voltar<\a>    
                <p class="text m">O Espírito Santo, conhecido por suas belas praias e pela forte influência da cultura italiana e portuguesa, 
                é um estado que combina beleza natural com rica história cultural. Sua culinária é marcada por pratos como a Moqueca Capixaba, 
                um símbolo da gastronomia local, e a Torta Capixaba, tradicional durante a Semana Santa.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Vitória, uma cidade que mescla modernidade com importantes marcos históricos.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Praia de Guarapari</li>
                    <li>Convento da Penha</li>
                    <li>Vale da Moqueca Capixaba</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Moqueca Capixaba</li>
                    <li>Torta Capixaba</li>
                    <li>Chocolates de Vila Velha</li>
                </ul>
            `,
            'images': [
                '../img/es/1.jpg',
                '../img/es/2.jpg',
                '../img/es/3.jpg',
                '../img/es/4.jpg',
                '../img/es/5.jpg'
            ],
            'captions': [
                'Praia de Guarapari',
                'Convento da Penha em Vila Velha',
                'Cidade de Vitória vista do alto',
                'Tradicional Moqueca Capixaba',
                'Torta Capixaba'
            ]
        },
        'pr': {
            'title': 'Estado do Paraná',
            'content': `
                <a class="text m" href="sul.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Paraná é um estado de contrastes espetaculares, onde modernas cidades industriais coexistem com as belezas naturais. Suas terras abrangem desde a exuberante Mata Atlântica até as famosas Cataratas do Iguaçu, uma das maiores maravilhas naturais do mundo. A capital, Curitiba, é conhecida por seu planejamento urbano inovador e áreas verdes. O estado também é famoso pela rica cultura dos imigrantes europeus, especialmente na região dos Campos Gerais.

                Rio Grande do Sul</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Curitiba.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Cataratas do Iguaçu</li>
                    <li>Jardim Botânico de Curitiba</li>
                    <li>Parque Estadual de Vila Velha</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Barreado</li>
                    <li>Pinhão</li>
                    <li>Chimarrão</li>
                </ul>
            `,
            'images': [
                '../img/pr/1.jpg',
                '../img/pr/2.jpg',
                '../img/pr/3.jpg',
                '../img/pr/4.jpg',
                '../img/pr/5.jpg'
            ],
            'captions': [
                'Cataratas do Iguaçu',
                'Jardim Botânico de Curitiba',
                'Parque Estadual de Vila Velha',
                'Prato típico Barreado',
                'Pinhões, semente típica da região'
            ]
        },
        'rs': {
            'title': 'Estado do Rio Grande do Sul',
            'content': `
                <a class="text m" href="sul.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Rio Grande do Sul, com suas vastas planícies e pampas, é o berço da cultura gaúcha. O estado é conhecido por sua forte tradição pecuarista, evidente no famoso churrasco gaúcho e no mate, a bebida típica da região. Suas cidades, como Porto Alegre e Gramado, refletem a influência europeia, especialmente de alemães e italianos. O estado também é o maior produtor de vinho do Brasil, com vinhedos prósperos especialmente na região da Serra Gaúcha.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Porto Alegre.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Vale dos Vinhedos</li>
                    <li>Canyons de Cambará do Sul</li>
                    <li>Mercado Público de Porto Alegre</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Churrasco Gaúcho</li>
                    <li>Chimarrão</li>
                    <li>Galeto Al Primo Canto</li>
                </ul>
            `,
            'images': [
                '../img/rs/2.jpg',
                '../img/rs/3.jpg',
                '../img/rs/4.jpg',
                '../img/rs/5.jpg',
                '../img/rs/6.jpg'
            ],
            'captions': [
                'Vale dos Vinhedos',
                'Canyons de Cambará do Sul',
                'Mercado Público de Porto Alegre',
                'Churrasco Gaúcho',
                'Galeto Al Primo Canto'
            ]
        },
        'sc': {
            'title': 'Estado de Santa Catarina',
            'content': `
                <a class="text m" href="sul.html" style="font-size:15px">Voltar</a>
                <p class="text m">Santa Catarina, um estado que se destaca por suas belas praias, como Florianópolis, e pela diversidade de suas atrações, que vão desde regiões montanhosas a festivais culturais alemães. O estado é também conhecido por sua forte economia, que inclui setores como tecnologia e turismo.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Florianópolis, conhecida como a 'Ilha da Magia', famosa por suas praias e qualidade de vida.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Praia do Rosa</li>
                    <li>Beto Carrero World</li>
                    <li>Oktoberfest de Blumenau</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Ostra Gratinada</li>
                    <li>Churrasco</li>
                    <li>Marreco Recheado</li>
                </ul>
            `,
            'images': [
                '../img/sc/1.jpg',
                '../img/sc/2.jpg',
                '../img/sc/3.jpg',
                '../img/sc/4.jpg',
                '../img/sc/5.jpg'
            ],
            'captions': [
                'Praia do Rosa',
                'Beto Carrero World',
                'Oktoberfest de Blumenau',
                'Ostra Gratinada típica',
                'Churrasco tradicional'
            ]
        },
        'al': {
            'title': 'Estado de Alagoas',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">Alagoas encanta com suas praias de águas cristalinas e areia branca, como Maragogi, conhecida como o "Caribe Brasileiro". O estado também é rico em cultura, com destaque para o folclore e a música, que incluem o Guerreiro, uma dança folclórica típica. A capital Maceió, com suas praias urbanas deslumbrantes, como a Praia de Pajuçara, é conhecida pela hospitalidade e pela culinária local, que faz uso abundante de frutos do mar.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Maceió, famosa por suas lindas praias, como Pajuçara e Ponta Verde, e por seu vibrante mercado de artesanato.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Praia de Maragogi</li>
                    <li>Foz do Rio São Francisco</li>
                    <li>Praia do Gunga</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Sururu de Capote</li>
                    <li>Tapioca</li>
                    <li>Arroz de Polvo</li>
                </ul>
            `,
            'images': [
                '../img/al/1.jpg',
                '../img/al/2.jpg',
                '../img/al/3.jpg',
                '../img/al/4.jpg',
                '../img/al/5.jpg'
            ],
            'captions': [
                'Praia de Maragogi, Alagoas',
                'Foz do Rio São Francisco',
                'Praia do Gunga',
                'Prato de Sururu de Capote',
                'Tapioca, comida típica de Alagoas'
            ]
        },
        'ba': {
            'title': 'Estado da Bahia',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">A Bahia é um estado de vasta cultura, praias deslumbrantes como Porto Seguro, e uma história rica, visível em Salvador, a primeira capital do Brasil. O estado é um caldeirão cultural, famoso pelo seu Carnaval, música vibrante e a influência africana na culinária e nas tradições religiosas. Suas paisagens variam de litorais paradisíacos a sertões áridos, refletindo a diversidade do estado.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Salvador, conhecida por seu centro histórico, o Pelourinho, e a vibrante vida cultural.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Pelourinho, Salvador</li>
                    <li>Costa do Dendê, incluindo Morro de São Paulo</li>
                    <li>Chapada Diamantina</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Acarajé</li>
                    <li>Moqueca Baiana</li>
                    <li>Vatapá</li>
                </ul>
            `,
            'images': [
                '../img/ba/1.jpg',
                '../img/ba/2.jpg',
                '../img/ba/3.jpg',
                '../img/ba/4.jpg',
                '../img/ba/5.jpg'
            ],
            'captions': [
                'Pelourinho, Salvador',
                'Praia em Morro de São Paulo',
                'Vista da Chapada Diamantina',
                'Acarajé, prato típico da Bahia',
                'Moqueca Baiana'
            ]
        },
        'ce': {
            'title': 'Estado do Ceará',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Ceará é famoso por suas extensas praias de areia branca, como Jericoacoara, e por seu patrimônio cultural diversificado, que inclui o forró, a literatura de cordel e o artesanato. A capital, Fortaleza, é um centro urbano vibrante, conhecido pela sua vida noturna animada e pela culinária rica, onde se destaca o uso de frutos do mar. O interior do estado apresenta paisagens únicas, como o sertão e as serras.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Fortaleza, conhecida por suas praias urbanas, como Praia do Futuro, e um forte cenário cultural.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Jericoacoara</li>
                    <li>Beach Park em Aquiraz</li>
                    <li>Canoa Quebrada</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Baião de Dois</li>
                    <li>Peixada Cearense</li>
                    <li>Rapadura</li>
                </ul>
            `,
            'images': [
                '../img/ce/1.jpg',
                '../img/ce/2.jpg',
                '../img/ce/3.jpg',
                '../img/ce/4.jpg',
                '../img/ce/5.jpg'
            ],
            'captions': [
                'Praia de Jericoacoara',
                'Beach Park em Aquiraz',
                'Praia de Canoa Quebrada',
                'Prato de Baião de Dois',
                'Peixada Cearense'
            ]
        },
        'ma': {
            'title': 'Estado do Maranhão',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Maranhão é um estado de rica cultura e belezas naturais únicas, como os Lençóis Maranhenses, um vasto deserto de dunas e lagoas. A capital, São Luís, é conhecida por seu centro histórico colonial, declarado Patrimônio Mundial pela UNESCO, e pela vibrante cultura popular, que inclui o Bumba Meu Boi e o reggae. O estado também se destaca por suas tradições indígenas e pela influência africana na culinária e na música.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é São Luís, famosa por sua arquitetura colonial e festivais culturais.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Lençóis Maranhenses</li>
                    <li>Centro Histórico de São Luís</li>
                    <li>Delta do Parnaíba</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Cuxá</li>
                    <li>Arroz de Cuxá</li>
                    <li>Peixada Maranhense</li>
                </ul>
            `,
            'images': [
                '../img/ma/1.jpg',
                '../img/ma/2.jpg',
                '../img/ma/3.jpg',
                '../img/ma/4.jpg',
                '../img/ma/5.jpg'
            ],
            'captions': [
                'Lençóis Maranhenses',
                'Centro Histórico de São Luís',
                'Delta do Parnaíba',
                'Cuxá, prato típico do Maranhão',
                'Peixada Maranhense'
            ]
        },
        'pb': {
            'title': 'Estado da Paraíba',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">A Paraíba é um estado com uma rica história cultural e lindas praias, como a Praia de Tambaú em João Pessoa. O estado é conhecido por seu patrimônio histórico preservado e pela diversidade de suas paisagens, que incluem litoral, sertão e a zona da mata. A capital João Pessoa é conhecida por ser uma das cidades mais verdes do mundo e por seu centro histórico, que abriga uma das igrejas mais antigas do Brasil.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é João Pessoa, destacando-se por suas praias urbanas e rica história.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Praia de Tambaú</li>
                    <li>Centro Histórico de João Pessoa</li>
                    <li>Praia de Tambaba</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Tapioca</li>
                    <li>Rapadura</li>
                    <li>Carne de Sol com Macaxeira</li>
                </ul>
            `,
            'images': [
                '../img/pb/1.jpg',
                '../img/pb/2.jpg',
                '../img/pb/3.jpg',
                '../img/pb/4.jpg',
                '../img/pb/5.jpg'
            ],
            'captions': [
                'Praia de Tambaú em João Pessoa',
                'Centro Histórico de João Pessoa',
                'Praia de Tambaba',
                'Tapioca, comida típica da Paraíba',
                'Carne de Sol com Macaxeira'
            ]
        },
        'pe': {
            'title': 'Estado de Pernambuco',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">Pernambuco é um estado rico em cultura, história e belezas naturais. Destaca-se por seu Carnaval vibrante, especialmente em Olinda e Recife, onde o frevo anima as ruas. A capital, Recife, é conhecida como a 'Veneza Brasileira' por seus inúmeros rios, pontes e ilhas. O estado também abriga praias paradisíacas como Porto de Galinhas, além de um sertão cheio de tradições. A herança cultural é evidente em sua música, dança e artesanato.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Recife, famosa por sua arquitetura colonial e efervescente vida cultural.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Olinda</li>
                    <li>Porto de Galinhas</li>
                    <li>Instituto Ricardo Brennand</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Bolo de Rolo</li>
                    <li>Feijoada Pernambucana</li>
                    <li>Frutos do Mar em Porto de Galinhas</li>
                </ul>
            `,
            'images': [
                '../img/pe/2.jpg',
                '../img/pe/6.jpg',
                '../img/pe/3.jpg',
                '../img/pe/4.jpg',
                '../img/pe/5.jpg'
            ],
            'captions': [
                'Histórica cidade de Olinda',
                'Praia de Porto de Galinhas',
                'Instituto Ricardo Brennand ',
                'Bolo de Rolo',
                'Feijoada Pernambucana'
            ]
        },
        'pi': {
            'title': 'Estado do Piauí',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Piauí é um estado repleto de tesouros naturais e culturais, conhecido por suas paisagens impressionantes como o Parque Nacional da Serra da Capivara, um sítio arqueológico de importância mundial. A capital, Teresina, é única no Nordeste por ser a única capital da região que não está localizada no litoral, destacando-se por sua cultura e hospitalidade. O estado é também conhecido pela sua culinária saborosa e variada, que inclui pratos como a carne de sol e o baião de dois.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Teresina, conhecida por ser a única capital do Nordeste localizada longe do litoral e por sua rica cultura.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Parque Nacional da Serra da Capivara</li>
                    <li>Delta do Parnaíba</li>
                    <li>Sete Cidades</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Carne de Sol</li>
                    <li>Baião de Dois</li>
                    <li>Cajuína</li>
                </ul>
            `,
            'images': [
                '../img/pi/1.jpg',
                '../img/pi/2.jpg',
                '../img/pi/3.jpg',
                '../img/pi/4.jpg',
                '../img/pi/5.jpg'
            ],
            'captions': [
                'Parque  da Serra da Capivara',
                'Delta do Parnaíba',
                'Parque Nacional de Sete Cidades',
                'Prato de Carne de Sol',
                'Bebida de Cajuína típica do Piauí'
            ]
        },
        'rn': {
            'title': 'Estado do Rio Grande do Norte',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Rio Grande do Norte é famoso por suas deslumbrantes praias e dunas majestosas, como as de Genipabu. A capital, Natal, é conhecida pela sua beleza natural, fortes históricos e pela proximidade com a Praia de Ponta Negra. O estado também se destaca na produção de energia eólica e é famoso por suas festas de São João. Sua culinária inclui pratos à base de frutos do mar, como a ginga com tapioca, um prato típico da região.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Natal, conhecida pelas suas praias urbanas, como Ponta Negra, e por ser um importante polo turístico do Nordeste.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Dunas de Genipabu</li>
                    <li>Praia de Ponta Negra</li>
                    <li>Forte dos Reis Magos</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Ginga com Tapioca</li>
                    <li>Caranguejada</li>
                    <li>Paçoca de Pilão</li>
                </ul>
            `,
            'images': [
                '../img/rn/1.jpg',
                '../img/rn/2.jpg',
                '../img/rn/3.jpg',
                '../img/rn/4.jpg',
                '../img/rn/5.jpg'
            ],
            'captions': [
                'Dunas de Genipabu',
                'Praia de Ponta Negra, Natal',
                'Forte dos Reis Magos',
                'Ginga com Tapioca, prato típico',
                'Caranguejada'
            ]
        },
        'se': {
            'title': 'Estado de Sergipe',
            'content': `
                <a class="text m" href="nordeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">Sergipe, o menor estado do Brasil, surpreende pela sua rica cultura e diversidade natural. Destaca-se por suas belas praias, como a Praia do Saco, e por sua capital, Aracaju, conhecida pela hospitalidade e por ser uma das capitais com melhor qualidade de vida no Nordeste. O estado também é famoso pelo Forró e pelo Cacique de Ramos, um dos mais importantes blocos de carnaval de rua do Brasil. A culinária sergipana é rica, com pratos típicos como o caruru e a moqueca sergipana.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Aracaju, conhecida por suas praias urbanas e por ser um centro cultural e histórico.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Orla de Atalaia em Aracaju</li>
                    <li>Praia do Saco</li>
                    <li>Cânion do Xingó no Rio São Francisco</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Caruru</li>
                    <li>Moqueca Sergipana</li>
                    <li>Abará</li>
                </ul>
            `,
            'images': [
                '../img/se/1.jpg',
                '../img/se/2.jpg',
                '../img/se/3.jpg',
                '../img/se/4.jpg',
                '../img/se/5.jpg'
            ],
            'captions': [
                'Orla de Atalaia, Aracaju',
                'Praia do Saco',
                'Cânion do Xingó no Rio São Francisco',
                'Prato de Caruru',
                'Moqueca Sergipana'
            ]
        },
        'ac': {
            'title': 'Estado do Acre',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Acre, conhecido por sua história marcante na Revolução Acreana e por suas densas florestas amazônicas, é um estado de grande importância ecológica e cultural. A capital, Rio Branco, oferece um vislumbre da rica história do estado e da cultura indígena. O Acre também é famoso pela produção de borracha e por ser o lar de importantes reservas ecológicas, que abrigam uma rica biodiversidade.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Rio Branco, conhecida por seu patrimônio histórico e cultural ligado à era da borracha.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Parque Nacional da Serra do Divisor</li>
                    <li>Palácio Rio Branco</li>
                    <li>Parque Ambiental Chico Mendes</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Tacacá</li>
                    <li>Peixes da Amazônia</li>
                    <li>Moqueca de Pirarucu</li>
                </ul>
            `,
            'images': [
                '../img/ac/1.jpg',
                '../img/ac/2.jpg',
                '../img/ac/3.jpg',
                '../img/ac/4.jpg',
                '../img/ac/5.jpg'
            ],
            'captions': [
                'Parque da Serra do Divisor',
                'Palácio Rio Branco',
                'Parque Ambiental Chico Mendes',
                'Tacacá, prato típico do Acre',
                'Moqueca de Pirarucu'
            ]
        },
        'ap': {
            'title': 'Estado do Amapá',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Amapá, localizado no extremo norte do Brasil, é conhecido por suas vastas áreas de floresta amazônica e rica biodiversidade. A capital, Macapá, é única por estar localizada no Equador e por abrigar o Marco Zero. O estado é famoso por suas paisagens naturais intocadas, incluindo o Parque Nacional do Cabo Orange e a Reserva Biológica do Lago Piratuba. Sua cultura é influenciada pela presença de comunidades indígenas e pela proximidade com as Guianas.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Macapá, conhecida pelo Forte de São José de Macapá e como porta de entrada para a Amazônia.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Forte de São José de Macapá</li>
                    <li>Parque Nacional do Cabo Orange</li>
                    <li>Reserva Biológica do Lago Piratuba</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Caldeirada de Tucunaré</li>
                    <li>Maniçoba</li>
                    <li>Tartaruga na Tapioca</li>
                </ul>
            `,
            'images': [
                '../img/ap/1.jpg',
                '../img/ap/2.jpg',
                '../img/ap/3.jpg',
                '../img/ap/4.jpg',
                '../img/ap/5.jpg'
            ],
            'captions': [
                'Forte de São José de Macapá',
                'Parque Nacional do Cabo Orange',
                'Reserva do Lago Piratuba',
                'Caldeirada de Tucunaré',
                'Maniçoba'
            ]
        },
        'am': {
            'title': 'Estado do Amazonas',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Amazonas é um estado brasileiro conhecido por abrigar grande parte da Floresta Amazônica, a maior floresta tropical do mundo, oferecendo uma riqueza inigualável de biodiversidade. Sua capital, Manaus, é um importante centro urbano na região Norte e ponto de partida para explorar a Amazônia. O estado é famoso por fenômenos naturais como o encontro das águas dos rios Negro e Solimões e pela diversidade de sua fauna e flora.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Manaus, conhecida pela sua arquitetura histórica, como o Teatro Amazonas, e como um centro de ecoturismo.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Teatro Amazonas em Manaus</li>
                    <li>Encontro das Águas dos rios Negro e Solimões</li>
                    <li>Reserva de Desenvolvimento Sustentável Mamirauá</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Tacacá</li>
                    <li>Pirarucu de Casaca</li>
                    <li>Tambaqui Assado</li>
                </ul>
            `,
            'images': [
                '../img/am/1.jpg',
                '../img/am/2.jpg',
                '../img/am/3.jpg',
                '../img/am/4.jpg',
                '../img/am/5.jpg'
            ],
            'captions': [
                'Teatro Amazonas em Manaus',
                'Encontro rio Negro e Solimões',
                'Reserva Sustentável Mamirauá',
                'Tacacá, prato típico do Amazonas',
                'Pirarucu de Casaca'
            ]
        },
        'pa': {
            'title': 'Estado do Pará',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Pará, um estado de vastos recursos naturais e culturais, é famoso pela Floresta Amazônica, pelo rio Amazonas e por suas ricas tradições culturais. A capital, Belém, é conhecida por seu patrimônio histórico e arquitetônico e pela vibrante culinária local, que inclui pratos como o pato no tucupi e a maniçoba. O estado também é famoso pela festa do Círio de Nazaré, um dos maiores eventos religiosos do Brasil.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Belém, conhecida pelo mercado Ver-o-Peso e pelo complexo cultural e histórico de Feliz Lusitânia.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Ver-o-Peso, Belém</li>
                    <li>Ilha de Marajó</li>
                    <li>Alter do Chão</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Pato no Tucupi</li>
                    <li>Maniçoba</li>
                    <li>Açaí</li>
                </ul>
            `,
            'images': [
                '../img/pa/1.jpg',
                '../img/pa/2.jpg',
                '../img/pa/3.jpg',
                '../img/pa/4.jpg',
                '../img/pa/5.jpg'
            ],
            'captions': [
                'Mercado Ver-o-Peso em Belém',
                'Ilha de Marajó',
                'Praia de Alter do Chão',
                'Prato de Pato no Tucupi',
                'Maniçoba'
            ]
        },
        'ro': {
            'title': 'Estado de Rondônia',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">Rondônia, situada na região Norte do Brasil, é conhecida por sua impressionante diversidade natural e por ser um dos principais pontos de acesso à Floresta Amazônica. A capital, Porto Velho, localiza-se às margens do rio Madeira, um dos principais afluentes do Amazonas. O estado é um importante centro para a pecuária, a agricultura e a mineração, e também é famoso por suas riquezas culturais e históricas, particularmente relacionadas à expansão da borracha e à Ferrovia Madeira-Mamoré.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Porto Velho, que combina uma atmosfera urbana com a proximidade da natureza selvagem da Amazônia.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Ferrovia Madeira-Mamoré</li>
                    <li>Parque Natural de Pacaás Novos</li>
                    <li>Floresta Nacional do Jamari</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Pirarucu à Rondoniense</li>
                    <li>Tambaqui Assado</li>
                    <li>Farofa de Banana</li>
                </ul>
            `,
            'images': [
                '../img/ro/1.jpg',
                '../img/ro/2.jpg',
                '../img/ro/3.jpg',
                '../img/ro/4.jpg',
                '../img/ro/5.jpg'
            ],
            'captions': [
                'Ferrovia Madeira-Mamoré',
                'Parque Natural de Pacaás Novos',
                'Floresta Nacional do Jamari',
                'Pirarucu à Rondoniense',
                'Tambaqui Assado'
            ]
        },
        'rr': {
            'title': 'Estado de Roraima',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">Roraima, localizado no extremo norte do Brasil, é um estado de paisagens únicas e vastas áreas naturais. Destaca-se pela grandiosidade do Monte Roraima, um dos pontos mais altos do Brasil, e pela presença de imensas savanas. Sua capital, Boa Vista, é conhecida pela sua planejamento urbano e pela influência indígena na cultura. O estado é um destino fascinante para o ecoturismo e aventuras na natureza, oferecendo experiências únicas na Amazônia.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Boa Vista, com um planejamento urbano que se destaca na região e uma cultura rica e diversificada.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Monte Roraima</li>
                    <li>Parque Nacional do Viruá</li>
                    <li>Reserva Indígena de São Marcos</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Damorida (prato indígena)</li>
                    <li>Peixe no Tucupi</li>
                    <li>Sorvete de Cupuaçu</li>
                </ul>
            `,
            'images': [
                '../img/rr/1.jpg',
                '../img/rr/2.jpg',
                '../img/rr/3.jpg',
                '../img/rr/4.jpg',
                '../img/rr/5.jpg'
            ],
            'captions': [
                'Monte Roraima',
                'Parque Nacional do Viruá',
                'Reserva Indígena de São Marcos',
                'Damorida, prato típico indígena',
                'Sorvete de Cupuaçu'
            ]
        },
        'to': {
            'title': 'Estado do Tocantins',
            'content': `
                <a class="text m" href="norte.html" style="font-size:15px">Voltar</a>
                <p class="text m">Tocantins é um estado de contrastes naturais, famoso pelo Parque Estadual do Jalapão, uma área de beleza cênica com dunas, nascentes e formações rochosas. A capital, Palmas, é conhecida por sua modernidade e planejamento urbano. O estado é um mosaico de cerrado e florestas, com uma rica biodiversidade. A cultura local é uma mistura de influências das regiões vizinhas, com festivais típicos e uma culinária que reflete a diversidade do estado.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Palmas, uma cidade planejada com belas praias fluviais e uma arquitetura moderna.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Parque Estadual do Jalapão</li>
                    <li>Praia da Graciosa em Palmas</li>
                    <li>Cachoeira da Velha</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Peixe na Telha</li>
                    <li>Pamonha de Milho</li>
                    <li>Empadão Goiano</li>
                </ul>
            `,
            'images': [
                '../img/to/1.jpg',
                '../img/to/2.jpg',
                '../img/to/3.jpg',
                '../img/to/4.jpg',
                '../img/to/5.jpg'
            ],
            'captions': [
                'Parque Estadual do Jalapão',
                'Praia da Graciosa em Palmas',
                'Cachoeira da Velha no Tocantins',
                'Peixe na Telha, prato típico',
                'Pamonha de Milho'
            ]
        },
        'go': {
            'title': 'Estado de Goiás',
            'content': `
                <a class="text m" href="centro-oeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">Goiás é um estado que combina a beleza do Cerrado com uma rica história cultural. Conhecido pelas cidades históricas como Pirenópolis e por suas fontes termais em Caldas Novas, Goiás é também famoso pela culinária saborosa e pela música sertaneja. A capital, Goiânia, é conhecida por sua arquitetura Art Déco e por ser um importante polo cultural e econômico. O estado também abriga o Parque Nacional da Chapada dos Veadeiros, um patrimônio natural da humanidade.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Goiânia, conhecida por suas áreas verdes e pela cultura vibrante.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Parque Nacional da Chapada dos Veadeiros</li>
                    <li>Caldas Novas</li>
                    <li>Pirenópolis</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Pamonha</li>
                    <li>Empadão Goiano</li>
                    <li>Pequi</li>
                </ul>
            `,
            'images': [
                '../img/go/1.jpg',
                '../img/go/2.jpg',
                '../img/go/3.jpg',
                '../img/go/4.jpg',
                '../img/go/5.jpg'
            ],
            'captions': [
                'Parque da Chapada dos Veadeiros',
                'Águas termais de Caldas Novas',
                'Cidade histórica de Pirenópolis',
                'Pamonha, prato típico de Goiás',
                'Empadão Goiano'
            ]
        },
        'mt': {
            'title': 'Estado de Mato Grosso',
            'content': `
                <a class="text m" href="centro-oeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">Mato Grosso é um estado de grande diversidade ecológica, abrigando parte da Amazônia, do Pantanal e do Cerrado. É conhecido por sua rica fauna e flora, além de ser um importante destino para o ecoturismo e pesca esportiva. A capital, Cuiabá, é um ponto de partida para explorar as belezas naturais do estado, como a Chapada dos Guimarães. Mato Grosso também tem uma forte cultura agropecuária e é conhecido por pratos típicos como o arroz com pequi e a moqueca de pintado.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Cuiabá, conhecida como a porta de entrada para o Pantanal e a Chapada dos Guimarães.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Pantanal Mato-Grossense</li>
                    <li>Chapada dos Guimarães</li>
                    <li>Parque Nacional do Araguaia</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Arroz com Pequi</li>
                    <li>Moqueca de Pintado</li>
                    <li>Farofa de Banana</li>
                </ul>
            `,
            'images': [
                '../img/mt/1.jpg',
                '../img/mt/2.jpg',
                '../img/mt/3.jpg',
                '../img/mt/4.jpg',
                '../img/mt/5.jpg'
            ],
            'captions': [
                'Pantanal Mato-Grossense',
                'Chapada dos Guimarães',
                'Parque Nacional do Araguaia',
                'Prato de Arroz com Pequi',
                'Moqueca de Pintado, prato típico'
            ]
        },
        'ms': {
            'title': 'Estado de Mato Grosso do Sul',
            'content': `
                <a class="text m" href="centro-oeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">Mato Grosso do Sul é um estado que se destaca por suas paisagens naturais exuberantes, como o Pantanal, um dos maiores ecossistemas de áreas úmidas do mundo. A capital, Campo Grande, é conhecida como um importante centro agropecuário e pela sua cultura diversificada. O estado também é famoso por atrativos naturais como a Serra da Bodoquena e as águas cristalinas de Bonito, um paraíso para o ecoturismo e a prática de mergulho.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do estado é Campo Grande, conhecida por seu dinamismo e por ser um ponto de partida para explorar as belezas naturais do estado.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Pantanal Sul-Mato-Grossense</li>
                    <li>Bonito</li>
                    <li>Parque Nacional da Serra da Bodoquena</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Sobá</li>
                    <li>Churrasco Pantaneiro</li>
                    <li>Pacu Assado</li>
                </ul>
            `,
            'images': [
                '../img/ms/1.jpg',
                '../img/ms/2.jpg',
                '../img/ms/3.jpg',
                '../img/ms/4.jpg',
                '../img/ms/5.jpg'
            ],
            'captions': [
                'Pantanal Sul-Mato-Grossense',
                'Águas cristalinas de Bonito',
                'Parque da Serra da Bodoquena',
                'Sobá',
                'Churrasco Pantaneiro'
            ]
        },
        'df': {
            'title': 'Distrito Federal',
            'content': `
                <a class="text m" href="centro-oeste.html" style="font-size:15px">Voltar</a>
                <p class="text m">O Distrito Federal, coração político do Brasil, é marcado pela impressionante arquitetura de Brasília, a capital federal, planejada por Lúcio Costa e Oscar Niemeyer. Conhecida por seus edifícios icônicos e design urbanístico inovador, Brasília é um Patrimônio Cultural da Humanidade pela UNESCO. Além de ser um centro político, o Distrito Federal também tem uma vibrante cena cultural, com diversos museus, galerias e eventos culturais.</p>
        
                <h2 class="text text">Capital:</h2>
                <p class="text m">A capital do Brasil, Brasília, é conhecida por sua arquitetura modernista e por ser o centro das decisões políticas do país.</p>
                <h2 class="info text">Atrações Turísticas:</h2>
                <ul class="m">
                    <li>Esplanada dos Ministérios</li>
                    <li>Congresso Nacional</li>
                    <li>Parque Nacional de Brasília</li>
                </ul>
                <h2 class="text">Comidas Típicas:</h2>
                <ul class="m">
                    <li>Arroz Carreteiro</li>
                    <li>Feijoada</li>
                    <li>Torta de Morango com Chocolate</li>
                </ul>
            `,
            'images': [
                '../img/df/1.jpg',
                '../img/df/2.jpg',
                '../img/df/3.jpg',
                '../img/df/4.jpg',
                '../img/df/5.jpg'
            ],
            'captions': [
                'Esplanada dos Ministérios',
                'Congresso Nacional',
                'Parque Nacional de Brasília',
                'Arroz Carreteiro, prato típico',
                'Torta de Morango com Chocolate'
            ]
        },   
    };

    if (stateContent[stateCode]) {
        const imagesHTML = stateContent[stateCode].images.map((src, index) => `
            <figure>
                <img src="${src}" alt="Imagem de ${stateContent[stateCode].title}">
                <figcaption>${stateContent[stateCode].captions[index]}</figcaption>
            </figure>
        `).join('');
        
        estadoContent.innerHTML = `
        <div class="alignF">
            <div class="content-estado">
                <h1>${stateContent[stateCode].title}</h1>
                <p>${stateContent[stateCode].content}</p>
                <div class="img-container">
                    ${imagesHTML}
                </div>
            </div>
        </div>
        `;
        document.title = stateContent[stateCode].title + ' - Brasil';
    } else {
        estadoContent.innerHTML = '<p>Informação do estado não encontrada.</p>';
    }
});
