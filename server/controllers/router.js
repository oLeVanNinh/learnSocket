const express = require("express");
const router = express.Router();
const UserController = require("./user_controller");
const RoomsController = require("./rooms_controller");
const MessageController = require("./messages_controller");

router.get("/rooms", RoomsController.getRoomsHandle);
router.post("/room/create", RoomsController.createRoomsHandle);
router.post("/login", UserController.createToken);
router.post("/registration", UserController.registration);
router.get("/rooms/messages", MessageController.getRoomMessage);
router.post("/rooms/message/create", MessageController.createMessage);

module.exports = router;
