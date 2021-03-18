import React from "react";
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CloseIcon from '@material-ui/icons/Close';

const User = ({ id,phoneNumber, registeredGateways, verified }) => {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            item
            xs={12}>
            <div className={`d-flex flex-fill justify-content-between bg-light m-2 p-2`}><button className="w-10 btn-danger" style={{borderRadius:"25px"}} onClick={(e)=>console.log(e)}><DeleteForeverIcon /></button><span className="w-10">{verified ? (<p className="text-success"><VerifiedUserIcon /></p>) : (<span className="text-danger"><CloseIcon /></span>)}</span><span className="w-50">{registeredGateways}</span><span className="w-20 pr-1">{phoneNumber}</span></div>
        </Grid>
    );
};

export default User;
