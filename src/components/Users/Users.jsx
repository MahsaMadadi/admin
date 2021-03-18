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
            <div className="d-flex bg-dark text-light p-2 m-2 justify-content-between"><span className="w-10">عملیات</span><span className="w-10">وضعیت کاربر</span><span className="w-50">درگاه های ثبت شده</span><span className="w-20 pr-1">شماره موبایل کاربر</span></div>
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
