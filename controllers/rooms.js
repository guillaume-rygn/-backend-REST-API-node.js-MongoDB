import Room from "../models/Room.js"


//CREATE
export const createRoom = async (req, res, next) => {
  
  const reservationId = req.params.reservationId
  const newRoom = new Room(req.body)
  
  try{
    const savedRoom = await newRoom.save();
    try{
      await Room.findByIdAndUpdate(reservationId, {$push : {reservation: savedRoom._id}})
    }catch(err){
      next(err)
    }
    res.status(200).json(savedRoom);
  } catch(err){
    next(err);
  }
};

//UPDATE
export const updateRoom = async (req, res, next) => {  
  try{
    const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(updateRoom);
  } catch(err){
    next(err);
  }
};

//DELETE
export const deleteRoom = async (req, res, next) => {  
  try{
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted!");
  } catch(err){
    next(err);
  }
};

//SHOW
export const showRoom = async (req, res, next) => {  
  try{
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch(err){
    next(err);
  }
};

//INDEX
export const indexRoom = async (req, res, next) => {  
  try{
    const rooms = await Room.find();
    res.status(200).json({"rooms": rooms});
  } catch(err){
    next(err);
  }
};

//INDEX FILTER
export const sortRoom = async (req, res, next) => {
  
  const equipment = req.params.equipment.split(":")
  const sortSearch = []
  let greater = 0

  equipment.map(element => {
    if(element.includes("greater")){
      greater = element.split("=")[1]
      sortSearch.push({capacity: {$gte:greater}})
    } else {
      sortSearch.push({"equipements.name": element.replace('_', ' ')})
    }
  })


  try{
    const rooms = await Room.find({$and:sortSearch})
    res.status(200).json({"rooms": rooms});
  } catch(err){
    next(err);
  }
}