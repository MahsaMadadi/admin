import React, { useEffect, useContext } from "react";
import Domain from "./Domain";
import AddDomain from "./AddDomain";
import EditDomain from "./EditDomain";
import PaymentContext from './../../context/Context';
import Pagination from '@material-ui/lab/Pagination';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Domains = () => {
    const context = useContext(PaymentContext);
    useEffect(() => {
        context.handleGetUrls();
    }, [])
    return (
        <div className="w-90" >
            {/* <div className="d-flex bg-light text-light p-2 m-2 justify-content-center">
                <Pagination count={10} page={1} color="primary" />

            </div> */}
            <div className="d-flex bg-dark text-light p-2 m-2 justify-content-between">
                <button onClick={()=>{context.setButtonDomain(!context.getButtonDomain)}} className="btn btn-success"><AddBoxIcon />افزودن دامنه</button>
                <span className="w-20">نام دامنه</span>
                <span className="w-10">وضعیت دامنه</span>
            </div>
            {context.getUrls.map(url => (
                <Domain
                    key={url.id}
                    enabled={url.enabled}
                    url={url.url}
                />
            ))}
{context.getButtonDomain ? (<AddDomain />) : null}
{context.getEditeDomainButton ? (<EditDomain />) : null}
        </div>
    );
};

export default Domains;
