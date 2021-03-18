import React, { useContext } from "react";
import Grid from '@material-ui/core/Grid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import PaymentContext from './../../context/Context';

const Error = ({ key,name, enabled, commission, withdraw }) => {
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
                <ButtonGroup className="w-50" color="primary">
                    <Button variant="outlined" color="secondary"><DeleteForeverIcon /></Button>
                    <Button variant="outlined" color="secondary"><DeleteForeverIcon /></Button>
                    <Button variant="outlined" color="secondary"><DeleteForeverIcon /></Button>
                    <Button onClick={()=>{
                        context.setAllErrors(!context.getAllErrors);
                    }}>GetAll</Button>
                </ButtonGroup>
                <span className="w-50">{name}</span>
            </div>
        </Grid>
    );
};

export default Error;
