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

  const { nome, email, mensagem, telefone } = req.body;

  // Validação
  if (!email || !mensagem) {
    return res.status(400).json({
      success: false,
      error: 'Campos obrigatórios: email, mensagem',
      exemplo: {
        nome: 'João Silva',
        email: 'joao@email.com',
        mensagem: 'Gostaria de saber mais sobre pacotes para Portugal',
        telefone: '+55 21 99999-9999'
      }
    });
  }

  // Gerar ID do contato
  const contatoId = `MSG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Log (em produção, salvar em banco e enviar notificação)
  console.log('Nova mensagem:', { contatoId, nome, email, mensagem });

  return res.status(200).json({
    success: true,
    contatoId,
    mensagem: 'Mensagem recebida! Responderemos em até 24 horas.',
    recebido: {
      nome: nome || 'Não informado',
      email,
      mensagem: mensagem.substring(0, 50) + (mensagem.length > 50 ? '...' : '')
    },
    alternativas: {
      whatsapp: 'https://wa.me/5521971592888',
      whatsappMensagem: 'Para resposta imediata, fale conosco no WhatsApp'
    }
  });
}
