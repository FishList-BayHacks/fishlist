import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styled from "styled-components";
import { useFishByCountyHook } from "../hooks/useFishByCountyHook";
import { useMainContext } from "../context/Context";
import { useParams } from "react-router-dom";
import { useUserFish } from "../hooks/useUserFish";

export default function DiveSiteFishPage() {
  const { addFish, removeFish } = useUserFish();
  const { usersSeenList, addFishIdToSeenList, removeFishIdOnSeenList } =
    useMainContext();
  const { county } = useParams();
  const { fishByCounty } = useFishByCountyHook(county);
  console.log(fishByCounty);

  const toggleSeen = (id, seen) => {
    if (seen) {
      removeFishIdOnSeenList(id);
      removeFish(id);
      return;
    } else {
      addFishIdToSeenList(id);
      addFish(id);
    }
  };

  return (
    <WholePageContainer>
      <BackgroundOverlay />
      <BackgroundVideo autoPlay muted loop poster="./landingvideo.png">
        <source src="/diveSiteFishPageVideoSmallSize.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <TitlesContainer>
        <DiscoverTitle>DISCOVER</DiscoverTitle>
        <CountyFishTitle>{county} County Fish</CountyFishTitle>
        <FishCardsContainer>
          {fishByCounty.map((fish) => {
            let seen = false;
            if (usersSeenList.includes(fish.id)) {
              seen = true;
            }
            return (
              <Card sx={{ maxWidth: 345 }} key={fish.id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={fish.image_url}
                  alt={fish.common_name}
                />
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {fish.common_name}
                    </Typography>
                    {seen ? (
                      <FaEye
                        title="Seen"
                        size={25}
                        onClick={() => toggleSeen(fish.id, seen)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FaEyeSlash
                        title="Unseen"
                        size={25}
                        onClick={() => toggleSeen(fish.id, seen)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "italic" }}
                  >
                    {fish.scientific_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {fish.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </FishCardsContainer>
      </TitlesContainer>
    </WholePageContainer>
  );
}

const WholePageContainer = styled.div`
  display: grid;
  grid-template-rows: auto minmax(20vh, auto) repeat(4, 1fr); /* Adjust row heights for precise control */
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
  height: 100%;
`;

const BackgroundVideo = styled.video`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TitlesContainer = styled.div`
  margin-top: 20px;
  grid-row: 2 / 3;
  background-color: rgba(172, 254, 255, 0.4);
  padding: 20px;
  display: inline-block;
  align-items: center;
  justify-items: center;
  text-align: center;
  max-height: 20vh;
  width: 100vw;
  z-index: 10;
`;

const DiscoverTitle = styled.h1`
  font-size: 16vw;
  text-transform: uppercase;
  color: #058aba;
  -webkit-text-stroke: 1px #022a39;
  margin: 0;
  position: relative;
  top: -40px;
`;

const CountyFishTitle = styled.h2`
  font-size: 3rem;
  color: #e0fcfc;
  -webkit-text-stroke: 1px #022a39;
  margin: 0;
  position: relative; /* Relative positioning for overlap */
  top: -135px; /* Adjust this value to control the amount of overlap */
  align-self: center;
`;

const FishCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  max-height: calc(100vh - 250px);
  width: 100%;
`;
