import React, { useEffect, useContext } from "react";
import User from "./User";
import PaymentContext from './../../context/Context';
import Pagination from '@material-ui/lab/Pagination';

const Users = () => {
    const context = useContext(PaymentContext);
    useEffect(()=>{
        context.handleGetUsers();
    },[])
    return (
        <div className="w-90">
<div className="d-flex bg-light text-light p-2 m-2 justify-content-center">
<Pagination count={10} page={context.page} color="primary" onChange={context.handleChangeUsers} />

</div>
<div className={`d-flex text-center cursive text-light bg-dark m-2 p-2`}>
            <div className="col-md-3"><p>عملیات</p></div>
            <div className="col-md-3"><p>وضعیت کاربر</p></div>
            <div className="col-md-3"><p>درگاه های ثبت شده</p></div>
            <div className="col-md-3"><p>شماره موبایل</p></div>
            {/* <div className="col-md-2"><p>{transferMessage}</p></div> */}
            {/* <span>{addedDate}</span> */}
        </div>
            {context.getUsers.map(users => (
                <User
                    key={users.id}
                    phoneNumber={users.phoneNumber}
                    registeredGateways={users.registeredGateways}
                    verified={users.verified}
                />
            ))}
        </div>
    );
};

export default Users;
