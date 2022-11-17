import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './routers';

const app = express();
const port = 3002;

mongoose.connect('mongodb+srv://Yshrael:Yshrael.153241@cluster0.04i3d0j.mongodb.net/o_poder_do_js')
    .then(() => {
        app.listen(port, () => {
            console.log(`🚀 Server is running in port ${port}`);
        });

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        console.log('🍃 Connecting in mongoDB');
    })
    .catch(() => console.log(' Err in conect in mongoDB '));



