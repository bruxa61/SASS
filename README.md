# SASS

> Acompanhe o passo a passo para aprender a usar o SASS

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Instalar o Node.js
- No terminal instalar o SASS:
```
npm install -g sass
```
- Baixar extenção do VS Code "Live Sass Compiler" ou usar o código a seguir no terminal para fazer a compilação.
```
npx sass sass/style.scss css/style.css --watch
```

## ☕ Usando SASS

Siga estas etapas:

- Crie uma pasta chamada "Aprendendo SASS" e abra ela no VS Code
- Crie um arquivo dentro desta pasta chamado index.html e insira o código a seguir:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo SASS</title>
</head>

<body>
    <header>
        <h1>Aprendendo Sass</h1>
        <button>Botão</button>
    </header>
    <div class="contato">
        <h2>Outra div</h2>
        <button>Outro botão</button>
    </div>
</body>

</html>
```
