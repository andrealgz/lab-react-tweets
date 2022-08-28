import ProfileImage from "./profile-image/ProfileImage";
import User from "./user/User";
import Timestamp from "./timestamp/Timestamp";
import Message from "./message/Message";
import Actions from "./actions/Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle}/>
          <Timestamp timestamp={tweet.timestamp}/>
        </div> 

        <Message message={tweet.message}/>
        <Actions />
      </div>
      
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
