# HEROKU PRODUCTION LINK

https://adlin-rest-api.herokuapp.com/api/v1

# FRONTEND VUEJS

site internet : https://reservation-app-liard.vercel.app/
Github : https://github.com/guillaume-rygn/Reservation_app 

# ENDPOINTS

## ROOM

### CREATE
POST on /rooms with payload :
```json
{
  "name": String,
  "description": String,
  "capacity": Number,
  "equipements": [String],
  "reservation": [Schema.ObjectId]
}
```

### UPDATE
PUT on /rooms/:id with payload :
```json
{
  "name": String,
  "description": String,
  "capacity": Number,
  "equipements": [String],
  "reservation": [Schema.ObjectId]
}
```

### DELETE
DELETE on /rooms/:id

### SHOW
GET on /rooms/:id

### INDEX
GET on /rooms

### SORT
GET on /rooms/sort=:equipment:greater=:capacity
separate equipment values ​​with ":"
greater is optionnal


## RESERVATION

### CREATE
POST on /reservations/:roomid with payload :
```json
{
  "name": String,
  "start_date": Date,
  "end_date": Date,
  "room": :roomid,
}
```

### UPDATE
PUT on /reservations/:id with payload :
```json
{
  "name": String,
  "start_date": Date,
  "end_date": Date,
  "room": :roomid,
}
```

### DELETE
DELETE on /reservations/:id

### SHOW
GET on /reservations/:id

### INDEX
GET on /reservations


