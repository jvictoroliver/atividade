const PLACES = [
  {
    name: 'Campos do Jordão',
    state: 'São Paulo',
    poster: 'https://a.cdn-hotels.com/gdcs/production174/d1073/2526a552-e1f6-40ab-ae5d-97f68965d157.jpg',
  },
  {
    name: 'Bonito',
    state: 'Mato Grosso do Sul',
    poster: 'https://www.agenciabonitodemais.com.br/wp-content/uploads/2023/02/bonito-ms-a-origem-conheca-a-historia-da-cidade-1.webp',
  },
  {
    name: 'Porto Seguro',
    state: 'Bahia',
    poster: 'https://sueds.com.br/wp-content/uploads/2022/04/Porto-Seguro-e-os-522-anos-do-Brasil.jpg',
  },
  {
    name: 'Canela',
    state: 'Rio Grande do Sul',
    poster: 'https://www.mialves.com/wp-content/uploads/2017/06/canela-rs.jpg',
  },
  {
    name: 'Morretes',
    state: 'Paraná',
    poster: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2022/05/Litorina-no-Viaduto-do-Carvalho-fundado-em-1885-PR.jpg?quality=70&strip=info',
  },
  {
    name: 'Maragogi',
    state: 'Alagoas',
    poster: 'https://a.cdn-hotels.com/gdcs/production81/d1776/f40d0c74-1d50-44db-b374-c87660dd0c78.jpg',
  },
  {
    name: 'Itacaré',
    state: 'Bahia',
    poster: 'https://i0.wp.com/jornalgrandebahia.com.br/wp-content/uploads/2022/07/Praia-de-Itacare-20220720.jpg?fit=2400%2C1600&ssl=1',
  },
  {
    name: 'Vassouras',
    state: 'Rio de Janeiro',
    poster: 'https://www.viajali.com.br/wp-content/uploads/2020/10/vassouras-rj-1.jpg',
  },
];

