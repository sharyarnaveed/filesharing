const fs = require("fs");
const path = require("path");
const mime = require("mime-types"); // For MIME type detection

const share = require("../models/share.model.js");

const recieve = async (req, res) => {
  try {
    const { code } = req.body;
    console.log("Received code:", code);
    const recievedata = await share.findOne({
      where: { genartedcode: code },
    });

    if (!recievedata) {
      return res.status(404).json({ message: "File not found",success:false });
    }
    let filepath = recievedata.dataValues.filepath;
    const filePath = path.join(__dirname, "..", "..", filepath);
    const filename = path.basename(filepath);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }
    const contentType = mime.lookup(filepath) || 'application/octet-stream';
    console.log("Content type:", contentType, "Filename:", filename);

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error in getting file", error);
    res.status(500).json({ message: "Error downloading file" });
  }
};

module.exports = { recieve };