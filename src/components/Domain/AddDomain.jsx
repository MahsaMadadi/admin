import { useContext } from "react";
import PaymentContext from './../../context/Context';

const AddDomain = () => {
    const context = useContext(PaymentContext);
    return ( 
        <div className="p-2 m-2">
        <h4 className="text-right text-success">اضافه کردن دامنه ی جدید</h4>
            <input onChange={(e) => { context.setUrlAction(e.target.value) }} className="form-control mb-2" placeholder="Enabled/Disabled" />
            <input onChange={(e) => { context.setUrl(e.target.value) }} className="form-control mb-2" placeholder="NEW URL" />
            <input onChange={(e) => { context.setID(e.target.value) }} className="form-control mb-2" placeholder="ID" />
            <button onClick={context.handlePostUrl} className="btn btn-success btn-block">اضافه کردن دامنه</button>
        </div>
     );
}
 
export default AddDomain;