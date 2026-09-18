# Manual de operação do site Auron

Atualizado em 18 de setembro de 2026.

## Visão geral

- **Site público:** `https://auronnegocios.com.br`
- **Repositório:** `https://github.com/felipeferreira7-ui/auron-site.git`
- **Branch de publicação:** `main`
- **Hospedagem:** GitHub Pages
- **Tecnologia:** HTML, CSS e JavaScript sem framework

Um envio para `main` publica a versão do site pelo GitHub Pages. Antes de publicar, validar a navegação local e revisar a cópia, links, formulário e metadados da página alterada.

## Conteúdo e posicionamento

A Auron atua na venda e compra de empresas do middle market. O site deve falar com clareza com fundadores, famílias empresárias e compradores estratégicos, sem depender de jargão financeiro.

### Regras editoriais

- Escrever frases diretas, concretas e fáceis de entender.
- Preservar a confidencialidade: não citar clientes, marcas, cidades, valores ou detalhes de mandatos sem autorização pública expressa.
- Tratar valuation como análise realizada dentro de um mandato de venda. **Não** apresentá-lo como serviço independente.
- Não usar promessas de resultado, múltiplos de mercado ou números sem fonte verificável.
- Priorizar os temas: venda de empresa familiar, sucessão sem herdeiro-operador, aquisição de empresas e preparação para venda.

## Páginas prioritárias

| Intenção | Página |
|---|---|
| Venda de empresa | `/servicos/venda-de-empresas/` |
| Compra de empresas | `/compradores/tese-de-aquisicao/` |
| Sucessão | `/insights/sucessao-empresarial-sem-herdeiro/` |
| Conteúdos | `/insights/` |
| Conversão | `/#triagem` |

A antiga página de valuation avulso foi removida. O conteúdo de Alphaville também não deve ser recriado ou citado sem nova decisão operacional.

## Formulário e conversão

A home mantém duas rotas de contato:

1. Triagem inicial e encaminhamento para WhatsApp.
2. Link para o formulário confidencial do Google Forms.

O formulário solicita apenas nome, objetivo, contato e contexto comercial inicial. Não pedir documentos, dados financeiros sensíveis ou informações que identifiquem um mandato na primeira conversa. A gestão do formulário é feita pela conta institucional da Auron; não registrar credenciais neste repositório.

## SEO e GEO

O site usa títulos e descrições por página, URLs descritivas, links internos, `sitemap.xml`, `robots.txt`, dados estruturados e `llms.txt`.

### Direção de conteúdo

- Criar uma página ou artigo apenas quando responder a uma dúvida comercial concreta.
- Usar termos que empresários realmente procuram: vender empresa, empresa familiar, sucessão, encontrar comprador, compra de empresa e M&A por setor.
- Tratar atuação nacional com evidências reais. Não criar páginas de cidades sem operação, prova ou intenção comercial específica.
- Atualizar o sitemap quando adicionar ou remover páginas indexáveis.
- Solicitar indexação no Google Search Console para páginas prioritárias novas ou muito alteradas.

### Estado conhecido no Search Console

Na leitura de 16 de junho a 15 de setembro de 2026: 28 cliques, 1,02 mil impressões, CTR de 2,8% e posição média de 8,4. Havia 9 páginas indexadas e 11 fora do índice, incluindo URLs detectadas ainda não indexadas. A home e o artigo sobre sucessão tiveram indexação solicitada após a atualização.

## Rotina de publicação

1. Alterar arquivos necessários e testar localmente.
2. Confirmar que não houve inclusão de dados confidenciais, arquivos pesados ou credenciais.
3. Revisar `sitemap.xml`, links internos, título, descrição e imagem social quando aplicável.
4. Versionar e enviar para `main`.
5. Confirmar a execução bem-sucedida do GitHub Pages e abrir a página publicada em desktop e celular.
6. Para páginas prioritárias, acompanhar indexação e consultas no Search Console.

## Saúde do repositório

Em 18 de setembro de 2026, os assets antigos de Alphaville foram retirados do histórico inteiro do Git e o repositório foi compactado. O `.git` ocupa cerca de 2,1 MB. Não adicionar apresentações, vídeos brutos, exportações pesadas ou bases confidenciais ao repositório.

Quem tiver um clone antigo anterior a essa data deve sincronizar novamente antes de enviar alterações, porque o histórico de `main` foi reescrito.
