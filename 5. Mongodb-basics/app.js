const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.2e6tllz.mongodb.net/")
  .then(console.log("Database connected successfully"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// Create user model
const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    // Create a new user
    // const newUser = await user.create({
    //   name: "Usman Mahmud",
    //   email: "usman@gmail.com",
    //   age: 0,
    //   isActive: true,
    //   tags: ["Father", "Son"],
    // });

    const newUser = new User({
      name: "Updated User",
      email: "update@gmail.com",
      age: 55,
      isActive: true,
      tags: ["delete"],
    });

    await newUser.save();

    console.log("Created new user", newUser);

    // Get all users
    // const allUsers = await User.find({});
    // console.log(allUsers);

    // const getUserOfActiveFalse = await User.find({ isActive: true });
    // console.log(getUserOfActiveFalse);

    // Always return the first document which matches the criteria
    // const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    // console.log(getJohnDoeUser);

    // Get user by user id
    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // const getUserByUserId = await User.findById("6836651db870ab0c0478cb3d");
    // console.log(getLastCreatedUserByUserId);

    // Get only selected properties
    // const selectedFields = await User.find().select("name email _id");
    // console.log(selectedFields);

    // Get limited user
    // const limitedUsers = await User.find().limit(5).skip(2);
    // console.log(limitedUsers);

    // Sort the user
    // const sortedUser = await User.find().sort({ age: -1 }); // descending order
    // // const sortedUser = await User.find().sort({ age: 1 }); // ascending order
    // console.log(sortedUser);

    // count specific fields data
    // const countDocument = await User.countDocuments({ isActive: true });
    // console.log(countDocument);

    // Delete a user
    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log("Deleted user ->", deletedUser);

    // Update a user
    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 30 },
        $push: { tags: "updated" },
      },
      {
        new: true,
      }
    );
    console.log("Updated user ->", updatedUser);
  } catch (error) {
    console.log("Error -> ", error);
  } finally {
    mongoose.connection.close();
  }
}

runQueryExample();
