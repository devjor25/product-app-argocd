import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/productDB')
//mongoose.connect('mongodb://localhost:27017/productDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/products', productRoutes);

// Redirect root route
app.get('/', (req, res) => {
  res.redirect('/products');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
