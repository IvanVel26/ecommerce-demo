// Cuenta de prueba SOLO para probar la pantalla de login de forma local.
// No es seguro (la contraseña queda visible en el código del navegador):
// cuando conectemos el backend real, este archivo se elimina y el login
// pasa a validarse contra la base de datos, con contraseñas hasheadas.
export const FAKE_USER = {
  email: "demo@tienda.com",
  password: "demo1234",
  name: "Usuario Demo",
};
