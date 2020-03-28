import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

let isConnected;

export const connectToDB = async () => {
    try{

        if(isConnected) {
            console.log('=> using existing database connection');
            return Promise.resolve();
        }
        
        console.log('=> using new database connection');
        const db = await mongoose.connect(process.env.DB_URL);
        isConnected = db.connections[0].readyState;
    }
    catch(e){
        console.log('failed to connect DB', e)
    }
};