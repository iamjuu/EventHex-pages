import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Form from "../../../components/form";
import Badge from "../../badge";
import FormFooter from "../../form/formFooter";
import RightSide from "../../sideSceion";
const Signup = () => {

  const fields = [
    { label: 'Your Name*', type: 'text', placeholder: 'Enter your name' },
    { label: 'Email Address*', type: 'text', placeholder: 'Enter your email' },
    { label: 'Password*', type: 'password', placeholder: 'password' },
    { label: 'Confirm Password*', type: 'password', placeholder: 'password' },
   
  ];
  const btnName = 'login'
  const footerData = {
    h1: "Stay in Control of Your Time Off",
    p: "Track your time off balance and manage requests with the Time Off widget, ensuring a stress-free experience.",
  };

  
  return (
    <Container>
      <ContainerWrap>
        <Main>
          <div className="left">
            <div className="first">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="register-div">
                <p>Already have an account?</p>
                <RegisterBtn
                  btnName="Log in"
                  color="black"
                  border="1px solid #DADCE0"
                  fontsize="14px"
                  radius="5px"
                />
              </div>
            </div>

            <div className="second">
              <Badge img={User} span={'Sign Up your account'} p={'Enter your details to Sign up.'} />
              <div className="form">
              <Form fields={fields}  btnName={btnName}/>
              </div>
            </div>
            <div className="third"  >
              <FormFooter  />
            </div>
          </div>

          <div className="right">

            <RightSide   />
             <div className="right-section-footer">
        <span style={{fontSize:'24px'}}>{footerData.h1}</span>
        <p style={{color:'rgba(82, 88, 102, 1)',fontSize:'16px'}}>
{footerData.p}
        </p>
      </div>

          </div>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default Signup;
