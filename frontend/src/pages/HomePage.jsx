import styled from "styled-components";
import { Formik } from "formik";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35); /* Adjust the opacity as needed */
  z-index: 1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-height: 100%;
  overflow: auto;

  .title {
    align-items: center;
    margin-top: 0;
  }
`;

const FormCard = styled(Card)`
  width: 100%;
  max-width: 430px;
  margin-top: 20px;
  text-align: center;

  .button {
    margin-top: 20px;
  }

  .form {
    flex-direction: column;
    justify-content: center;
  }
  .text-field {
    text-align: left;
  }
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <BackgroundOverlay />
      <BackgroundVideo autoPlay muted loop poster="./landingvideo.png">
        <source src="./landingPageVideoSmallSize.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Content>
        {/* <h1 className="title">Welcome to FishList</h1> */}
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
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <FormCard>
              <CardContent>
                <h3>Where do you plan to dive?</h3>
                <form className="form" onSubmit={handleSubmit}>
                  <Autocomplete
                    options={["Location1", "Location2"]} // Add more locations as needed
                    value={values.location}
                    onChange={(event, newValue) => {
                      setFieldValue("location", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Location"
                        name="location"
                        onBlur={handleBlur}
                        error={touched.location && Boolean(errors.location)}
                        helperText={touched.location && errors.location}
                        margin="normal"
                        fullWidth
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primaryButton"
                    disabled={isSubmitting}
                    fullWidth
                    className="button"
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
