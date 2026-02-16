export default function handler(req, res) {
  // CORS headers for agent access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const destinos = [
    {
      id: 'espanha',
      pais: 'Espanha',
      bandeira: '🇪🇸',
      cidades: ['Madrid', 'Barcelona', 'Sevilha', 'Valencia'],
      descricao: 'Gastronomia, arte e praias mediterrâneas',
      disponivel: true,
      precoBase: 'a partir de R$ 4.500'
    },
    {
      id: 'franca',
      pais: 'França',
      bandeira: '🇫🇷',
      cidades: ['Paris', 'Nice', 'Lyon', 'Marselha'],
      descricao: 'Romance, cultura e gastronomia refinada',
      disponivel: true,
      precoBase: 'a partir de R$ 5.200'
    },
    {
      id: 'alemanha',
      pais: 'Alemanha',
      bandeira: '🇩🇪',
      cidades: ['Berlim', 'Munique', 'Frankfurt', 'Hamburgo'],
      descricao: 'História, cerveja e castelos',
      disponivel: true,
      precoBase: 'a partir de R$ 4.800'
    },
    {
      id: 'suica',
      pais: 'Suíça',
      bandeira: '🇨🇭',
      cidades: ['Zurique', 'Genebra', 'Lucerna', 'Interlaken'],
      descricao: 'Alpes, chocolates e paisagens de tirar o fôlego',
      disponivel: true,
      precoBase: 'a partir de R$ 6.500'
    },
    {
      id: 'italia',
      pais: 'Itália',
      bandeira: '🇮🇹',
      cidades: ['Roma', 'Milão', 'Veneza', 'Florença'],
      descricao: 'Arte, história e a melhor comida do mundo',
      disponivel: true,
      precoBase: 'a partir de R$ 4.900'
    },
    {
      id: 'portugal',
      pais: 'Portugal',
      bandeira: '🇵🇹',
      cidades: ['Lisboa', 'Porto', 'Faro', 'Sintra'],
      descricao: 'História, vinhos e proximidade cultural',
      disponivel: true,
      precoBase: 'a partir de R$ 3.800'
    }
  ];

  return res.status(200).json({
    success: true,
    total: destinos.length,
    destinos,
    mensagem: 'Use POST /api/cotacao para solicitar preços ou POST /api/alerta para criar um alerta de preço'
  });
}
