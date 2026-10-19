# Site para Salão de Tranças

## Sobre o projeto

Site institucional desenvolvido como trabalho freelancer de desenvolvimento web para um salão especializado em tranças nagô e penteados afro. O site apresenta os serviços, os preços e uma galeria de penteados, além de facilitar o contato para agendamentos pelo WhatsApp.

## Objetivos

- Criar uma presença digital para o salão.
- Valorizar a identidade visual da marca.
- Apresentar os serviços e os respectivos preços com clareza.
- Facilitar o contato e a captação de clientes interessados em agendar.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro, sem frameworks ou bibliotecas externas

## Funcionalidades

- Layout responsivo para computadores e dispositivos móveis.
- Navegação por seções, com menu adaptado para telas menores.
- Apresentação do serviço e da tabela de preços.
- Galeria de trabalhos com ampliação das imagens.
- Animações de entrada ao rolar a página, efeitos de interação e rolagem suave.
- Botões de contato integrados ao WhatsApp, com mensagem de agendamento predefinida.

## Estrutura do projeto

```text
.
├── index.html
├── README.md
├── salao.zip
├── assets/
│   ├── logo.jpg
│   ├── hero.jpg
│   ├── WhatsApp Image 2026-10-18 at 21.31.17.jpeg
│   ├── WhatsApp Image 2026-10-18 at 21.31.18 (1).jpeg
│   ├── WhatsApp Image 2026-10-18 at 21.31.18.jpeg
│   ├── WhatsApp Image 2026-10-18 at 21.34.50.jpeg
│   └── galeria/
│       ├── trabalho-01.jpg
│       ├── trabalho-02.jpg
│       └── trabalho-03.jpg
├── css/
│   └── style.css
└── js/
    └── script.js
```

Os quatro arquivos de imagem com nomes iniciados por `WhatsApp Image` e o arquivo `salao.zip` estão presentes no projeto; não são referenciados diretamente pela página atual.

## Como executar

Não é necessário instalar dependências nem compilar o projeto.

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` diretamente em um navegador.

Para testar por um servidor local, abra um terminal na pasta do projeto e execute:

```bash
python3 -m http.server 8000
```

Em seguida, acesse `http://localhost:8000` no navegador. Encerre o servidor com `Ctrl+C`.

## Personalização

- **Cores e aparência:** altere as variáveis CSS no início de `css/style.css`, incluindo `--preto`, `--ouro`, `--ouro-claro` e `--creme`.
- **Imagens:** substitua os arquivos em `assets/` ou atualize os caminhos no `index.html`. As imagens da galeria são configuradas nesse arquivo.
- **Preços:** edite a lista `CONFIG.precos` em `js/script.js`, mantendo a quantidade (`qtd`) e o valor (`valor`) de cada opção.
- **WhatsApp:** atualize `CONFIG.whatsapp` em `js/script.js` usando apenas dígitos, com código do país e DDD. O número configurado atualmente é `5527997695159` (`+55 27 99769-5159`).
- **Informações e textos do salão:** edite o conteúdo correspondente em `index.html`.

## Responsividade e acessibilidade

O layout usa regras responsivas para reorganizar o hero, a navegação e a galeria em telas menores. A navegação mobile informa seu estado com `aria-expanded`, e os controles podem ser acionados por teclado. As imagens da galeria possuem textos alternativos, os controles exibem foco visível e as animações são desativadas para quem ativa `prefers-reduced-motion` no dispositivo. As entradas durante a rolagem usam `IntersectionObserver`, com conteúdo visível como alternativa quando o recurso não está disponível.

## Créditos

Projeto realizado como trabalho freelancer de desenvolvimento web para um salão especializado em tranças nagô e penteados afro.