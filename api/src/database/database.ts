import {connect} from 'mongoose';

export async function startConnection(){
    await connect('mongodb://localhost/gallery',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('DATABASE CONNECT');
}

