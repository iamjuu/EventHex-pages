import React from 'react';
import Label from '../label';
import Input from '../input';
import { Link } from 'react-router-dom';
import { Form, FromContainer } from './style';
import LoginBtn from '../button';
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa"; // Lock Icon
import { AiOutlineMail } from "react-icons/ai"; // Message Icon

const index = ({ fields, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FromContainer>
        {fields.map((field, index) => (
          <div key={index} style={{ fontSize: '14px', position: 'relative', marginBottom: '16px' }}>
            <Label Name={field.label} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* Conditional Icon Display */}
              {field.type === 'password' && (
                <FaLock
                  style={{
                    position: 'absolute',
                    left: '2px',
                    color: '#DADCE0',
                  }}
                />
              )}
              {field.type === 'text' && (
                <AiOutlineMail
                  style={{
                    position: 'absolute',
                    left: '2px',
                    color: '#DADCE0',
                  }}
                />
              )}
             <Input
  type={field.type}
  placeholder={field.placeholder}
  width="100%"
  fontsize="14px"
  border="1px solid #DADCE0"
  radius="10px"
  style={{
    paddingLeft: field.type === 'password' || field.type === 'text' ? '35px' : '8px', 
  }}
/>
            </div>
          </div>
        ))}

        <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{   width:'50%', display: 'flex', gap: '5px' }}>
            <Input
              type="checkbox"
              placeholder="password"
              width="10%"
              fontsize=".9rem"
              border="1px solid #DADCE0"
              radius="10px"
            />
            <span>Keep me logged in</span>
          </div>
          <div style={{ width:'50%',  display:'flex' ,justifyContent:'end'}}>
            <Link to="/forgot">
              <span>Forgot password?</span>
            </Link>
          </div>
        </div>

        {/* Form Footer */}
        <div className="form-footer">
          {/* Login Button */}
          <div>
            <LoginBtn
              padding="10px"
              fontsize="14px"
              btnName="Login"
              bg="#375DFB"
              radius="8px"
              width="100%"
              color="white"
            />
          </div>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="span-div"
          >
<span style={{ display: 'inline-block', color: "#DADCE0", width: '30%' }}>
<hr style={{ width: '100%', margin: 0 }} />
            </span>
            <span style={{ fontSize: '10px', margin: '0 10px' }}>OR</span>
            <span style={{ display: 'inline-block',  color:'rgba(226, 228, 233, 1)' ,width: '30%' }}>
              <hr style={{ color: '#rgba(226, 228, 233, 1)', width: '100%', margin: 0 }} />
            </span>
          </div>

          {/* Google Sign-In Button */}
          <div>
            <LoginBtn
              icon={<FcGoogle />}
              fontsize="12px"
              btnName="Sign in with Google"
              border="1px solid #E2E4E9"
              radius="8px"
              width="100%"
            />
          </div>
        </div>
      </FromContainer>
    </Form>
  );
};

export default index;
