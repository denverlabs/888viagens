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

  const { destino, email, precoMaximo, dataFlexivel, observacoes } = req.body;

  // Validação
  if (!destino || !email) {
    return res.status(400).json({
      success: false,
      error: 'Campos obrigatórios: destino, email',
      exemplo: {
        destino: 'franca',
        email: 'cliente@email.com',
        precoMaximo: 5000,
        dataFlexivel: true,
        observacoes: 'Prefiro viajar entre junho e agosto'
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

  // Gerar ID do alerta
  const alertaId = `ALT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Log do alerta (em produção, salvar em banco de dados)
  console.log('Novo alerta:', { alertaId, destino, email, precoMaximo });

  return res.status(200).json({
    success: true,
    alertaId,
    mensagem: 'Alerta criado com sucesso! Você será notificado quando encontrarmos boas oportunidades.',
    alerta: {
      destino,
      email,
      precoMaximo: precoMaximo || 'Sem limite definido',
      dataFlexivel: dataFlexivel !== false,
      status: 'ativo'
    },
    comoFunciona: [
      'Monitoramos preços de hotéis e passagens diariamente',
      'Quando identificamos uma boa oportunidade, enviamos um email',
      'Você decide se quer fechar a viagem',
      'Nosso objetivo é que você compre no momento certo, não no impulso'
    ],
    contato: {
      whatsapp: 'https://wa.me/5521971592888',
      mensagem: 'Dúvidas? Fale conosco no WhatsApp'
    }
  });
}
