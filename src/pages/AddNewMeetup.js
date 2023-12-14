import axios from "axios";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function AddNewMeetups() {
  //use history is a web gook to access data from browser nav history
  const history=useHistory();
  function addMeetup(meetupData){
    axios.post("https://react-test-e6d54-default-rtdb.firebaseio.com/meetups.json",JSON.stringify(meetupData)).then((response)=>{
      console.log(response);
    }).then(()=>{
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>new</h1>
      <NewMeetupForm addMeetup={addMeetup}/>
    </section>
  );
}
export default AddNewMeetups;
