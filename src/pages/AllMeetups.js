import axios from "axios";
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";
function AllMeetupsPage() {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  //in use effect also we can use it to render which prevents repetitive rendering 
  //here it is handled in if condition
  //basically sets when the side code should run
  useEffect(() => {}, []);
  if (loading) {
    axios
      .get("https://react-test-e6d54-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        isLoading(false);
        const meetups=[];
        //destruct the id from the json and push the other data into the array
        for(const key in data){
          const meetup={
            id:key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setData(meetups);
      });
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={data} />
      </section>
    );
  }
}

export default AllMeetupsPage;
