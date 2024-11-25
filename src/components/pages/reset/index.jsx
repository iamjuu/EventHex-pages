import { Container, ContainerWrap } from "../style";
import { Main } from "../login/style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Form from "../../../components/form";
import Badge from "../../badge";
import FromFooter from "../../form/formFooter";
import RightSide from "../../sideSceion";
const index = () => {

  const formFields = [
    { label: 'Email Address*', type: 'text', placeholder: 'hello@alignui.com',inputFoooter:"Enter the email with which you've registered." },
  ];
  const btnName= 'reset'

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
                <p>Don't have an account?</p>
                <RegisterBtn
                  btnName="Register"
                  color="black"
                  border="1px solid #DADCE0"
                  fontsize="14px"
                  radius="5px"
                />
              </div>
            </div>

            <div className="second">
              <Badge img={User} span={'Reset Password'} p={'Enter your email to reset your password.'} />
              <div  className="line">
              <hr
              style={{
                color: 'rgba(226, 228, 233, 1)',
                width: '60%',
                margin: 0,
              }}
            />  
              </div>
                          <Form fields={formFields}  btnName={btnName}/>
              <div className="form">
              </div>
            </div>
            <div className="third">
              <FromFooter />
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

export default index;
