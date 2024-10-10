import axios from "axios";

const IES_BASE_API='http://localhost:8082/ies';

class IevalvatorService
{
    getAllIevalvators(){
        return axios.get(IES_BASE_API);
    }

    getIevalvatorById(ievalvatorId){
        return axios.get(IES_BASE_API+'/'+ievalvatorId);
    }

    creatIievalvators(ievalvator){
        return axios.post(IES_BASE_API,ievalvator);
    }

    updateievalvators(ievalvatorID,ievalvator){
        return axios.put(IES_BASE_API+'/'+ievalvatorID,ievalvator);
    }

    deleteievalvators(ievalvatorID){
        return axios.delete(IES_BASE_API+'/'+ievalvatorID);
    }
}

export default new IevalvatorService();