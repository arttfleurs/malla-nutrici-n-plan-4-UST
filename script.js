function mostrarContenido(ramo) {
  let mensaje = "";

  switch (ramo) {
    case 'anatomia':
      mensaje = "Anatomía: estructura del cuerpo humano, sistema óseo, muscular, etc.";
      break;
    case 'quimica':
      mensaje = "Química General: compuestos, enlaces, reacciones básicas.";
      break;
    case 'bioquimica':
      mensaje = "Bioquímica: proteínas, enzimas, metabolismo.";
      break;
    case 'fisiologia':
      mensaje = "Fisiología: funciones de órganos y sistemas.";
      break;
    default:
      mensaje = "Ramo no registrado aún.";
  }

  alert(mensaje);
}

