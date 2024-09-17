import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import StoreList from '../components/User/StoreList';
import { useUser } from '../context/UserContext';


const HomePage = () => {
    const { userInfo } = useUser();

    return (
        <>
        {userInfo ? 
        <h3 className='text text-success text-center'>Welcome {userInfo.name}</h3>: <></>
        }
        <StoreList />
        </>
    );
};

export default HomePage;
