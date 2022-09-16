import express from "express"
import{
  createReservation,
  deleteReservation,
  updateReservation,
  showReservation,
  indexReservation
} from "../controllers/reservation.js"

const router = express.Router()

//CREATE
router.post("/:roomid", createReservation)

//UPDATE
router.put("/:id", updateReservation)

//DELETE
router.delete("/:id", deleteReservation)

//SHOW
router.get("/:id", showReservation)

//INDEX
router.get("/", indexReservation)


export default router
