import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Form from "../../../components/form";
import Badge from "../../badge";
import FromFooter from "../../form/formFooter";
import RightSide from "../../sideSceion";
const index = () => {
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
              <Badge img={User} />
              <div className="user-div">
                <h1>Login in your account</h1>
                <p>Enter your details to login.</p>
              </div>

              <div className="form">
                <Form />
              </div>
            </div>
            <div className="third">
              <FromFooter />
            </div>
          </div>

          <div className="right">
            <RightSide />
          </div>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default index;
