import app from './app';
import database from './database';

database.sync();
console.log('Database running 3306');


app.listen(3001);
console.log('Server running at 3001');
