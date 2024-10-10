import axios from "axios";

const EES_BASE_API='http://localhost:8082/ees';

class EevalvatorService
{
    getAllEevalvators(){
        return axios.get(EES_BASE_API);
    }

    getEevalvatorById(eevalvatorId){
        return axios.get(EES_BASE_API+'/'+eevalvatorId);
    }

    creatEeevalvators(eevalvator){
        return axios.post(EES_BASE_API,eevalvator);
    }

    updateEevalvators(eevalvatorID,eevalvator){
        return axios.put(EES_BASE_API+'/'+eevalvatorID,eevalvator);
    }

    deleteEevalvators(eevalvatorID){
        return axios.delete(EES_BASE_API+'/'+eevalvatorID);
    }
}

export default new EevalvatorService();