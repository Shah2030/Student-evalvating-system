import axios from "axios";

const RFM_BASE_API='http://localhost:8082/er';

class EvalvateService
{
    getAllEvalvates(){
        return axios.get(RFM_BASE_API);
    }

    getEvalvateById(evalvateId){
        return axios.get(RFM_BASE_API+'/'+evalvateId);
    }

    createEvalvates(evalvate){
        return axios.post(RFM_BASE_API,evalvate);
    }

    updateEvalvates(evalvateID,evalvate){
        return axios.put(RFM_BASE_API+'/'+evalvateID,evalvate);
    }

    deleteEvalvates(evalvateID){
        return axios.delete(RFM_BASE_API+'/'+evalvateID);
    }
}

export default new EvalvateService();