const PLACES_DETAILS = [
  {
    name: 'Campos do Jordão',
    state: 'São Paulo',
    poster: 'https://a.cdn-hotels.com/gdcs/production174/d1073/2526a552-e1f6-40ab-ae5d-97f68965d157.jpg',
    details: {
      about: [
        'Campos do Jordão é um município brasileiro localizado no interior do estado de São Paulo mais precisamente na Serra da Mantiqueira. Faz parte da recém-criada Região Metropolitana do Vale do Paraíba e Litoral Norte, sub-região 2 de Taubaté.',
        'A cidade fica à altitude de 1 628 metros, sendo portanto, o mais alto município brasileiro, considerando a altitude da sede. Distante 183 quilômetros da cidade de São Paulo, suas principais vias de acesso são a Rodovia Floriano Rodrigues Pinheiro e a Estrada de Ferro Campos do Jordão',
        'Campos do Jordão é chamada de "Suíça Brasileira", como estratégia de marketing, pela sua arquitetura tardia baseada em construções europeias e pelo seu clima mais frio que a média brasileira. Por isso, a cidade recebe maior quantidade de turistas tanto nacionais quanto internacionais durante a estação do inverno, especialmente no mês de julho.'
      ],
      population: 46974,
      area: 290.52,
      galery: [
        'https://viajandosemtedio.com.br/wp-content/uploads/2020/12/campos_guardachuvas_site.jpg',
        'https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/01/o-que-fazer-em-campos-do-jordao-740x415.jpg',
        'https://a.cdn-hotels.com/gdcs/production53/d201/534fcf3d-a5c7-4323-b22f-060369c75b7e.jpg',
        'https://www.passaromarron.com.br/wp-content/uploads/2022/11/bars-and-restaurants-in-downtown-campos-do-jordao-brazil.jpg'
      ]
    }
  },
  {
    name: 'Bonito',
    state: 'Mato Grosso do Sul',
    poster: 'https://www.agenciabonitodemais.com.br/wp-content/uploads/2023/02/bonito-ms-a-origem-conheca-a-historia-da-cidade-1.webp',
    details: {
      about: [
        'Bonito é um município brasileiro da região Centro-Oeste, situado no estado de Mato Grosso do Sul. Pólo do ecoturismo, suas principais atrações são as paisagens naturais, os mergulhos em rios de águas transparentes, cachoeiras, grutas, cavernas e dolinas',
        'Juntamente com Jardim, Guia Lopes da Laguna e Bodoquena, é o principal município que integra o complexo turístico do Parque Nacional da Serra da Bodoquena, apresentando grande potencial turístico. Com diversos tipos de fauna e flora, Bonito foi considerado um dos lugares mais bonitos do Brasil em 2009.',
        'Existem mais de 4.000 espécies de plantas e suas águas e rios podem abrigar mais de 2.000 espécies de peixes e aquáticos. '
      ],
      population: 23659,
      area: 5373.016,
      galery: [
        'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/03/Gruta-do-Lago-Azul-Hudson-Garcia-11-1_Easy-Resize.com_.jpg',
        'https://www.estanciamimosa.eco.br/blog/wp-content/uploads/2022/11/cachoeiras-em-bonito-ms-estancia-mimosa-ecoturismo-2-scaled.jpg',
        'https://www.bonitoway.com.br/public/posts/bonito_ms_setembro_e.png?1567544063',
        'https://www.feriasbrasil.com.br/fotosfb/992080153-G.jpg'
      ]
    }
  },
  {
    name: 'Porto Seguro',
    state: 'Bahia',
    poster: 'https://sueds.com.br/wp-content/uploads/2022/04/Porto-Seguro-e-os-522-anos-do-Brasil.jpg',
    details: {
      about: [
        'Porto Seguro (região inicialmente chamada Nhoesembé) é um município situado no litoral e sul do estado da Bahia, no Brasil. Compartilha, com os municípios limítrofes de Santa Cruz Cabrália e Prado, a primazia de ser o local de chegada dos portugueses ao Brasil em 1500.',
        'O vilarejo que deu origem ao município de Porto Seguro foi fundado em 1535 e está tombado em quase sua totalidade pelo patrimônio histórico, não sendo permitida a construção de prédios altos (com mais de dois andares). É cortado pelo Rio Buranhém. Com os distritos Porto Seguro (sede), Arraial dAjuda, Caraíva, Trancoso, Vale Verde.'
      ],
      population: 167955,
      area: 43.76,
      galery: [
        'https://a.cdn-hotels.com/gdcs/production144/d1612/cd5f37fa-836f-41d2-9c62-c456369df43e.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        'https://blog.hurb.com/wp-content/uploads/2022/11/coroa-vermelha-porto-seguro-bahia-1140x675.png',
        'https://www.battstour.com/wp-content/uploads/2020/02/porto-seguro.jpg',
        'https://blog.proprietariodireto.com.br/wp-content/uploads/2023/07/Porto-Seguro-BA.png'
      ]
    }
  },
  {
    name: 'Canela',
    state: 'Rio Grande do Sul',
    poster: 'https://www.mialves.com/wp-content/uploads/2017/06/canela-rs.jpg',
    details: {
      about: [
        'Canela é um município brasileiro do estado do Rio Grande do Sul. Localiza-se na Serra Gaúcha, mais precisamente na Região das Hortênsias, e faz divisa com as cidades de Gramado, São Francisco de Paula, Caxias do Sul e Três Coroas. A cidade é conhecida por atrações turísticas como a Cascata do Caracol, o Parque da Ferradura e a Catedral de Pedra.',
        'Um dos mais importantes destinos turísticos do Rio Grande do Sul, a cidade de Canela teve seu primeiro núcleo urbano formado em 1903, quando o Coronel João Ferreira Corrêa da Silva se instalou no local. Em 28 de dezembro de 1944, a Lei Estadual nº 717 criou o município, que foi instalado quatro dias depois em 1º de janeiro de 1945.'
      ],
      population: 45957,
      area: 253.002,
      galery: [
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2022/10/canela-o-que-fazer23-820x615.jpeg',
        'https://malaprontagramado.com.br/wp-content/uploads/2020/04/catedral-nossa-senhora-canela.jpg',
        'https://thumbcdn-z.hotelurbano.net/PIBLISWG4SeeTLE_EkVqT5Q0Ieo=/origxorig/center/middle/filters:quality(70)/https://thumbcdn-z.hotelurbano.net/iQk0ZUcjeLbksgmlL9aZ3tS7qVM=/fit-in/576x904/smart/filters:format(png)/s3.amazonaws.com%252Fghucdn%252Fstatic%252Fcms-uploads%252Fuploads%252F2023%252F09%252Fcachoeira-canela-caracol2.png',
        'https://www.blogcanelars.com.br/tim.php?src=uploads/slides/2022/05/gramado-rs.jpg&w=1920&h=800'
      ]
    }
  },
  {
    name: 'Morretes',
    state: 'Paraná',
    poster: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2022/05/Litorina-no-Viaduto-do-Carvalho-fundado-em-1885-PR.jpg?quality=70&strip=info',
    details: {
      about: [
        'Até o século XVI, a região atual do município era território dos índios carijós, etnia indígena que ocupava a faixa litorânea brasileira desde Cananeia até a Lagoa dos Patos. A partir de 1646, com a descoberta de jazidas de ouro, a região passou a ser ocupada por mineradores e aventureiros provenientes da cidade de São Paulo. Em 1721, foi fundado, oficialmente, o povoado de Morretes.',
        'Foi o ouvidor Rafael Pires Pardinho quem determinou que a Câmara Municipal de Paranaguá autorizasse a medição e demarcação de trezentas braças em quadra, para a instalação do povoado de Morretes. A partir de meados do século XVIII, os parnanguaras capitão Antonio Rodrigues de Carvalho e sua mulher Maria Gomes Setúbal se estabelecem em Morretes, onde logo construíram uma capela, dedicando-a Nossa Senhora do Porto e Menino Deus dos Três Morretes. Em 21 de julho de 1769, o padre Francisco de Meira Calassa abençoou a capela morretense.',
        'A partir desta época, o lugar teve grande crescimento, com o setor comercial tornando-se ponto de referência obrigatória aos viajantes de serra acima e rio abaixo.'
      ],
      population: 16366,
      area: 684580,
      galery: [
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Morretes_%28by_sidney.gauss%29_-_panoramio.jpg',
        'https://cdn.temporadalivre.com/blog-media/posts/cover/10590/size_800_conheca-a-historica-morretes-no-parana-99dd25e4.jpg',
        'https://estrangeira.com.br/wp-content/uploads/2021/08/o-que-fazer-em-morretes-centro-historico.jpg',
        'https://i0.wp.com/ateondeeupuderir.com/wp-content/uploads/2018/09/trem-morretes-6.jpg?resize=820%2C394&ssl=1'
      ]
    }
  },
  {
    name: 'Maragogi',
    state: 'Alagoas',
    poster: 'https://a.cdn-hotels.com/gdcs/production81/d1776/f40d0c74-1d50-44db-b374-c87660dd0c78.jpg',
    details: {
      about: [
        'Maragogi é um município da Microrregião do Litoral Norte Alagoano, na Mesorregião do Leste Alagoano, no estado de Alagoas, no Brasil. Localiza-se a 125 quilômetros de Maceió, a capital do estado. Localiza-se na latitude 09º00\'44\" sul e na longitude 35º13\'21\" oeste, estando a uma altitude de 5 metros.',
        'Sua população estimada em 2018 foi de 32.369 habitantes. A temperatura média é de 27 graus Celsius. Sua economia é baseada no turismo, na pesca e na agricultura. A beleza de suas praias faz com que seja um dos mais importantes polos turísticos da região.'
      ],
      population: 32174,
      area: 335,
      galery: [
        'https://a.cdn-hotels.com/gdcs/production30/d1708/e2462d81-6017-47c4-b226-f6035c1928ea.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        'https://www.civitatis.com/f/brasil/maceio/excursion-maragogi-589x392.jpg',
        'https://paraisodoscoqueirais.com.br/wp-content/uploads/2021/10/maragogi.webp',
        'https://www.viajenaviagem.com/wp-content/uploads/2023/11/grand-oca-maragogi-1920x1080-1.jpg'
      ]
    }
  },
  {
    name: 'Itacaré',
    state: 'Bahia',
    poster: 'https://i0.wp.com/jornalgrandebahia.com.br/wp-content/uploads/2022/07/Praia-de-Itacare-20220720.jpg?fit=2400%2C1600&ssl=1',
    details: {
      about: [
        'Por volta do ano 1000, a região foi invadida pelos tupis, que expulsaram os antigos habitantes, falantes de línguas do tronco linguístico macro-jê, para o interior do continente. No século XVI, quando os primeiros europeus chegaram à região, ela estava ocupada pela etnia tupi dos tupiniquins.[9] No século XVI, o jesuíta Luís da Grã fundou uma capela dedicada a são Miguel. O jesuíta, então, batizou a povoação ao redor da capela como "São Miguel da Barra do Rio de Contas", juntamente com o município de Ubaitaba, que chamava-se Itapira, sede do município de São Miguel da Barra do Rio de Contas.',
        'A povoação foi elevada a sede de município em 1732 e Ubaitaba (até então denominada Itapira), tornou-se seu distrito, por obra de dona Maria Athaíde e Castro, a condessa do Resende, donatária da capitania de Ilhéus. O município passou a ter a sua designação atual somente em 1931.'
      ],
      population: 27725,
      area: 726265,
      galery: [
        'https://www.viagempreferida.com.br/wp-content/uploads/2019/02/As-praias-paradis%C3%ADacas-de-Itacar%C3%A9-e-suas-maravilhas-tur%C3%ADsticas.jpg',
        'https://i0.wp.com/nordestetur.com.br/wp-content/uploads/2022/04/Itacare-BA-MTur.jpg?fit=1008%2C567&ssl=1',
        'https://www.cabanacorais.com.br/images/itacare.png',
        'https://blogmaladeviagem.com.br/wp-content/uploads/2022/01/itacare-blog-mv.jpg'
      ]
    }
  },
  {
    name: 'Vassouras',
    state: 'Rio de Janeiro',
    poster: 'https://www.viajali.com.br/wp-content/uploads/2020/10/vassouras-rj-1.jpg',
    details: {
      about: [
        'A 5 de outubro de 1782, o açoriano Francisco Rodrigues Alves e o seu sócio Luís Homem de Azevedo, que residiam em Sacra Família do Tinguá (atualmente distrito do município de Engenheiro Paulo de Frontin), recebem uma sesmaria no "sertão da Serra de Santana, Mato Dentro por detrás do Morro Azul". Posteriormente, tais terras serão conhecidas por “Sesmaria de Vassouras e Rio Bonito".',
        'À localidade, plena de arbustos utilizados na confecção de vassouras, dá-se, obviamente, o nome Vassouras.',
        'Vassouras está localizada no que se posteriormente nomeou-se Vale do Paraíba. Esta região tornou-se conhecida como Caminho Novo e o Caminho do Proença pois faziam a ligação entre Minas Gerais durante o período de seu ciclo do ouro e o porto do Rio de Janeiro, servindo para o escoamento dessa produção destinada ao Império Português.'
      ],
      population: 33976,
      area: 536073,
      galery: [
        'https://lh3.googleusercontent.com/proxy/8GAqPApXPobraXRpmRzUXoHmUEXqVCLfc3HSuJuDD8u6SJT0x0M1aaTYOfmBmnTaZ5OvKOB7ScU6OJm5NYf_Vwd4U5GZqgWPKengJ4Clem7XlC4Crbw0F2SS2zSNQI-1aaM1BycmEefBtRSPuqJUcW1UPUgXR4HewQ4SQ-z2SHU4NszmYKR_',
        'https://www.ipatrimonio.org/wp-content/uploads/2017/05/Vassouras-Conjunto-Paisag%C3%ADstico-e-Urban%C3%ADstico-Imagem-Iphan-2.jpg',
        'https://panoramadeviagem.com.br/wp-content/uploads/2020/07/atracoes-centro-vassouras-1280x720.jpg',
        'https://cdn2.revistahoteis.com.br/wp-content/uploads/2016/06/TremdoBarao3.jpg'
      ]
    }
  },
]

export { PLACES, PLACES_DETAILS };