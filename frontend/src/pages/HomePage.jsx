import { useEffect, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useCounties } from "../hooks/useCounties";
import { useMainContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

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

const Banner = styled.div`
  position: fixed;
  height: 100%;
  right: 0;
  font-size: 58px; /* Adjust the font size as needed */
  background-color: #acfeff10;
  color: white;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around; /* Distribute space evenly */

  span {
    display: block; /* Each letter will take up its own line */
    text-align: center;
  }
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

  .button-enter {
    color: #022a39;
  }
`;

const ButtonContainer = styled.div`
  transition: opacity 0.5s ease-out;

  &.fade-out {
    opacity: 0;
  }
`;

const FormCard = styled(Card)`
  width: 100%;
  max-width: 430px;
  margin-top: 20px;
  text-align: center;
  animation: fadeIn 5s;

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
  const { counties: countiesInStore, updateCounties } = useMainContext();
  const [entered, setEntered] = useState(false);
  const { counties } = useCounties();
  const [countyArray, setCountyArray] = useState([]);
  const navigate = useNavigate();
  const handleCountySelect = (countyName) => {
    navigate(`/divesites/${countyName}`);
  };

  useEffect(() => {
    const countyNames = counties
      .map((county) => county.county_name)
      .sort((a, b) => a.localeCompare(b));
    setCountyArray(countyNames);
  }, [counties]);

  useEffect(() => {
    if (countiesInStore.length === 0) {
      const countiesSorted = [...counties].sort((a, b) =>
        a.county_name.localeCompare(b.county_name)
      );
      updateCounties(countiesSorted);
    }
  }, [counties, countiesInStore.length]);

  return (
    <HomePageContainer>
      <BackgroundOverlay />
      <BackgroundVideo autoPlay muted loop poster="./landingvideo.png">
        <source src="./landingPageVideoSmallSize.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Content>
        {!entered && (
          <ButtonContainer className={entered ? "fade-out" : ""}>
            <Button
              variant="contained"
              color="primaryButton"
              fullWidth
              className="button-enter"
              onClick={() => setEntered(true)}
            >
              Dive
            </Button>
          </ButtonContainer>
        )}
        {entered && (
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
                handleCountySelect(values.location);
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
                      options={countyArray}
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
        )}
        <Banner>
          {Array.from("FLORIDA").map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </Banner>
      </Content>
    </HomePageContainer>
  );
};

export default HomePage;
