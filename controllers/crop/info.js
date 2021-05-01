const { isAuthorized } = require("../token");
const { Farm, User_Farms } = require("../../models");

module.exports = async (req, res) => {
  /* 
    url : https://api.cakes.com
/crop/info/:farmid
    req : req.params.farmid로 farm id 받을 수 있다.
    res : {    
   "data": [
      {
        "crops_id": 3,
        "name": "hello",
        "seed": [
          {
            "seed_id": 1,
            "seed_name": "useEffect 훈련",
            "isHarvested": true
          },
          {
            "seed_id": 1,
            "seed_name": "Axios 훈련",
            "isHarvested": true
          }
        ]
      },
      {
        "crops_id": 4,
        "name": "hello",
        "seed": [
          {
            "seed_id": 3,
            "seed_name": "dispatch 훈련",
            "isHarvested": true
          },
          {
            "seed_id": 4,
            "seed_name": "reduce 훈련",
            "isHarvested": true
          }
        ]
      }
    ]
}
    */
  console.log(req.params.farmid);
  res.send("바보");
};
