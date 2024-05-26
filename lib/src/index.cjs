import("./app.js") // Importa el archivo `app.js` usando `import`
  .then(({ app }) => {
    app(); // Llama a la función `app` desde el archivo importado
  });
