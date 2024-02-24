import styled from "styled-components";
import { Formik } from "formik";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    align-items: center;
    margin-top: 0;
  }
`;

const FormCard = styled(Card)`
  width: 300px;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.55) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(11px) !important;
  -webkit-backdrop-filter: blur(11px) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <BackgroundVideo autoPlay muted loop poster="./landingvideo.png">
        <source src="./background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Content>
        <h1 className="title">Welcome to FishList</h1>
        <Formik
          initialValues={{ location: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.location) {
              errors.location = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <FormCard>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <TextField
                    select
                    fullWidth
                    label="Location"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.location && Boolean(errors.location)}
                    helperText={touched.location && errors.location}
                    margin="normal"
                  >
                    <MenuItem value="Location1">Location1</MenuItem>
                    <MenuItem value="Location2">Location2</MenuItem>
                  </TextField>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    Dive
                  </Button>
                </form>
              </CardContent>
            </FormCard>
          )}
        </Formik>
      </Content>
    </HomePageContainer>
  );
};

export default HomePage;
