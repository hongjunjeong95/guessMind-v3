import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log(`✅ Connected to DB`);
const handleError = (error) => console.log(`❌ Connection ${error}`);

mongoose.set("useCreateIndex", true);

db.on("error", handleError);
db.once("open", handleOpen);
