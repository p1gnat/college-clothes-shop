import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router";

const H1 = styled.h1`
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.69px;
  letter-spacing: -0.01em;
  text-align: center;
`;
const Button = styled.button`
  cursor: pointer;
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20.43px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  border: 0px;
  background-color: var(--theme-contrast);
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;
const PError = styled.p`
  margin-left: 12px;

  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: left;

  color: #ff3939;
`;

const A = styled.a`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--theme-contrast);
`;

const NavLinkStyled = styled(NavLink)`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: center;
  text-decoration: underline;
  color: var(--theme-contrast);
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const Section = styled.section`
  margin-top: 15px;

  display: flex;
  flex-flow: column;
  gap: 15px;
`;

const Label = styled.label`
  padding: 0 0 0 10px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: left;
  color: rgba(0, 0, 0, 0.69);
`;

const Input = styled.input`
  padding: 10px 10px 10px 20px;
  width: 270px;
  height: 40px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: left;
  border: 0px;
  border-radius: 20px;
  background-color: #00000021;

  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  margin-top: 40px;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 23px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

const ButtonDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 62px;
  padding: 0 48px;
`;

const schema = yup.object({
  usernameEmail: yup.string().required("Please enter the username or name"),
  password: yup.string().required("Please enter the password"),
});

const Login = () => {
  // let params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Wrapper>
      {/* <h1>It`s a register page with id: {params.id}</h1> */}
      <H1>Log In</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Username or email
          </Label>
          <Input type="text" {...register("usernameEmail")} />
          <PError>{errors.usernameEmail?.message}</PError>
        </FormDiv>

        <FormDiv>
          <Label
            htmlFor=""
            onClick={(e) => {
              e.target.nextElementSibling.focus();
            }}
          >
            Password
          </Label>
          <Input type="password" {...register("password")} />
          <PError>{errors.password?.message}</PError>
        </FormDiv>
        <ButtonDiv>
          <Button type="submit">Login</Button>
        </ButtonDiv>
      </Form>
      <Section>
        <A href="#">Forgot your password?</A>
        <P>
          Doesn’t have an account?
          <NavLinkStyled to="/register" style={{ marginLeft: "5px" }}>
            Register
          </NavLinkStyled>
        </P>
      </Section>
    </Wrapper>
  );
};

export default Login;
