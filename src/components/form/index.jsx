import React from 'react';
import Label from '../label'
import Input from '../input'
import {Link} from 'react-router-dom'
import {Form} from './style'
import LoginBtn from '../button'
import { FcGoogle } from "react-icons/fc";


const index = () => {
  return (
   <Form>
    <div>
    </div>
    <div style={{ fontSize:'14px'}}>
<Label  Name='Email Address*'/>
<Input  type={'type'}   placeholder={'Enter Your Email'}   width={'100%'}  fontsize={'14px'}  border={'1px solid #DADCE0'} radius={'10px'} />
    </div>


<div>
<Label Name='Password*'/>
<Input  type={'password'}   placeholder={'password'}  width={'100%'}  fontsize={'14px'}  border={'1px solid #DADCE0'} radius={'10px'} />
</div>


<div  style={{fontSize:'14px',   display:'flex', justifyContent:'space-between'}}>
    <div style={{display:'flex',gap:'5px'}}>
<Input  type={'checkbox'}   placeholder={'password'}  width={'10%'}  fontsize={'.9rem'}  border={'1px solid #DADCE0'} radius={'10px'} />
<span>keep on logged In</span>
    </div>
    <div >
        <Link to='/forgot'>
        <span>Forgot password?</span>
        </Link>
    </div>
</div>


<div>
<LoginBtn  fontsize={'14px'} btnName={'Login'} bg={'#375DFB'} radius={'8px'} width={'100%'} color={'white'} />
</div>


<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  className="span-div"
>
  <span style={{ display: 'inline-block', width: '30%' }}>
    <hr style={{ width: '100%', margin: 0 }} />
  </span>
  <span style={{ fontSize: '10px', margin: '0 10px' }}>or</span>
  <span style={{ display: 'inline-block', width: '30%' }}>
    <hr style={{  color:'#E2E4E9', width: '100%', margin: 0 }} />
  </span>
</div>


<div>     
<LoginBtn  icon={<FcGoogle/>}  fontsize={'12px'} btnName={`Sign in with google `} border={'1px solid #E2E4E9'} radius={'8px'} width={'100%'}  
/>
</div>
   </Form>
  );
}

export default index;
