import axios from "axios";

const FRM_BASE_API='http://localhost:8082/fm';

class FormService
{
    getAllForms(){
        return axios.get(FRM_BASE_API);
    }

    getFormById(formId){
        return axios.get(FRM_BASE_API+'/'+formId);
    }

    createForms(form){
        return axios.post(FRM_BASE_API,form);
    }

    updateForms(formID,form){
        return axios.put(FRM_BASE_API+'/'+formID,form);
    }

    deleteForms(formID){
        return axios.delete(FRM_BASE_API+'/'+formID);
    }
}

export default new FormService();