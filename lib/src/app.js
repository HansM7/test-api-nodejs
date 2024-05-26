import express from "express";

export function app() {
  const app = express();

  // Ruta para obtener un saludo
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hola desde mi API!" });
  });

  // Ruta para obtener información del usuario
  app.get("/api/user/:id", (req, res) => {
    const userId = req.params.id;
    // Simulando la recuperación de datos del usuario
    const userData = { name: "John Doe", email: "johndoe@example.com" };
    res.json(userData);
  });

  // ... Puedes agregar más rutas y manejadores de solicitudes para crear tus APIs.

  const port = process.env.PORT || 4000; // Define el puerto
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
}
