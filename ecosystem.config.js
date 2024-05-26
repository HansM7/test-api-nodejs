const os = require("os");
module.exports = {
  apps: [
    {
      port: 4000, // Puerto en el que escuchará su aplicación
      name: "test-api", // Nombre del proceso en pm2
      script: "lib/src/index.cjs", // Ejecuta el archivo de entrada CommonJS
      watch: true, // Activa la observación de cambios en los archivos
      instances: os.cpus().length, // Número de instancias de la aplicación (basado en CPUs)
      exec_mode: "fork", // Modo de ejecución (fork para mayor aislamiento)
      env: {
        NODE_ENV: "production", // Variable de entorno para producción
      },
    },
  ],
};
