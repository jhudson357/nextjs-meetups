import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetail 
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='123 Lane, Europe'
      description='This is the description.'
    />
  )
}

// because this a dynamic page, we also need to export getStaticPaths (would not have to do this if we were using getServerSideProps, only if using getStaticProps on dynamic page)
export async function getStaticPaths() {
  return {
    // fallback key tells NextJS whether your paths array contains all supported parameter values or just some of them (false = all, true = not all paths are pre-generated so if user goes to one (i.e. m4), then the server will pre-generate the missing ones dynamically when requests for them are coming in)
    fallback: false,
    paths: [
      { 
        params: {
          meetupId: 'm1',
        }, 
      },  
      { 
        params: {
          meetupId: 'm2',
        }, 
      },  
      { 
        params: {
          meetupId: 'm3',
        }, 
      },  
    ]
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  
  const meetupId = context.params

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: '123 Lane, Europe',
        description: 'This is the description...'
      }
    }
  }
}

export default MeetupDetailsPage