// lib/mongodb.ts
import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // Your MongoDB connection string

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'Users',
      bufferCommands: false,
      connectTimeoutMS: 30000,
    }).then((mongoose) => {
      return mongoose;
    }).catch((error) => {
      cached.promise = null; // Reset promise cache in case of an error
      throw error;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
