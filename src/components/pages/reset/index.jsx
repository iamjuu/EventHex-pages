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
              <hr
              style={{
                color: 'rgba(226, 228, 233, 1)',
                width: '80%',
                margin: 0,
              }}
            />              <Form fields={formFields} />
              <div className="form">
              </div>
            </div>
            <div className="third">
              <FromFooter />
            </div>
          </div>

          <div className="right">
            <RightSide   />
          </div>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default index;
