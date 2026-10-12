// Listas de inspiração de presente.
// Cada item pode ter uma foto (arquivo em public/figurinhas, sem fundo, PNG ou WebP)
// ou só o nome, que vira um adesivo de texto.
// 'pronta: true' quando a foto já tem a borda branca de adesivo.

export const listas = [
  {
    pessoa: 'Nala',
    itens: [
      {
        nome: 'Coisas artesanais',
        descricao: 'Bordado, cerâmica, crochê: qualquer coisa feita à mão.',
        foto: 'bordado-emoldurado.webp',
        pronta: true,
      },
      {
        nome: 'Livros nacionais',
        descricao: 'De autoras e autores brasileiros que você acha que ela vai gostar.',
        foto: 'livros-nacionais.webp',
        pronta: true,
      },
      {
        nome: 'Roupas fluídas',
        descricao: 'Vestidos, batas e saias de tecido leve, que balançam.',
        foto: 'vestido-fluido.webp',
        pronta: true,
      },
      {
        nome: 'Acessórios de pedras',
        descricao: 'Colares, brincos ou pulseiras com pedras.',
        foto: 'colar-de-pedras.webp',
      },
      {
        nome: 'Canga de praia',
        descricao: 'Uma canga estampada pra levar pra praia.',
        foto: 'canga.webp',
        ilustrativa: true,
        pronta: true,
      },
      {
        nome: 'Lenços',
        descricao: 'De seda ou cetim, estampado, pra usar no cabelo ou no pescoço.',
        foto: 'lenco-estampado.webp',
        pronta: true,
      },
    ],
  },
  {
    pessoa: 'Ana',
    gosto: '"não tenho tantas preferências, só coloquei coisas pra dar um norte mesmo"',
    itens: [
      {
        nome: 'Incensário cascata',
        descricao: 'Aquele em que a fumaça escorre como uma cachoeira.',
        foto: 'incensario-cascata.webp',
        pronta: true,
      },
      {
        nome: 'Cores favoritas',
        descricao: 'Ela ama coisas amarelas e azuis!',
        // 'texto' muda a cor do nome quando o fundo é claro
        cores: [
          { nome: 'amarelo', hex: '#f2c230', texto: '#2b1d14' },
          { nome: 'azul', hex: '#2f5fa8' },
        ],
      },
      {
        nome: 'Tarots tradicionais',
        descricao: 'Qualquer um, menos o de Marselha.',
        foto: 'tarot.webp',
        pronta: true,
      },
      {
        nome: 'Pipoca & Nanquim',
        descricao: 'Ana ama essa editora. Ela já tem a Master Collection do Junji Ito e Tokyo Killers.',
        foto: 'cores-macabras.webp',
        pronta: true,
      },
      {
        nome: 'Pêndulo',
        descricao: 'Tipo esse da foto.',
        foto: 'pendulo.webp',
        pronta: true,
      },
      {
        nome: 'Blush Baked Tropical',
        descricao: 'Da Contém 1g.',
        foto: 'blush-contem1g.webp',
        pronta: true,
      },
      {
        nome: 'Budismo e Hare Krishna',
        descricao: 'Livros sobre budismo ou sobre o movimento Hare Krishna.',
        foto: 'buda.webp',
        pronta: true,
      },
    ],
  },
  {
    pessoa: 'Lísis',
    gosto: 'cores: marrom, verde, azul e vermelho escuros',
    itens: [
      {
        nome: 'Acessórios prata',
        descricao: 'Acessórios prata, só não é muito fã de pedraria.',
        foto: 'colar-prata.webp',
      },
      {
        nome: 'Livros',
        descricao: 'Tem olhado muito Oração para desaparecer, 78 graus de sabedoria e os mangás de Nana do 6 pra frente. Indicação também vale!',
        foto: 'livros-antigos.webp',
        pronta: true,
      },
      {
        nome: 'Copo térmico',
        descricao: 'Pra café ou chá, que caiba na bolsa.',
        foto: 'copo-termico.webp',
      },
      {
        nome: 'Blusas e bodys básicos',
        descricao: 'Pra usar no dia a dia: regata e/ou baby tee.',
        foto: 'bodys.webp',
        pronta: true,
      },
      {
        nome: 'Perfumes',
        descricao: 'Cítricos, amadeirados, floral leve ou tropical.',
        foto: 'perfume.webp',
      },
      {
        nome: 'Velas',
        descricao: 'Com cheiro cítrico, amadeirado, floral leve ou tropical.',
        foto: 'vela.webp',
        pronta: true,
      },
      {
        nome: 'Cacarecos que lembrem dela',
        descricao: 'Qualquer cacareco que lembre ela.',
        foto: 'chaveiro.webp',
        pronta: true,
      },
      {
        nome: 'Cores favoritas',
        descricao: 'Marrom, verde, azul e vermelho, todos escuros.',
        // cartela de tinta: cada cor vira uma faixa com o nome escrito
        cores: [
          { nome: 'marrom', hex: '#5a3a26' },
          { nome: 'verde', hex: '#2f4a33' },
          { nome: 'azul', hex: '#24365a' },
          { nome: 'vermelho', hex: '#6b1a1a' },
        ],
      },
    ],
  },
  {
    pessoa: 'Luiz',
    gosto: 'axé!',
    itens: [
      {
        nome: 'Artes e tapeçarias',
        descricao: 'Artes ou tapeçarias legais.',
        foto: 'tapecaria-sankofa.webp',
      },
      {
        nome: 'Bandeira da América Latina invertida',
        foto: 'bandeira-america-invertida.webp',
      },
      {
        nome: 'Havaianinha bubu',
        descricao: 'Havaianas de qualquer cor que seja massa.',
        foto: 'havaianas.webp',
      },
      {
        nome: 'Figa',
        foto: 'figas.webp',
      },
      {
        nome: 'Carranca',
        foto: 'carrancas.webp',
      },
      {
        nome: 'Camisa de artista',
        foto: 'camisa-artista.webp',
      },
      {
        nome: 'Acessórios de axé',
        descricao: 'Búzios, acessórios de figa, Xangô, Oxum, Oxóssi.',
        foto: 'benza-acessorios.webp',
        onde: 'Ideia de loja: @benza.acessorios',
        link: 'https://www.instagram.com/benza.acessorios/',
      },
    ],
  },
  {
    pessoa: 'Du',
    itens: [
      {
        nome: 'Acessórios prata',
        descricao: 'Ela deixou uma inspiração no Pinterest, dá uma olhada!',
        foto: 'acessorios-prata-du.webp',
        onde: 'Inspiração no Pinterest',
        link: 'https://pin.it/7IdhRcANl',
      },
      {
        nome: 'Canecas',
        descricao: 'Gosta de canecas legais/divertidas ou que lembrem dela.',
        foto: 'caneca-pitu.webp',
        ilustrativa: true,
      },
      {
        nome: 'Roupas sem estampa',
        descricao: 'Em roupa, gosta de coisas sem estampa.',
        foto: 'roupa-sem-estampa.webp',
      },
      {
        nome: 'Perfume e cuidados',
        descricao: 'Perfume/body splash, sabonete e hidratante doce mas não abusado e com "cheiro de limpo". Nada muito amadeirado.',
        foto: 'perfumes-du.webp',
      },
      {
        nome: 'Papete plataforma',
        descricao: 'Ama tamanca papete plataforma meio comicamente grande, mas sem aplicação de tachinhas etc.',
        foto: 'papete-plataforma.webp',
      },
      {
        nome: 'Cores favoritas',
        descricao: 'Tons escuros.',
        cores: [
          { nome: 'vinho', hex: '#5e1a2a' },
          { nome: 'marrom', hex: '#4e3424' },
          { nome: 'preto', hex: '#1e1a18' },
          { nome: 'azul-marinho', hex: '#1d2a48' },
          { nome: 'verde', hex: '#2c4430' },
          { nome: 'cinza', hex: '#4a4a4c' },
        ],
      },
    ],
  },
  {
    pessoa: 'Nanda',
    gosto: 'aceito qualquer coisa que vc lembra de mim!',
    itens: [
      {
        nome: 'Cadernos',
        foto: 'caderno.webp',
      },
      {
        nome: 'Adesivos',
        descricao: 'Figurinhas nas cores que ela gosta.',
        foto: 'adesivos.webp',
        pronta: true,
      },
      {
        nome: 'Bottons',
        foto: 'bottons.webp',
      },
      {
        nome: 'Chaveiros',
        foto: 'chaveiro-pelucia.webp',
        ilustrativa: true,
      },
      {
        nome: 'Maquiagem',
        descricao: 'Rímel e lápis de desenhar sobrancelha.',
        foto: 'maquiagem.webp',
      },
      {
        nome: 'Esmalte',
        descricao: 'Ela gosta do Top coat efeito gel da Colorama. Costuma usar mais esmaltes vermelhos, pretos e marrons.',
        foto: 'esmaltes.webp',
        pronta: true,
      },
      {
        nome: 'Lenços',
        foto: 'lenco-nanda.webp',
      },
      {
        nome: 'Blusas básicas',
        foto: 'blusas-basicas.webp',
      },
      {
        nome: 'Estampa listrada',
        descricao: 'A estampa que ela gosta é listrado.',
        foto: 'listrado.webp',
      },
      {
        nome: 'Cores favoritas',
        cores: [
          { nome: 'azul-marinho', hex: '#1d2a48' },
          { nome: 'off white', hex: '#efe9dc', texto: '#2b1d14' },
          { nome: 'marrom', hex: '#4e3424' },
          { nome: 'vermelho', hex: '#8e1b1b' },
        ],
      },
    ],
  },
]
