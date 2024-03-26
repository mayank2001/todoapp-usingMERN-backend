const {Router} = require("express");
const { getTodo,saveTodo, deletetodo, updatetodo } = require("../controller/todo_controller");

const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.post('/update', updatetodo)
router.post('/delete', deletetodo)


module.exports = router;