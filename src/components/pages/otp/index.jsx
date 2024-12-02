import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Form from "../../../components/form";
import Badge from "../../badge";
import FormFooter from "../../form/formFooter";
import Input from "../../input";
import RightSide from "../../sideSceion";

const index = () => {
  const inputFields = [
    {
      borderBottomLeftradius: "10px",
      borderTopLeftradius: "10px",
      borderTopRightradius: "10px",
      borderBottomRightradius: "10px",
      height: "60px",
      width: "80px",
      fontsize: "2rem",
      border: "1px solid #DADCE0",
    },
    {
      borderBottomLeftradius: "10px",
      borderTopLeftradius: "10px",
      borderTopRightradius: "10px",
      borderBottomRightradius: "10px",
      height: "60px",
      width: "80px",
      fontsize: "2rem",
      border: "1px solid #DADCE0",
    },
    {
      borderBottomLeftradius: "10px",
      borderTopLeftradius: "10px",
      borderTopRightradius: "10px",
      borderBottomRightradius: "10px",
      height: "60px",
      width: "80px",
      fontsize: "2rem",
      border: "1px solid #DADCE0",
    },
    {
      borderBottomLeftradius: "10px",
      borderTopLeftradius: "10px",
      borderTopRightradius: "10px",
      borderBottomRightradius: "10px",
      height: "60px",
      width: "80px",
      fontsize: "2rem",
      border: "1px solid #DADCE0",
    },
  ];

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
                p={"We ve sent code to james@alignui.com"}
              />
              <form>
                <div className="form">
                  {inputFields.map((field, index) => (
                    <Input key={index} {...field} />
                  ))}
                </div>
                <div
                  style={{ width: "100%", display: "flex", justifyContent: "center" }}
                >
                  <RegisterBtn
                    width={"80%"}
                    radius={"10px"}
                    btnName={"verify"}
                    bg={"#4F46E5"}
                    color={"white"}
                    padding={"10px"}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p>Experience issue receiving the code?</p>
                  <a href="">Resend code</a>
                </div>
              </form>
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

export default index;
