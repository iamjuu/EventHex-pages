import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Form from "../../../components/form";
import Badge from "../../badge";
import FormFooter from "../../form/formFooter";
import RightSide from "../../sideSceion";
const Verification = () => {
  const fields = [];
  const btnName = "Verify";
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
            </div>

            <div className="second">
              <Badge
                img={User}
                span={"Enter Verification Code"}
                p={"We’ve sent a code to james@alignui.com"}
              />

              <div className="form">
                <Form fields={fields} btnName={btnName} />
              </div>
            </div>
            <div className="third">
              <FormFooter />
            </div>
          </div>

          <div className="right">
            <RightSide />
            <div className="right-section-footer">
              <span style={{ fontSize: "24px" }}>{footerData.h1}</span>
              <p style={{ color: "rgba(82, 88, 102, 1)", fontSize: "16px" }}>
                {footerData.p}
              </p>
            </div>
          </div>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default Verification;
