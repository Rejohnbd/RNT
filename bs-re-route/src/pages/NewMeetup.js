import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://nextjs-course-89834-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMetup={addMeetupHandler} />
    </div>
  );
}
export default NewMeetupPage;
