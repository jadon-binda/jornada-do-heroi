# Jornada do Herói

Desenvolvimento de uma aplicação web que exibe uma listagem de heróis, onde você pode clicar em dois heróis distintos e realizar um combate entre eles, vencendo o herói que possuir maior somatório de habilidades (powerstats).
Um modal é aberto, após clicar no segundo herói, mostrando o vencedor do combate, as imagens e a comparação das habilidades dos heróis envolvidos no combate.

### Fucionalidades:
- __Listagem de heróis:__ exibe as informações dos heróis, carregadas da API, dentro das cartas do jogo.
- **Filtro de heróis:** realiza uma busca dinâmica ao digitar o nome do herói no campo de pesquisa; as cartas vão sendo filtradas a medida que o texto é digitado.
- __Sistema de combate:__ efetua uma comparação entre as habilidades dos heróis em combate, define quem é o vencedor do combate baseado no somatório das habilidades e exibe todas as informações em um modal.

### Tecnologias e Bibliotecas utilizadas:
- **ReactJS**
- __Material-UI__
- JavaScript
- CSS3
- __CSS-Module__
- CSS-in-JS
- HTML5
- MUI/icons-material
- react-icons
- react-router-dom
- eslint

Execute o comando `npm i` do seu terminal, para instalar todas as dependências, e depois execute `npm start`, para iniciar a aplicação.
Após iniciar a aplicação, a página principal é carregada e você deve clicar no botão **Cartas** para carregar o deck de cartas dos heróis e começar o jogo.
