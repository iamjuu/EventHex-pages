import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Badge from "../../badge";
import FormFooter from "../../form/formFooter";
import RightSide from "../../sideSceion";
import Label from "../../label";
import Input from "../../input";
import Btn from "../../button";
import { FcGoogle } from "react-icons/fc";

const index = () => {
  const fields = [
    { label: "Your Name*", type: "text", placeholder: "Your name" },
    {
      label: "Email Adress*",
      type: "password",
      placeholder: "hello@alignui.com",
    },
    { label: "Password*", type: "password", placeholder: "password" },
  ];
  const additionallabel = {
    label: "Enter the email with which you've registered.",
  };
  const btnName = "login";
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
              <Badge
                img={User}
                span={"Sign Up your account"}
                p={"Enter your details to Sign up."}
              />
              <div className="form">
                <form>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Label Name={"Your Name*"} />
                    <Input
                      borderBottomLeftradius={"5px"}
                      borderBottomRightradius={"5px"}
                      borderTopLeftradius={"5px"}
                      borderTopRightradius={"5px"}
                      border={"1px solid rgba(226, 228, 233, 1)"}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Label Name={"Email Address*"} />
                    <Input
                      borderBottomLeftradius={"5px"}
                      borderBottomRightradius={"5px"}
                      borderTopLeftradius={"5px"}
                      borderTopRightradius={"5px"}
                      border={"1px solid rgba(226, 228, 233, 1)"}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Label Name={"Password*"} />
                    <Input
                      borderBottomLeftradius={"5px"}
                      borderBottomRightradius={"5px"}
                      borderTopLeftradius={"5px"}
                      borderTopRightradius={"5px"}
                      border={"1px solid rgba(226, 228, 233, 1)"}
                    />
                  </div>

                    <div className="line-div">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="third"></div>
                      </div>
                    </div>
                    <p>Morderate password, Must contain at least;</p>
                    <div>
                      <ul>
                        <li>At least 1 uppercase</li>
                        <li> At least 1 number </li>
                        <li> At least 8 character</li>
                      </ul>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"Confirm Your Password*"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                      />
                    </div>

                    <div style={{ width: "100%" }}>
                      <Btn radius={'10px'} color={'white'} padding={'8px'} width={"100%"} btnName={"Signup"} bg={"blue"} />
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
            <span
              style={{
                display: 'inline-block',
                color: 'rgba(226, 228, 233, 1)',
                width: '30%',
              }}
            >
              <hr style={{ width: '100%', margin: 0 }} />
            </span>
          </div>

          {/* Google Sign-In Button */}
          <div>
            <Btn
              icon={<FcGoogle />}
              fontsize="12px"
              btnName="Sign in with Google"
              border="1px solid #E2E4E9"
              radius="8px"
              width="100%"
            />
          </div>

                </form>

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

export default index;
