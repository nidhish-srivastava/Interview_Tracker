import { useTrackerContext } from "../context/context";
import { useState,useEffect } from "react";
import { FormData } from "./Create";

const Profile = () => {
  const { loggedInUser } = useTrackerContext();
  const [userPosts, setUserPosts] = useState<FormData>();

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3000/post/${loggedInUser?.id}`,{
        headers : {
          Authorization : "Bearer " + localStorage.getItem("token")
        }
      }) 
      const data = await response.json();
      setUserPosts(data);
    }
  useEffect(()=>{
    getUserPosts()
  },[])
  return (
    <div>
      <h2>
      {userPosts?.topic}
      </h2>
      <div>
      {userPosts?.desc}
      </div>
      <p>
      {userPosts?.details}
      </p>
      <div>
      {userPosts?.tags?.map(e=><button>{e.name}</button>)}
      </div>
    </div>
  );
};

export default Profile;