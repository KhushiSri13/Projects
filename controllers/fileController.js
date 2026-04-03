const File = require("../models/fileSchema");

module.exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const fileName = req.body.customName && req.body.customName.trim() !== ""
      ? req.body.customName
      : req.file.originalname;

    const newFile = await File.create({
      userId: req.user._id,
      name: fileName,
      path: req.file.path,
      size: req.file.size,
      type: req.file.mimetype
    });

    res.redirect("/myUploads");

  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).send("Server Error while uploading file");
  }
};
exports.getMyUploads = async (req, res) => {
  try {
    const files = await File.find({ userId: req.user._id }).sort({ createdAt: -1 });

    res.render("myUploads", { 
      files,
      user: req.user   
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files");
  }
};
const path = require("path");
const fs = require("fs");

exports.downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).send("File not found");
    }

    
    if (file.userId.toString() !== req.user._id.toString()) {
      return res.status(403).send("Unauthorized");
    }

    res.download(path.resolve(file.path), file.name);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error downloading file");
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).send("File not found");
    }

    if (file.userId.toString() !== req.user._id.toString()) {
      return res.status(403).send("Unauthorized");
    }

    // delete from storage
    fs.unlinkSync(file.path);

    // delete from DB
    await file.deleteOne();

    res.redirect("/myUploads");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting file");
  }
};