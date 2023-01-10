import MeetupList from "../Components/meetups/MeetupList";

const DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A first Meetup',
  image:'https://webcamsdemexico.com/wp-content/uploads/2021/02/mexico-2379694_1920.jpg',
  address: 'Some address 5, 1234 Mexico',
  description: 'This is a first meetup'
},
{
  id: 'm2',
  title: 'A second Meetup',
  image:'https://webcamsdemexico.com/wp-content/uploads/2021/02/mexico-2379694_1920.jpg',
  address: 'Some address 5, 1234 Mexico',
  description: 'This is the second meetup'
},
{
  id: 'm3',
  title: 'A third Meetup',
  image:'https://webcamsdemexico.com/wp-content/uploads/2021/02/mexico-2379694_1920.jpg',
  address: 'Some address 5, 1234 Mexico',
  description: 'This is the third meetup'
},
{
  id: 'm4',
  title: 'A fourth Meetup',
  image:'https://webcamsdemexico.com/wp-content/uploads/2021/02/mexico-2379694_1920.jpg',
  address: 'Some address 5, 1234 Mexico',
  description: 'This is the fourth meetup'
},
{
  id: 'm5',
  title: 'A fifth Meetup',
  image:'https://webcamsdemexico.com/wp-content/uploads/2021/02/mexico-2379694_1920.jpg',
  address: 'Some address 5, 1234 Mexico',
  description: 'This is the fifth meetup'
}]

const HomePage = () => {
  return ( 
    <MeetupList meetups={DUMMY_MEETUPS} />
   );
}
 
export default HomePage;