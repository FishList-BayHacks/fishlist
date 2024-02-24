import {
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import { IoFish } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import floridaCountyImage from "../assets/floridaMapDev.jpeg";
import styled from "styled-components";
import { useState } from "react";

export default function DiveSitesPage({ county = "Pinellas" }) {
  const divefakedata = [
    { id: 1, name: "site 1 here", county: "pinellas" },
    { id: 2, name: "site 1 here", county: "pinellas" },
    { id: 3, name: "site 1 here", county: "pinellas" },
  ];
  const [searchValue, setSearchValue] = useState(county);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {};
  return (
    <BackgroundColorDiv>
      <BackgroundContainer />
      <StyledContainer>
        <SearchField
          type="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search dive sites..."
          variant="filled"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <MdSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="h4">{`Diving Areas of ${county} County`}</Typography>
        <List>
          {divefakedata.map((site) => {
            return (
              <ListItem key={site.id}>
                <ListItemIcon>
                  <IoFish />
                </ListItemIcon>
                <ListItemText primary={site.name} />
              </ListItem>
            );
          })}
        </List>
        dive sites page
        <div>sites</div>
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

const SearchField = styled(TextField)`
  margin-bottom: 20px;
`;
