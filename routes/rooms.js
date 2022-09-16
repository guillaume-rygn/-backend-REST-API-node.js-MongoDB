import express from "express"
import{
  createRoom,
  deleteRoom,
  updateRoom,
  showRoom,
  indexRoom,
  sortRoom
} from "../controllers/rooms.js"

const router = express.Router()

//CREATE
router.post("/", createRoom)

//UPDATE
router.put("/:id", updateRoom)

//DELETE
router.delete("/:id", deleteRoom)

//SORT
router.get("/sort=:equipment", sortRoom)

//SHOW
router.get("/:id", showRoom)

//INDEX
router.get("/", indexRoom)




export default router
