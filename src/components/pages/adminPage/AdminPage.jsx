import { useState } from 'react';
import CommonTable from '../../tables/commonTable/CommonTable';
import './AdminPage.css';
import AddProduct from './AddProduct';
import { useEffect } from 'react';
import { useAuth } from '../../../services/AuthProvider';
import { redirect } from "react-router-dom";


const AdminPage = () => {

  // const { loggedIn } = useAuth();

  // if(!loggedIn) redirect("/");

  return <>
  <AddProduct/>
  <CommonTable/>
  </>;
}

export default AdminPage