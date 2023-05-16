const db = require("../models");
const Posts = db.posts;

exports.createPost = async (req, res) => {
  const photo = {
    Height: req.body.Height,
    Chest: req.body.Chest,
    Neck: req.body.Neck,
    Neck_Height: req.body.Neck_Height,
    Shoulders: req.body.Shoulders,
    Shoulder_Slope: req.body.Shoulder_Slope,
    Bust_Girth: req.body.Bust_Girth,
    Stomach_Form: req.body.Stomach_Form,
    Waist: req.body.Waist,
    Arm_Length: req.body.Arm_Length,
    Upper_Arm_Girth: req.body.Upper_Arm_Girth,
    Wrist: req.body.Wrist,
    Hip_Girth: req.body.Hip_Girth,
    Hip_Height: req.body.Hip_Height,
    Thigh_Girth: req.body.Hip_Height,
    Lower_Leg_Length: req.body.Hip_Height,
    Calf: req.body,
  };

  Posts.create(photo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    });
};
exports.findPostById = (req, res) => {
  const postId = req.params.postId;

  return Posts.findByPk(postId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    });
};

exports.findAll = (req, res) => {
  return Posts.findAll({}).then((package) => {
    console.log(">> All posts", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};
