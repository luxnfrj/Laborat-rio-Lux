let dados = [
    {
        Título: "Espectrofotômetro UV-Vis",
        Descrição: "O espectrofotômetro UV-Vis é um instrumento utilizado para medir a intensidade da luz absorvida por uma amostra em função do comprimento de onda. É amplamente utilizado em química analítica para quantificar substâncias e analisar reações químicas.",
        Link: "https://www.thermofisher.com/br/pt/home/life-science/spectroscopy/uv-visible-spectroscopy.html",
        Tags: "espectrofotometro equipamento intesidade da luz"
    },
    {
        Título: "Centrífuga",
        Descrição: "A centrífuga é um equipamento que utiliza a força centrífuga para separar componentes de uma amostra, como células, organelas e partículas. É essencial em diversas áreas, como biologia molecular e bioquímica.",
        Link: "https://www.eppendorf.com/br-pt/centrifuges/",
        Tags: "separação separacao forca centrifuga força centrífuga"
    },
    {
        Título: "Micropipeta",
        Descrição: "A micropipeta é um instrumento de precisão utilizado para transferir volumes muito pequenos de líquidos. É amplamente utilizada em laboratórios de biologia molecular e química.",
        Link: "https://www.gilson.com/br/pt/produtos/micropipetas",
        Tags: "pipeta equipamento transferir volumes volume"
    },
    {
        Título: "Balança Analítica",
        Descrição: "A balança analítica é um instrumento de alta precisão utilizado para medir a massa de pequenas quantidades de substâncias. É essencial em diversas áreas, como química e farmacologia.",
        Link: "https://www.shimadzu.com.br/produtos/balanca-analitica/",
        Tags: "balanca precisao massa"
    },
    {
        Título: "pHmetro",
        Descrição: "O pHmetro é um instrumento utilizado para medir o pH de uma solução, ou seja, sua acidez ou alcalinidade. É amplamente utilizado em química e biologia.",
        Link: "https://www.hannainstruments.com.br/phmetros",
        Tags: "phmetro ph acidez alcalinidade"
    },
    {
        Título: "Microscópio",
        Descrição: "O microscópio é um instrumento utilizado para observar objetos muito pequenos, invisíveis a olho nu. É essencial em diversas áreas, como biologia e medicina.",
        Link: "https://www.olympus-ims.com/pt-br/microscopy/",
        Tags: "microscopio observar celulas bacterias"
    },
    {
        Título: "Estufa",
        Descrição: "A estufa é um equipamento utilizado para secar ou esterilizar materiais de laboratório em altas temperaturas. É essencial em diversos áreas, como microbiologia e química.",
        Link: "https://www.marconi.com.br/produtos/estufas/",
        Tags: "estufa secar esterilizar"
    },
    {
        Título: "Autoclave",
        Descrição: "A autoclave é um equipamento utilizado para esterilizar materiais de laboratório utilizando vapor de água sob alta pressão e temperatura. É essencial em diversas áreas, como microbiologia e medicina.",
        Link: "https://www.steris.com/br/pt/products/sterilization/steam-sterilizers",
        Tags: "autoclave esterilizar vapor"
    },
    {
        Título: "Bico de Bunsen",
        Descrição: "O bico de Bunsen é um equipamento utilizado para aquecer substâncias em laboratório. É simples, barato e muito utilizado em diversas áreas da química.",
        Link: "https://www.novaplastica.com.br/produtos/bico-de-bunsen/",
        Tags: "bico de bunsen aquecer"
    },
    {
        Título: "Erlenmeyer",
        Descrição: "O Erlenmeyer é um frasco de vidro utilizado para diversas finalidades em laboratório, como preparar soluções, realizar titulações e aquecer líquidos.",
        Link: "https://www.laborglas.com.br/produtos/vidraria/erlenmeyer/",
        Tags: "erlenmeyer vidraria laboratorio"
    },
    {
        Título: "Béquer",
        Descrição: "O béquer é um recipiente cilíndrico de vidro utilizado para diversas finalidades em laboratório, como preparar soluções e realizar reações químicas.",
        Link: "https://www.laborglas.com.br/produtos/vidraria/becker/",
        Tags: "becker vidraria laboratorio"
    },
    {
        Título: "Tubos de Ensaio",
        Descrição: "Os tubos de ensaio são pequenos tubos de vidro utilizados para realizar pequenas reações químicas e testes qualitativos.",
        Link: "https://www.laborglas.com.br/produtos/vidraria/tubo-de-ensaio/",
        Tags: "tubo de ensaio reacoes quimicas"
    },
    {
        Título: "Pipeta",
        Descrição: "A pipeta é um instrumento utilizado para medir e transferir volumes precisos de líquidos.",
        Link: "https://www.laborglas.com.br/produtos/vidraria/pipeta/",
        Tags: "pipeta medir volume"
    },
    {
        Título: "Proveta",
        Descrição: "A proveta é um cilindro graduado utilizado para medir volumes de líquidos com precisão moderada.",
        Link: "https://www.laborglas.com.br/produtos/vidraria/proveta/",
        Tags: "proveta medir volume"
    },
    {
        Título: "Funil",
        Descrição: "O funil é um instrumento utilizado para transferir líquidos de um recipiente para outro e para realizar filtrações.",
        Link: "https://www.laborglas.com.br/produtos/vidraria/funil/",
        Tags: "funil transferir filtrar"
    },
    {
        Título: "Placa de Petri",
        Descrição: "A placa de Petri é um recipiente de vidro utilizado para cultivar microrganismos e realizar diversas técnicas de microbiologia.",
        Link: "https://www.laborglas.com.br/produtos/plastico/placa-de-petri/",
        Tags: "placa de petri microbiologia"
    },
    {
        Título: "Agitador Magnético",
        Descrição: "O agitador magnético é um equipamento utilizado para homogeneizar soluções através de um campo magnético.",
        Link: "https://www.marconi.com.br/produtos/agitadores-magneticos/",
        Tags: "agitador magnetico homogeneizar"
    },
    {
        Título: "Banho-Maria",
        Descrição: "O banho-maria é um equipamento utilizado para aquecer amostras a temperaturas controladas e uniformes.",
        Link: "https://www.marconi.com.br/produtos/banho-maria/",
        Tags: "banho-maria aquecer amostras banho maria"
    },
    {
        Título: "Capela de Fluxo Laminar",
        Descrição: "A capela de fluxo laminar é um equipamento utilizado para fornecer um ambiente de trabalho livre de partículas, utilizado em diversas áreas, como microbiologia e biotecnologia.",
        Link: "https://www.tecnica.com.br/capelas-de-fluxo-laminar/",
        Tags: "capela de fluxo laminar ambiente limpo"
    }
];
