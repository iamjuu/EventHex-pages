import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo } from "../../../assets";
import RegisterBtn from "../../../components/button";
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
                  fontsize="1rem"
                  radius="5px"
                />
              </div>
            </div>
          </div>

          <div className="right">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
              ducimus eaque. Laborum at voluptas ducimus quos adipisci, eos
              atque, quaerat laudantium minus dolorem fugiat quae facilis non
              eum nobis.
            </h4>
          </div>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default index;
