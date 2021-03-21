import React from "react";
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CloseIcon from '@material-ui/icons/Close';

const User = ({ id, phoneNumber, registeredGateways, verified }) => {
    return (
        <div className={`d-flex text-center cursive bg-light m-2 p-2`}>
            <div className="col-md-3"><button className="btn-danger" style={{ borderRadius: "25px" }} onClick={(e) => console.log(e)}><DeleteForeverIcon /></button></div>
            <div className="col-md-3"><p>{verified ? (<p className="text-success"><VerifiedUserIcon /></p>) : (<p className="text-danger"><CloseIcon /></p>)}</p></div>
            <div className="col-md-3"><p>{registeredGateways}</p></div>
            <div className="col-md-3"><p>{phoneNumber}</p></div>
            {/* <div className="col-md-2"><p>{transferMessage}</p></div> */}
            {/* <span>{addedDate}</span> */}
        </div>
    );
};

export default User;
