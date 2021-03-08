import React,{useContext,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import PaymentContext from './../context/Context';



export default function UserData() {
  const context = useContext(PaymentContext);
  useEffect(()=>{
    context.handleGetUsers();
  },[])
  const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'phoneNumber', headerName: 'phoneNumber', width: 200 },
  { field: 'registeredGateways', headerName: 'registeredGateways', width: 200 },
  { field: 'verified', headerName: 'verified', width: 200 },
];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={context.getUsers} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}