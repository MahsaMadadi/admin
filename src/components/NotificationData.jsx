import React,{useContext,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import PaymentContext from './../context/Context';



export default function NotificationData() {
  const context = useContext(PaymentContext);
  useEffect(()=>{
    context.handleGetNotifications();
  },[])
  const columns = [
  { field: 'addedDate', headerName: 'addedDate', width: 250 },
  { field: 'from', headerName: 'from', width: 100 },
  { field: 'reportType', headerName: 'reportType', width: 100 },
  { field: 'text', headerName: 'text', width: 350 },
  { field: 'id', headerName: 'id', width: 350 },
];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={context.getNotifications} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}