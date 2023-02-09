import axios from "axios";
async function GetCourseDetails(id) {

    try {

      const response = await axios.get('https://test.plan-b-eg.com/api/Courses/GetCourseDetails?courseId='+id+'&lang=en',
      JSON.stringify( {username:"basem.ashraf@smartapp-eg.com",password: "123@@@"} ),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  export default GetCourseDetails;