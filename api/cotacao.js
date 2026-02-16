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

  const { destino, dataIda, dataVolta, pessoas, email, telefone, observacoes } = req.body;

  // Validação
  if (!destino || !dataIda || !dataVolta || !pessoas || !email) {
    return res.status(400).json({
      success: false,
      error: 'Campos obrigatórios: destino, dataIda, dataVolta, pessoas, email',
      exemplo: {
        destino: 'espanha',
        dataIda: '2026-06-15',
        dataVolta: '2026-06-25',
        pessoas: 2,
        email: 'cliente@email.com',
        telefone: '+55 21 99999-9999',
        observacoes: 'Preferência por hotéis centrais'
      }
    });
  }

  // Validar datas
  const ida = new Date(dataIda);
  const volta = new Date(dataVolta);
  const hoje = new Date();

  if (ida < hoje) {
    return res.status(400).json({
      success: false,
      error: 'Data de ida deve ser no futuro'
    });
  }

  if (volta <= ida) {
    return res.status(400).json({
      success: false,
      error: 'Data de volta deve ser após a data de ida'
    });
  }

  // Calcular dias
  const dias = Math.ceil((volta - ida) / (1000 * 60 * 60 * 24));

  // Gerar ID da cotação
  const cotacaoId = `COT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Enviar para WhatsApp (via webhook ou direto)
  const whatsappNumber = '5521971592888';
  const mensagem = `Nova cotação via API:\n\nID: ${cotacaoId}\nDestino: ${destino}\nDatas: ${dataIda} a ${dataVolta} (${dias} dias)\nPessoas: ${pessoas}\nEmail: ${email}\nTelefone: ${telefone || 'Não informado'}\nObservações: ${observacoes || 'Nenhuma'}`;

  // Log da cotação (em produção, salvar em banco de dados)
  console.log('Nova cotação:', { cotacaoId, destino, dataIda, dataVolta, pessoas, email });

  return res.status(200).json({
    success: true,
    cotacaoId,
    mensagem: 'Cotação recebida com sucesso! Entraremos em contato em até 24 horas.',
    detalhes: {
      destino,
      dataIda,
      dataVolta,
      dias,
      pessoas
    },
    contato: {
      whatsapp: `https://wa.me/${whatsappNumber}`,
      prazoResposta: '24 horas'
    },
    proximosPassos: [
      'Nossa equipe analisará sua solicitação',
      'Você receberá opções de pacotes por email',
      'Podemos também entrar em contato por WhatsApp para esclarecer dúvidas'
    ]
  });
}
