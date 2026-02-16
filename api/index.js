export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  return res.status(200).json({
    nome: '888 Viagens API',
    versao: '1.0.0',
    descricao: 'API para agentes de IA interagirem com a 888 Viagens - Alertas de viagem para a Europa',
    documentacao: 'https://888viagens.com/llms.txt',
    contato: {
      whatsapp: '+55 21 97159-2888',
      site: 'https://888viagens.com'
    },
    endpoints: [
      {
        metodo: 'GET',
        rota: '/api/destinos',
        descricao: 'Lista todos os destinos disponíveis na Europa'
      },
      {
        metodo: 'POST',
        rota: '/api/cotacao',
        descricao: 'Solicitar cotação de viagem',
        camposObrigatorios: ['destino', 'dataIda', 'dataVolta', 'pessoas', 'email']
      },
      {
        metodo: 'POST',
        rota: '/api/alerta',
        descricao: 'Criar alerta de preço para um destino',
        camposObrigatorios: ['destino', 'email']
      },
      {
        metodo: 'POST',
        rota: '/api/contato',
        descricao: 'Enviar mensagem de contato',
        camposObrigatorios: ['email', 'mensagem']
      },
      {
        metodo: 'POST',
        rota: '/api/newsletter',
        descricao: 'Inscrever-se na newsletter',
        camposObrigatorios: ['email']
      }
    ],
    exemplos: {
      listarDestinos: 'curl https://888viagens.com/api/destinos',
      criarAlerta: 'curl -X POST https://888viagens.com/api/alerta -H "Content-Type: application/json" -d \'{"destino":"franca","email":"seu@email.com"}\''
    },
    paraAgentes: {
      nota: 'Esta API foi projetada para ser usada por agentes de IA sem necessidade de navegador',
      formato: 'Todas as respostas são em JSON',
      autenticacao: 'Não requerida para operações básicas'
    }
  });
}
