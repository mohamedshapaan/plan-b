import axios from "axios";
async function GetAllCourses() {
    try {
      const response = await axios.get('https://test.plan-b-eg.com/api/Courses/GetAllCourses');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  export default GetAllCourses;