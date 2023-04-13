import Head from 'next/head'
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a huge list of highly active React meetups.'/>
      </Head>
      <MeetupList meetups={props.meetups}/>
    </>
  )
}

// add this for data fetching when pre-rendering
// calls getStaticProps BEFORE it calls the component function
// this code is executed in the build process (which means it could be outdated once new info is added --> would need to reuild/redploy every time new data is added)
// 'revalidate' prop solves this problem ^. W revalidate set to some number, this pg will not just be generated during the process, but also be generated every couple of seconds on the server if there are requests for this page. The re-generated pages would replace the pre-generated pages, and ensure that the data is never older than 10 seconds (or whatever number you set revalidate to)
// this code will NEVER execute on the user's machine
// cache data until the page is revalidated

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  // use meetupsCollection to find all the documents in that collection
  // convert to an array to get array of documents (like our dummy data)
  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      // need to use .map() to transform every meetup (specifically the id)
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}



// ALTERNATIVE TO getStaticProps() --> getServerSideProps()
// This function will NOT run during the build process, but instead always on the server after deployment
// this code will only run on the server, never the client side
// only use this if you need to get access to the request object OR if you have data the changes multiple times every second

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
  
//   // fetch data from an API
  
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage