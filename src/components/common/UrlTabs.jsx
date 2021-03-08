import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PaymentContext from '../../context/Context';
import { DataGrid } from '@material-ui/data-grid';
import { Row, Col, Button } from 'react-bootstrap';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function UrlTabs() {
    const classes = useStyles();
    const context = useContext(PaymentContext);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const columns = [
        { field: 'enabled', headerName: 'enabled', width: 100 },
        { field: 'id', headerName: 'id', width: 400 },
        { field: 'url', headerName: 'name', width: 400 },
    ];
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="ALL DOMAINS" {...a11yProps(0)} />
                    <Tab label="EDITE DOMAINS" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div style={{ height: 400, width: '100%' }}>
                    <h4 className="text-right text-success">لیست تمامی دامین ها</h4>
                    <DataGrid rows={context.getUrls} columns={columns} pageSize={5} checkboxSelection />
                </div>      </TabPanel>
            <TabPanel value={value} index={1}>
                <hr />
                <h4 className="text-right text-success">اضافه کردن دامنه ی جدید</h4>
                <Row className="mb-2 flex-row">
                    <input onChange={(e) => { context.setUrlAction(e.target.value) }} className="form-control mb-2" placeholder="Enabled/Disabled" />
                    <input onChange={(e) => { context.setUrl(e.target.value) }} className="form-control mb-2" placeholder="NEW URL" />
                    <input onChange={(e) => { context.setID(e.target.value) }} className="form-control mb-2" placeholder="ID" />
                    <Button onClick={context.handlePostUrl} className="btn btn-success btn-block">اضافه کردن دامنه</Button>
                </Row>
                <hr />
                <h4 className="text-right text-warning">آپدیت دامنه</h4>
                <Row className="mb-2 flex-row">
                    <input onChange={(e) => { context.setUrlAction(e.target.value) }} className="form-control mb-2" placeholder="Enabled/Disabled" />
                    <input onChange={(e) => { context.setUrl(e.target.value) }} className="form-control mb-2" placeholder="NEW URL" />
                    <input onChange={(e) => { context.setID(e.target.value) }} className="form-control mb-2" placeholder="ID" />
                    <Button onClick={context.handlePutUrl} className="btn btn-warning btn-block">بروز رسانی</Button>
                </Row>
                <hr />
                <h4 className="text-right text-danger">حذف دامنه</h4>
                <Row className="mb-2 flex-row">
                    <input onChange={(e) => { context.setID(e.target.value) }} className="form-control mb-2" placeholder="ID" />
                    <Button onClick={context.handleDeleteUrl} className="btn btn-danger btn-block">حذف</Button>
                </Row>
            </TabPanel>
        </div>
    );
}