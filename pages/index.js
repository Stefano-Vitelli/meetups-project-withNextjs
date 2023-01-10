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
  image:'https://www.bahamas.com/assets/images/home-ttd-leisure-mobile.jpg',
  address: 'Some address 2, 523435 Bahamas',
  description: 'This is the second meetup'
},
{
  id: 'm3',
  title: 'A third Meetup',
  image:'https://media.cntraveler.com/photos/5d4ad62f3ff33100080a9123/5:4/w_2810,h_2248,c_limit/01-PuertoRico-2019-ElYunqueNationalForest-GettyImages-985510974.jpg',
  address: 'Some address 5, 1234 Puerto Rico',
  description: 'This is the third meetup'
},
{
  id: 'm4',
  title: 'A fourth Meetup',
  image:'https://enviajes.cl/wp-content/uploads/2021/04/Brasil-lugares-Salvador-de-Bahia-Enviajes.jpg',
  address: 'Some address 5, 1234 Salvador de Bahia',
  description: 'This is the fourth meetup'
},
{
  id: 'm5',
  title: 'A fifth Meetup',
  image:'https://concepto.de/wp-content/uploads/2019/02/selva-tropical-e1550498021537.jpg',
  address: 'Some address 5, 1234 Selva Ecuatorial',
  description: 'This is the fifth meetup'
}]

const HomePage = () => {
  return ( 
    <MeetupList meetups={DUMMY_MEETUPS} />
   );
}
 
export default HomePage;