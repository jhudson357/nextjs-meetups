import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'

import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description}/>
      </Head>
      <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  )
}

// because this a dynamic page, we also need to export getStaticPaths (would not have to do this if we were using getServerSideProps, only if using getStaticProps on dynamic page)
export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  // find all documents in meetupsCollection (first argument), but each documnet object will only contain the _id
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

  client.close()
  
  return {
    // fallback key tells NextJS whether your paths array contains all supported parameter values or just some of them (false = all, true = not all paths are pre-generated so if user goes to one (i.e. m4), then the server will pre-generate the missing ones dynamically when requests for them are coming in)
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    }))
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  
  const meetupId = context.params
  // console.log('HIIIII', meetupId.meetupId)

  const client = await MongoClient.connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  // get a single meetup's data
  // pass in some data to filter for that specific meetup (meetupId pulled from params)
  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId.meetupId) })

  // console.log('bye', meetupsCollection)
  // console.log('hi', selectedMeetup)

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  }
}

export default MeetupDetailsPage