import React, { useContext } from "react";
import Grid from '@material-ui/core/Grid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import PaymentContext from './../../context/Context';

const Gateway = ({ key,name, enabled, commission, withdraw }) => {
    const context = useContext(PaymentContext);
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            item
            xs={12}>
            <div className={`d-flex flex-fill text-center justify-content-between bg-light p-2 m-2`}>
                <ButtonGroup style={{width:'30%'}} color="primary">
                    <Button variant="outlined" color="secondary"><DeleteForeverIcon /></Button>
                    <Button onClick={()=>{
                        context.handleGatewayEdit(name);
                    }}><EditIcon /></Button>
                </ButtonGroup>
                <span style={{width:'30%'}}>{enabled ? (<span className="text-success"><VerifiedUserIcon /></span>) : (<span className="text-danger"><CloseIcon /></span>)}</span>
                <span style={{width:'30%'}}>{commission}</span>
                <span style={{width:'30%'}}>{name}</span>
            </div>
        </Grid>
    );
};

export default Gateway;
