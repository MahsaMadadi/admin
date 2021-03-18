import { useEffect,useContext } from "react";
import PaymentContext from './../../context/Context';

const EditDomain = () => {
    const context = useContext(PaymentContext);
    return ( 
        <div className="m-2 p-2">
        <h4 className="text-right text-warning">آپدیت دامنه</h4>
            <input onChange={(e) => { context.setUrlAction(e.target.value) }} value={context.getUrlAction} className="form-control mb-2" placeholder="Enabled/Disabled" />
            <input onChange={(e) => { context.setUrl(e.target.value) }} value={context.getUrl} className="form-control mb-2" placeholder="NEW URL" />
            <input onChange={(e) => { context.setID(e.target.value) }} value={context.getID} className="form-control mb-2" placeholder="ID" />
            <button onClick={context.handlePutUrl} className="btn btn-warning btn-block">بروز رسانی</button>
        </div>
     );
}
 
export default EditDomain;