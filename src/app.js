const { envs } = require('./config/env');
const { startServer } = require('./server/server');
const main = () => {
  startServer({ port: envs.PORT, public_path: envs.PUBLIC_PATH });
};
/*Funcion Agnostica Autoconvocada*/
//Agnostica por que no tiene nombre
//autoconvocada porque la ejecutamos con los ultimos parentesis de cierre()

(async () => {
  main();
})();
