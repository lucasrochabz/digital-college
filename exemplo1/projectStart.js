const fs = require('node:fs');

fs.mkdir('project.starter', {recurdive: true}, (err) => {
  if(err) throw err;

const folders = [
  './project.starter/assets',
  './project.starter/assets/css',
  './project.starter/assets/imagens',
  './project.starter/assets/js'
]

const files = [
  './project.starter/index.html',
  './project.starter/assets/css/style.css',
  './project.starter/assets/js/script.js'
]

  folders.forEach((folder) => {
    fs.mkdirSync(folder, {recursive: true}, (err) => {
      if (err) throw err;
      console.log(`${folder} criado com sucesso!`)
    })
  })

  files.forEach((file) => {
    fs.writeFileSync(file, '', (err) => {
      if (err) throw err;
      console.log(`${file} criado com sucesso!`)
    })
    if (file === './project.starter/index.html') {
      fs.writeFileSync(file, `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>Teste</title>
</head>
<body>
  <h1>Hello world!</h1>
  <script src=""></script>
</body>
</html>
`)
    }
    if (file === './project.starter/assets/css/style.css') {
      fs.writeFileSync(file, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
      
body {
  background: #a1a1a1;
  font-family: Arial, Helvetica, sans-serif;
}
`)
    }
  })
})

