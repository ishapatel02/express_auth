import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

// mongoose.connect(process.env.MONGO_URI!,)
mongoose.connect("mongodb://mongo:27017/express_authNew",)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

// app.use('/', () => {
//     console.log("Hello");
    
// })
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
