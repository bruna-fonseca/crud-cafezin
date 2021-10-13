const express = require("express");
const { getAll, createLogin, updateUser, deleteUserController } = require("../controllers/controllerCadastro");

const router = express.Router();


router.route('/cadastros')
  .get(getAll)
  .post(createLogin)
  .put(updateUser)
  .delete(deleteUserController);

module.exports = router;