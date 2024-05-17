const express = require("express")
import {getUser,getUserById} from '../controllers/userController'
const router = new express.Router();

router.route("/").get(getUser);
router.route("/:id").get(getUserById);

export default router;