import Reservation from "../models/Reservation.js"
import Room from "../models/Room.js";

//CREATE
export const createReservation = async (req, res, next) => {
  
  const roomId = req.params.roomid
  const newReservation = new Reservation(req.body)
  
  try{
    const savedReservation = await newReservation.save();
    try{
      await Room.findByIdAndUpdate(roomId, {$push : {reservation: savedReservation._id}})
    }catch(err){
      next(err)
    }
    res.status(200).json(savedReservation);
  } catch(err){
    next(err);
  }
};

//UPDATE
export const updateReservation = async (req, res, next) => {  
  try{
    const updateReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(updateReservation);
  } catch(err){
    next(err);
  }
};

//DELETE
export const deleteReservation = async (req, res, next) => {  

    let number;
    await Reservation.findById(req.params.id)
      .then((store) => { number = (store.room.toString()) })
    
    
    try{
      try{
        await Room.updateOne({ _id: number}, {$pull : {reservation: req.params.id}})
      }catch(err){
        next(err)
      }
      await Reservation.findByIdAndDelete(req.params.id);
      res.status(200).json("Reservation has been deleted!");
    } catch(err){
      next(err);
    }
};

//SHOW
export const showReservation = async (req, res, next) => {  
  try{
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch(err){
    next(err);
  }
};

//INDEX
export const indexReservation = async (req, res, next) => {  
  try{
    const reservations = await Reservation.find();
    res.status(200).json({"reservations": reservations});
  } catch(err){
    next(err);
  }
};
