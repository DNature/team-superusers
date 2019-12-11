import { createWriteStream, unlink } from "fs";
import File from "../../models/File";

export default {
  Query: {
    //? Am try to access this single file
    async singleFile(_, { fileId }) {
      try {
        const file = await File.findById(fileId);

        file.id = file._id.toString();
        return file;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Query All Users
    async getFiles(root, args, context, info) {
      try {
        const files = await File.find().sort({ createdAt: -1 });
        return files;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async uploadFile(root, { file }) {
      const { createReadStream, filename, mimetype } = await file;
      try {
        const UPLOAD_DIR = "files";
        const stream = createReadStream();
        const path = `${UPLOAD_DIR}/${filename}`;
        const file = { filename, mimetype, path };

        // Store the file in the filesystem.
        await new Promise((resolve, reject) => {
          stream
            .on("error", error => {
              unlink(path, () => {
                reject(error);
              });
            })
            .pipe(createWriteStream(path))
            .on("error", reject)
            .on("finish", resolve);
        });

        // Record the file metadata in the DB.
        const fileToSave = new File(file);
        const savedFile = await fileToSave.save();
        savedFile.id = savedFile._id;
        return savedFile;
      } catch (err) {
        console.log(err);
        throw new Error("An error occurred: " + err);
      }
    }
  }
};
