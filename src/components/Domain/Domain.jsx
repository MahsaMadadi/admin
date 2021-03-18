import React, { useContext } from "react";
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PaymentContext from './../../context/Context';
import EditIcon from '@material-ui/icons/Edit';

const Domain = ({ key , enabled, url }) => {
    const context = useContext(PaymentContext);
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            item
            xs={12}>
            <div className={`d-flex flex-fill justify-content-between bg-light m-2 p-2`}>
                <span style={{width:'40%',textAlign:"left"}}>
                <ButtonGroup color="primary" aria-label="contained primary button group">
                    <Button onClick={()=>{
                        context.handleDeleteUrl(url);
                        console.log(url)
                    }} color="secondary"><DeleteForeverIcon /></Button>
                    <Button onClick={()=>{
                        context.handleGetUrl(url.replace("https://", ""));
                        context.setEditeDomainButton(!context.getEditeDomainButton);
                    }} className="btn-warning"><EditIcon /></Button>
                </ButtonGroup>
                </span>
                <span style={{width:'40%'}} className="text-left">{url}</span>
                <span style={{width:'20%'}} className="text-right">
                    <Switch
                        color="primary"
                        checked={enabled}
                    />
                </span>
                
            </div>
        </Grid>
    );
};

export default Domain;
