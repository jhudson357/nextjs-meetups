// our-domain.com/new-meetup
import Head from 'next/head'
import { useRouter } from 'next/router'

import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
const router = useRouter()  //use to reroute after submitting the form

  async function addMeetupHandler(enteredMeetupData) {
    // send request with meetup data to our API route
    // NextJS will trigger the function in the api/new-meetup file
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    console.log(data)

    router.push('/')
  }
  
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name='description' content='Add a new meetup for new networking opportunities.'/>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}

export default NewMeetupPage