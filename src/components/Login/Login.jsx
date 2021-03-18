import { useContext } from 'react';

import PaymentContext from './../../context/Context';

const Login = () => {
    const context = useContext(PaymentContext);
    return ( 
<div className="login">
  <h1 className="cursive">Login</h1>
    <form method="post" onSubmit={e => e.preventDefault()}>
      <input onChange={(e)=>{
          context.setAdminUserName(e.target.value)
      }} className="m-2 cursive" type="text" name="u" placeholder="Username" required="required" />
        <input onChange={(e)=>{
          context.setAdminPassword(e.target.value)
      }} className="m-2 cursive" type="password" name="p" placeholder="Password" required="required" />
        <button onClick={context.handleLogin} className="cursive m-2 btn btn-primary btn-block btn-large">Login</button>
    </form>
</div>
     );
}
 
export default Login;