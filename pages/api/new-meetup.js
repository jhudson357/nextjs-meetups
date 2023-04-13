// API routes

// funciton that contains server-side code
// code in here will never be exposed to the client (so we can include credentials in here without compromising them)
// functions (typically named 'handler') are triggered whenever a request is sent to this route

// URL of this file: /api/new-meetup

import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    // this code is reusable wherever you want to establish a database connection
    const client = await MongoClient.connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    
    // insert one new document into this collection
    // a document is just a javascript object
    // result will be an object with the automatically generated id and data
    const result = await meetupsCollection.insertOne(data) 
    
    console.log(result)

    // close database connection when we're done
    client.close()

    // use response object to send back a response
    res.status(201).json({ message: 'Meetup inserted!' })
  }
}

export default handler