import mongoose from "mongoose";
const { Schema } = mongoose;

const EquipmentSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  }
})

const RoomSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  }, 
  capacity:{
    type: Number,
    min:1,
    require: true
  }, 
  equipements:{
    type: [EquipmentSchema],
    require: true
  },
  reservation:{
    type:[Schema.ObjectId],
    require: true
  }
  }, 
  {
    timestamps: true
  }
)

export default mongoose.model("Rooms", RoomSchema)