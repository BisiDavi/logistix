import { MongoClient } from 'mongodb';

const { NEXT_PUBLIC_DATABASE_URL, NEXT_PUBLIC_DATABASE } = process.env;

if (!NEXT_PUBLIC_DATABASE_URL) {
    throw new Error('Please define the DATABASE_URL environment variable');
}

if (!NEXT_PUBLIC_DATABASE) {
    throw new Error('Please define the DATABASE environment variable');
}

let cached = (global as any).mongo;

if (!cached) {
    cached = (global as any).mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    console.log('NEXT_PUBLIC_DATABASE_URL', NEXT_PUBLIC_DATABASE_URL);

    if (!cached.promise) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        cached.promise = MongoClient.connect(
            NEXT_PUBLIC_DATABASE_URL,
            options,
        ).then(function (client) {
            return {
                client,
                db: client.db(NEXT_PUBLIC_DATABASE),
            };
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
