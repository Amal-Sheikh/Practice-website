const mongoose = require('mongoose'); // Import the mongoose library for MongoDB interaction
const { Schema } = mongoose; // Destructure Schema from mongoose for schema definitions

// Connect to the MongoDB database named "AmalKart"
mongoose.connect('mongodb://127.0.0.1:27017/AmalKart', {
  // Remove the deprecated options
})
.then(() => {
  console.log('MongoDB connected successfully'); // Log success message upon successful connection
})
.catch((err) => {
  console.error('MongoDB connection error:', err); // Log error message if connection fails
});

// Define a schema for the "Kitten" model
const kittySchema = new mongoose.Schema({
  title: String, // Field for the title of the kitten
  name: String,  // Field for the name of the kitten
});

// Add a method to the schema that logs the kitten's greeting
kittySchema.methods.speak = function() {
  let greeting = this.name ? "Meow, my name is " + this.name : "I don't have a name"; // Create a greeting based on the name
  console.log(greeting); // Log the greeting
};

// Create a model named "Amalkitty" based on the kittySchema
const Kitten = mongoose.model("Amalkitty", kittySchema);

// Instantiate two new Kitten objects with names
const Amalkitty = new Kitten({ name: "AMalKitty" }); // First kitten instance
const Amalkitty2 = new Kitten({ name: "AMalKitty2" }); // Second kitten instance

// Function to save the kittens to the database
const saveKittens = async () => {
  try {
    await Amalkitty.save(); // Save the first kitten to the database
    Amalkitty.speak(); // Call the speak method on the first kitten
    
    await Amalkitty2.save(); // Save the second kitten to the database
    Amalkitty2.speak(); // Call the speak method on the second kitten
  } catch (err) {
    console.error(err); // Log any error that occurs during saving
  }
};

// Call the function to save the kittens (commented out)
 saveKittens(); 
// Uncomment to execute the saving function

// Function to fetch kittens from the database
const fetchKittens = async () => {
  try {
    const kittens = await Kitten.find({ name: "AmalKitty2" }); // Find kittens with the specified name
    console.log(kittens); // Log the found kittens
  } catch (err) {
    console.error(err); // Log any error that occurs during fetching
  }
};

// Call the fetch function (currently executing)
fetchKittens(); 
// Uncomment to execute the fetching function

