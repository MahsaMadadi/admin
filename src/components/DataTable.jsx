import React,{useContext} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import PaymentContext from './../context/Context';



export default function DataTable() {
  const context = useContext(PaymentContext);
  const columns = [
  { field: 'id', headerName: 'ID', width: 350 },
  { field: 'paymentStatus', headerName: 'paymentStatus', width: 200 },
  { field: 'userPhoneNumber', headerName: 'userPhoneNumber', width: 200 },
  { field: 'amount', headerName: 'amount', width: 100 },
];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={context.getPayments} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}