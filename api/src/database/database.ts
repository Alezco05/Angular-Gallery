import {connect} from 'mongoose';

export async function startConnection(){
    await connect('mongodb://localhost/gallery',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('DATABASE CONNECT');
}

