import mongoose from "mongoose";

export async function connectDB() {
    const uri = process.env.MONGO_URI;
    if (typeof uri == 'string') {
        const client = await mongoose.connect(uri);
        return client.connection;
    } else {
        console.log('Erro na conexão com o banco de dados.');
    }
}

