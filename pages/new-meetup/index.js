import NewMeetupForm from "../../Components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
