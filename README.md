# Automação de API com SuperTest e JS

**Primeiros passos:**
- Download do projeto ou clone (caso clonar, você precisará apagar o .git)
- Alterar nome do projeto para produto-api-test
- Alterar o atributo "name" no arquivo package.json
- Criar o projeto de automação de api no Gitlab com o mesmo nome do projeto
- Iniciar o repositório via CLI (git init) e fazer o apontamento para o Projeto recém criado no Gitlab


<details><summary> Estrutura do Projeto </summary>

Rotas em `../support/routes-NOMESERVICO.js`

Testes em `../test/NOME_MODULO.test.js`

Utils em `../support/utils.js`

![alt text](https://cloud-ex42.usaupload.com/cache/plugins/filepreviewer/280726/36271e7648570f424cd218cffbdfe9f7b4ad4f0369d12be33fc4f6a2af642852/1100x800_cropped.jpg "Title")

![alt text](https://cloud-ex42.usaupload.com/cache/plugins/filepreviewer/280788/9330d6e0fde090ffe4550a7cfe86b198c02aff55aa11b9e0180bf36914067e76/1100x800_cropped.jpg "Title")
</details>


<details><summary>Rodando o Projeto</summary>

## Instalando Dependências
`npm i`

## Rodando os testes
Rodando os testes

`npm test`

## Rodando os testes e gerando relatório HTML
mochawesome-report gerará um HTML na pasta 'mochawesome-report'

`npm run test-html` 

</details>

<details><summary>Libs do Projeto</summary>

## Libs do Projeto
Supertest	- Biblioteca de automação de API

Mocha - Estrutura (describe, it, etc) e runner da automação

Chai - Asserção em formato de BDD / TDD

@hapi/joi	- Biblioteca para criação de schemas

Faker - Gera dados aleatórios para serem utilizados nos testes

Mochawesome	- Gera report HTML

</details>

<details><summary>Arquivos YML</summary>

# YML HTML

```
image: 'node'

stages:
 - test

before_script:
  - npm i

test:
  timeout: 1 hours
  allow_failure: true
  stage: test
  script:
    - npm run test-html
  artifacts:
    expire_in: 15 day
    paths:
      - $CI_PROJECT_DIR/mochawesome-report
```

# YML XML

```
image: 'node'

stages:
 - test

before_script:
  - npm i

test:
  timeout: 1 hours
  allow_failure: true
  stage: test
  script:
    - npm run test-junit
  artifacts:
    when: always
    reports:
      junit:
        - test-results.xml
```

</details>


