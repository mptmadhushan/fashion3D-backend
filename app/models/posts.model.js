const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    Height: {
      type: DataTypes.STRING,
    },
    Chest: {
      type: DataTypes.STRING,
    },
    Neck: {
      type: DataTypes.STRING,
    },

    Neck_Height: {
      type: DataTypes.STRING,
    },
    Shoulders: {
      type: DataTypes.STRING,
    },
    Shoulder_Slope: {
      type: DataTypes.STRING,
    },    Bust_Girth: {
      type: DataTypes.STRING,
    },
    Stomach_Form: {
      type: DataTypes.STRING,
    },
    Waist: {
      type: DataTypes.STRING,
    },

    Stomach_Form: {
      type: DataTypes.STRING,
    },
    Waist: {
      type: DataTypes.STRING,
    },
    Shoulder_Slope: {
      type: DataTypes.STRING,
    },  Hip_Girth: {
      type: DataTypes.STRING,
    },

    Hip_Height: {
      type: DataTypes.STRING,
    },
    Thigh_Girth: {
      type: DataTypes.STRING,
    },
    Lower_Leg_Length: {
      type: DataTypes.STRING,
    },
    
    createdAt: {
      type: DataTypes.DATE,
      //note here this is the guy that you are looking for
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
  });

  return Post;
};
