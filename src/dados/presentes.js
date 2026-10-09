// Listas de inspiração de presente.
// Cada item pode ter uma foto (arquivo em public/figurinhas, sem fundo, PNG ou WebP)
// ou só o nome, que vira um adesivo de texto.
// 'pronta: true' quando a foto já tem a borda branca de adesivo.

export const listas = [
  {
    pessoa: 'Nala',
    gosto: 'fotos ilustrativas!',
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
]
