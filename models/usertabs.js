const { Schema, model } = require("mongoose");

// Define the tab schema
const tabSchema = new Schema(
  {
    tabId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    folderId: {
      // Include folderId in each tab
      type: String,
      required: true, // Make it required
    },
    timeSpent: {
      type: Number,
      default: 0, // Initialize to 0
    },
    clickCount: {
      type: Number,
      default: 0, // Initialize to 0
    },
  },
  { _id: false } // Disable automatic generation of _id for subdocuments
);

// Define the user schema
const usertabsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    folders: [
      {
        folderId: {
          type: String,
          required: true,
        },
        folderName: {
          type: String,
          required: true,
        },
        tabs: [tabSchema], // Define tabs as an array of tab subdocuments
      },
    ],
  },
  { timestamps: true }
);

// Create the User model
const Usertabs = model("usertabs", usertabsSchema);

module.exports = Usertabs;
