import styled from "styled-components";
import { useMainContext } from "../context/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUserFish } from "../hooks/useUserFish";
import { NavBar } from "../component/NavBar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Column = styled.div`
  width: 48%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 50px;
  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    align-items: center;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const FishItem = styled.div`
  padding: 5px;
  margin: 5px 0;
`;

const FishList = () => {
  const { usersSeenList, fish, removeFishIdOnSeenList, addFishIdToSeenList } =
    useMainContext();
  const { addFish, removeFish } = useUserFish();
  console.log(usersSeenList);
  console.log(fish);
  const [seenList, setSeenList] = useState(
    fish.filter((fish) => usersSeenList.includes(fish.id))
  );

  const [unseenList, setUnseenList] = useState(
    fish.filter((fish) => !usersSeenList.includes(fish.id))
  );

  console.log(seenList);

  function toggleFishSeenStatus(fishId) {
    // Check if the fish is currently marked as seen
    const isCurrentlySeen = seenList.some((fish) => fish.id === fishId);

    if (isCurrentlySeen) {
      // Move the fish from seenList to unseenList
      const fishToMove = seenList.find((fish) => fish.id === fishId);
      setSeenList(seenList.filter((fish) => fish.id !== fishId));
      setUnseenList((prevUnseenList) => [...prevUnseenList, fishToMove]);
    } else {
      // Move the fish from unseenList to seenList
      const fishToMove = unseenList.find((fish) => fish.id === fishId);
      setUnseenList(unseenList.filter((fish) => fish.id !== fishId));
      setSeenList((prevseenList) => [...prevseenList, fishToMove]);
    }
  }
  const toggleSeen = (id, seen) => {
    toggleFishSeenStatus(id);
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
    <>
      <NavBar />
      <Container>
        <Column>
          <Title>Seen Fish</Title>
          {seenList.map((f, index) => (
            <div key={index} className="list-item">
              <FishItem>{f?.common_name || f?.scientific_name}</FishItem>
              <FaEye
                title="Seen"
                size={25}
                onClick={() => toggleSeen(fish.id, true)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </Column>
        <Column>
          <Title>Unseen Fish</Title>
          {unseenList.map((f, index) => (
            <div key={index} className="list-item">
              <FishItem>{f?.common_name || f?.scientific_name}</FishItem>
              <FaEyeSlash
                title="Unseen"
                size={25}
                onClick={() => toggleSeen(fish.id, false)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </Column>
      </Container>
    </>
  );
};

export default FishList;
