import {
  Autocomplete,
  Button,
  Card,
  ListItemText,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { FaStar } from "react-icons/fa";
import { IoFish } from "react-icons/io5";
import floridaCountyImage from "../assets/floridaMapDev.jpeg";
import styled from "styled-components";
import { useState } from "react";

export default function DiveSitesPage({ county = "Pinellas" }) {
  const divefakedata = [
    { id: 1, name: "site 1 here", county: "pinellas" },
    { id: 2, name: "site 1 here", county: "pinellas" },
    { id: 3, name: "site 1 here", county: "pinellas" },
  ];
  // TODO USE EFFECT FETCHING DIVE SPOTS BY QUERY STRING THAT IS PASSED IN
  const counties = [
    { label: "Pinellas", id: 1 },
    { label: "Hillsborough", id: 2 },
    { label: "Pasco", id: 3 },
    // TODO THESE SHOULD EXIST IN CONTEXT FETCHED ON LOAD OF APP
  ];

  const [userFavoriteSites, setUserFavoriteSites] = useState([1, 3]);

  const [searchValue, setSearchValue] = useState(county);
  const [selectedCounty, setSelectedCounty] = useState(
    counties.find((cy) => cy.label === county)
  );

  const handleSearch = () => {
    // TODO add api call to fetch new dive sites
  };

  const handleFavoriteClick = async ({ isFavorited, siteId }) => {
    let updatedFavorites;
    if (isFavorited) {
      updatedFavorites = userFavoriteSites.filter((id) => id !== siteId);
    } else {
      updatedFavorites = [...userFavoriteSites, siteId];
    }
    setUserFavoriteSites(updatedFavorites);
    // TODO ADD API CALL TO UPDATE THE FAVORITE DIVE SPOTS
  };
  return (
    <BackgroundColorDiv>
      <BackgroundContainer />
      <StyledContainer>
        <SearchBarDiv>
          <Autocomplete
            disableClearable
            sx={{ width: "80%" }}
            value={selectedCounty}
            onChange={(event, newValue) => {
              setSelectedCounty(newValue);
            }}
            inputValue={searchValue}
            onInputChange={(event, newInputValue) => {
              setSearchValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={counties}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                placeholder="Search for a county..."
                {...params}
                label="county"
                variant="filled"
                sx={{
                  borderRadius: "8px",
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#E6F2F2", // For the input field background
                    "&:hover": {
                      backgroundColor: "#E6F2F2", // Maintain bg color on hover
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#E6F2F2", // Maintain bg color when focused
                    },
                  },
                  "& .MuiInputLabel-filled": {
                    backgroundColor: "#E6F2F2", // For the label background
                  },
                  '& .MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"] .MuiAutocomplete-input':
                    {
                      backgroundColor: "#E6F2F2", // For the Autocomplete input
                    },
                }}
              />
            )}
            PaperComponent={({ children }) => (
              <Paper style={{ backgroundColor: "#E6F2F2" }}>{children}</Paper> // For the dropdown background
            )}
          />
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </SearchBarDiv>
        <DiveSitesContainer>
          <DiveSitesHeader>
            <TitleContainer>
              <TopLine variant="h4">Diving Areas</TopLine>
              {/* TODO CHECK IF WE USING LABEL OR NAME ETC */}
              <BottomLine variant="h4">
                of {selectedCounty.label} County
              </BottomLine>
            </TitleContainer>
          </DiveSitesHeader>
          {divefakedata.map((site) => {
            const isFavorited = userFavoriteSites.includes(site.id);

            return (
              <StyledCard key={site.id}>
                <DiveSiteNameDiv>
                  <IoFish size={24} />
                  <ListItemText sx={{ color: "#E6F2F2" }} primary={site.name} />
                </DiveSiteNameDiv>
                <Tooltip placement="top" title="Favorite">
                  <div
                    style={{ display: "inline-flex" }}
                    onClick={() =>
                      handleFavoriteClick({ isFavorited, siteId: site.id })
                    }
                  >
                    <FaStar color={isFavorited ? "yellow" : "gray"} size={24} />
                  </div>
                </Tooltip>
              </StyledCard>
            );
          })}
        </DiveSitesContainer>
      </StyledContainer>
    </BackgroundColorDiv>
  );
}

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${floridaCountyImage});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  z-index: 1;
`;

const BackgroundColorDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #add8f4;
  z-index: 0;
`;

const StyledContainer = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 13vh;
  padding-left: 5vh;
  max-width: 40%;
`;

const StyledCard = styled(Card)`
  align-items: center;
  background-color: #6fc4c5 !important;
  box-shadow: none !important;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 2vh;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 15px;
  padding: 0px 8px 0px 8px;
  transition: box-shadow 1s ease-in-out, transform 1.5s ease-in-out;

  &:hover {
    transform: scale(1.02); // Scale up the card by 5%
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Enhance shadow for depth
  }
`;
const DiveSiteNameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const SearchBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #058aba !important; /* Button background color */
  color: #e6f2f2 !important; /* Button text color */
  border: 1px solid #022a39; /* Border color */
  &:hover {
    background-color: rgba(
      5,
      138,
      186,
      0.8
    ) !important; /* Slightly darker on hover */
  }
  height: 56px; /* Ensuring it matches the TextField height */
`;

const DiveSitesContainer = styled.div`
  padding: 16px;
  border-radius: 5px;
  margin-top: 15px;
  background-color: #c8e0f4 !important;
`;

const DiveSitesHeader = styled.div`
  font-family: "Syne", sans-serif;
  font-weight: bold;
  color: #059293;
  margin-bottom: 16px; // Adjust spacing as needed
`;

const TitleContainer = styled.div`
  text-align: left; // Ensure the container aligns its content to the left
`;

const TopLine = styled(Typography)`
  display: block; // Ensure this line is a block element to take full width
`;

const BottomLine = styled(TopLine)`
  text-align: right; // Align this line's text to the right
  width: 100%; // Ensure it takes the full width to allow right alignment
`;
