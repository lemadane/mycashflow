import cors from 'cors';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import registrationRoutes from './routes/registrationRoutes';

const { log } = console;

const app = express();
app.use(   
   cors({
      origin: ['http://localhost:3000'],
   }),

   helmet(),

   // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
   json(), 

   // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
   urlencoded(      
      {
         // The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
         extended: false,
      }
   ),
);

app.use('api/user', registrationRoutes);


app.listen(4000, () => {
   log('Listening to http:/localhost:4000');
});
