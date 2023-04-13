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
// this code is executed in the build process (which means it could be outdated once new info is added --> would need to reuild/redploy every time new data is added)
// 'revalidate' prop solves this problem ^. W revalidate set to some number, this pg will not just be generated during the process, but also be generated every couple of seconds on the server if there are requests for this page. The re-generated pages would replace the pre-generated pages, and ensure that the data is never older than 10 seconds (or whatever number you set revalidate to)
// this code will NEVER execute on the user's machine
// cache data until the page is revalidated

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
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