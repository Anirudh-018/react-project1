import axios from "axios";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function AddNewMeetups(props) {
  function addMeetup(meetupData){
    axios.post("https://react-test-e6d54-default-rtdb.firebaseio.com/meetups.json",JSON.stringify(meetupData)).then((response)=>{
      console.log(response);
    });
    // fetch(
    //   'https://react-test-e6d54-default-rtdb.firebaseio.com/',
    //   {
    //     method:'POST',
    //     body:JSON.stringify(meetupData),
    //     headers:{
    //       'Content-Type':'application/json'
    //     }
    //   }
    // );
  }
  return (
    <section>
      <h1>new</h1>
      <NewMeetupForm addMeetup={addMeetup}/>
    </section>
  );
}
export default AddNewMeetups;
