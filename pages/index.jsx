import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: '123 City Center, Munich, Germany',
    description: 'This is the description',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: '456 City Center, Munich, Germany',
    description: 'This is the description',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: '789 City Center, Munich, Germany',
    description: 'This is the description',
  },
]

const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups}/>
  )
}

// add this for data fetching when pre-rendering
// calls getStaticProps BEFORE it calls the component function
// this code is executed in the build process
// this code will NEVER execute on the user's machine
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage