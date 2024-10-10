import axios from "axios";

const STD_BASE_API='http://localhost:8082/students';

class StudentService
{
    getAllStudents(){
        return axios.get(STD_BASE_API);
    }

    getStudentById(studentId){
        return axios.get(STD_BASE_API+'/'+studentId);
    }

    createStudents(student){
        return axios.post(STD_BASE_API,student);
    }

    updateStudents(studentID,student){
        return axios.put(STD_BASE_API+'/'+studentID,student);
    }

    deleteStudents(studentID){
        return axios.delete(STD_BASE_API+'/'+studentID);
    }
}

export default new StudentService();