import MeetupList from "../Components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The city who gives me everything",
    image:
      "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "El Carmen Valenica,Spain",
    description: "This was our first date. The beginning of everything",
  },
  {
    id: "m2",
    title: "The beginning of trust",
    image: "https://www.vivireuropa.com/wp-content/uploads/2014/03/jardines-rio-turia-valencia-1280x720.jpg",
    address: "Rio Turia, Valencia, Spain",
    description: "This was a really strange experience that impulse our love to become stronger",
  },
  {
    id: "m3",
    title: "My Second Home",
    image:
      "https://www.revistabrooke.com/wp-content/uploads/2019/09/budapest-2019-bigstock.jpeg",
    address: "Budapest, Hungary",
    description: "One of the most great steps in my life",
  },
  {
    id: "m4",
    title: "Our next destiny",
    image:
      "https://media.traveler.es/photos/6231abc7d03e1c5549e648ca/16:9/w_2560%2Cc_limit/The%2520Best%2520Places%2520for%2520Female%2520Solo%2520Travelers_Amsterdam_GettyImages-923546342.jpg",
    address: "Amsterdam, Netherlands",
    description: "This is going to be the best experience ever",
  },
  {
    id: "m5",
    title: "What`s next? ",
    image:
      "https://www.tripsavvy.com/thmb/Se_jILIwZY3ussVTJ1Go30bSS50=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-622449006-3d9161af2c4047a2938e1ee4e14375aa.jpg",
    address: "Bariloche, Argentina",
    description: "We know...Argentina!!",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
   
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, [])
  return (
      <MeetupList meetups={loadedMeetups} />
  );
};

export default HomePage;
