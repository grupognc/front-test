# front-test
repositório para avaliação frontend

Será avaliado:
- Clareza no código
- Estrutura de commits
- Organização do projeto

# Atividade a ser realizada
Realizar o clone do repositório, crie uma nova branch com seu nome-sobrenome e implemente as seguinte fucionalidades, utilizando a linguagem/framework web de sua escolha. Atualize o `readme` com uma breve descrição de como o projeto deverá ser executado. Ao finalizar, crie um PR para avaliação.

Implementar uma tabela dinamica com o retorno do endpoint disponibilizado abaixo, onde:

 - [ ] Deverá possuir 2 selects com os filtros por nome e cor da pele. Ao selecionar multiplas opções desses selects, a tabela deverá ser atualizada de acordo com os filtros selecionados
 - [ ] A tabela deverá possuir as colunas com as propriedades e respectivos valores de acordo com o retorno da api nome , altura, peso, aniversário e genero.
 - [ ] A tabela deverá possuir um botão de detalhamento em cada linha, onde os demais valores retornados da api deverão estar disponiveis para visualização. Utilize o layout de acordo achar necessário
 - [ ] Possuir paginação

# Endpoint
Lista pessoas star wars

```'https://swapi.dev/api/people'```



#Front-test


Escopo

Para a extração e manipulação dos dados contidos no link https://swapi.dev/api/people , foi utilizada a linguagem de programação Python e a IDE Júpiter. Com essas ferramentas, foram criadas as tabelas HTML e a lista com todas as cores de pele da pessoas, que preferencialmente devem estar apresentadas em ordem alfabética no menu dropdown;

Desenvolvimento das páginas HTML, perfazendo um total de 9 paginações e em paralelo a este desenvolvimento, utilização do framework Bootstrap (https://getbootstrap.com/) e framework de Datatables (https://datatables.net/), além do uso da linguagem Javascript.

Status do Projeto

A filtragem de busca por nome (através do input) está em funcionamento.

2 pendências: estou tentando remover um item desnecessário da página HTML (ele está posicionado à esquerda e faz parte do framework, parece ser uma funcionalidade embutida e “engessada”) e estou tentando implementar o funcionamento de filtragem da tabela a partir da cor da pele. Assista mais detalhes sobre estas pendências através do seguinte link: https://drive.google.com/file/d/1tkbhZl7MTKrIrwJn8Ck69wnhRzvYvIGq/view?usp=sharing
