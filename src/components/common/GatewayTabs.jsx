import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PaymentContext from './../../context/Context';
import { DataGrid } from '@material-ui/data-grid';
import { Row,Col,Button } from 'react-bootstrap';

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

export default function GatewayTabs() {
    const classes = useStyles();
    const context = useContext(PaymentContext);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const columns = [
        { field: 'id', headerName: 'id', width: 350 },
        { field: 'name', headerName: 'name', width: 150 },
        { field: 'enabled', headerName: 'enabled', width: 200 },
        { field: 'commission', headerName: 'commission', width: 150 },
        { field: 'withdraw', headerName: 'withdraw', width: 150 },
    ];
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="All Gateways" {...a11yProps(0)} />
                    <Tab label="Edite Gateways" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div style={{ height: 400, width: '100%'}}>
                    <h4 className="text-right text-success">لیست تمامی درگاه ها</h4>
                    <DataGrid rows={context.getGateways} columns={columns} pageSize={5} checkboxSelection />
                </div>      </TabPanel>
            <TabPanel value={value} index={1}>
                <h4 className="text-right text-success">بروزرسانی درگاه پرداخت</h4>
                <hr />
                <Row className="mb-2">
                    <Col>
                    <input className="form-control" placeholder="ENTER GATEWAY ID" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter deposit" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter commission" />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                    <input className="form-control" placeholder="Enter enabled" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter failCounter" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter name" />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                    <input className="form-control" placeholder="Enter path" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter pin" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter register" />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                    <input className="form-control" placeholder="Enter registerDate" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter supportedCards" />
                    </Col>
                    <Col>
                    <input className="form-control" placeholder="Enter supportedCards" />
                    </Col>
                </Row>
                <Button className="btn btn-success btn-block">بروزرسانی</Button>
                 </TabPanel>
        </div>
    );
}