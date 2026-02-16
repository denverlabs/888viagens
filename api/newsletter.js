export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { email, nome } = req.body;

  // Validação
  if (!email) {
    return res.status(400).json({
      success: false,
      error: 'Campo obrigatório: email',
      exemplo: {
        email: 'cliente@email.com',
        nome: 'João'
      }
    });
  }

  // Validar email básico
  if (!email.includes('@')) {
    return res.status(400).json({
      success: false,
      error: 'Email inválido'
    });
  }

  // Log (em produção, integrar com serviço de email marketing)
  console.log('Nova inscrição newsletter:', { email, nome });

  return res.status(200).json({
    success: true,
    mensagem: 'Inscrição realizada com sucesso!',
    email,
    beneficios: [
      'Alertas de promoções exclusivas para a Europa',
      'Dicas de viagem e roteiros',
      'Ofertas de última hora',
      'Conteúdo exclusivo sobre destinos europeus'
    ],
    frequencia: 'Máximo 2 emails por semana',
    cancelamento: 'Você pode cancelar a qualquer momento'
  });
}
