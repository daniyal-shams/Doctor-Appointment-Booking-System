import { useState } from "react";
import { createContext } from "react";
import {toast} from 'react-toastify';
import axios from 'axios';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken') : '');
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL ;
    const [doctors, setDoctors] = useState([]);

    const getAllDoctors = async () => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors', {},{headers:{aToken}});
            if(data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    const value = {
        aToken,setAToken,
        backendUrl,
        doctors,
        getAllDoctors
    }


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
};

export default AdminContextProvider ;