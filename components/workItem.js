import styled from "styled-components";
import { useState } from "react";
import { ExternalLink } from "react-feather";
import Image from "next/image";

import Button from "../components/button";
import WorkModal from "../components/workModal";

const WorkItem = ({ id, title, titleText, img, tech, link, toggleModal }) => {
  const renderTechList = (tech) => {
    const techItems = tech.map((item) => {
      return <li>{item}</li>;
    });
    return techItems;
  };

  return (
    <Content>
      <ImageWrapper>
        <a href={link} target="blank">
          <Image
            alt="project image"
            src={img}
            objectFit="cover"
            width="3729px"
            height="2390px"
            quality="100"
          />
        </a>
      </ImageWrapper>
      <Technologies>
        <TechTitle>
          <h3>technology used</h3>
        </TechTitle>
        <TechList>
          <ul>{renderTechList(tech)}</ul>
        </TechList>
      </Technologies>
      <Info>
        <Title>
          <TitleText>{title}</TitleText>
          <a href={link} target="blank">
            <ExternalLink />
          </a>
        </Title>
        <Text>
          <p>{titleText}</p>
        </Text>
      </Info>
      <Details onClick={toggleModal}>
        <Button text="see details" icon="info" />
      </Details>
    </Content>
  );
};

export default WorkItem;

// style declarations with styled-components

const Content = styled.div`
  height: calc(100vh - 188px);
  width: 100%;
  padding: 48px 48px 0 48px;
  display: grid;
  grid-template-columns: [start] 1fr [center] 412px [end];
  grid-template-rows: [start] 1fr [center] 50px [end];
  grid-gap: 24px;
`;

const ImageWrapper = styled.div`
  display: flex;
  grid-column: start / center;
  grid-row: start / center;
  background-color: ${(props) => props.theme.accent};
  border-radius: 10px;
  overflow: hidden;

  a {
    display: flex;
    overflow: hidden;
  }
`;

const Technologies = styled.div`
  display: grid;
  grid-column: center / end;
  grid-row: start / center;
  background-color: ${(props) => props.theme.accent};
  border-radius: 10px;
  grid-template-rows: 50px 1fr;
`;

const TechTitle = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.bg};
  padding-left: 24px;
  display: flex;
  align-items: center;
  overflow: scroll;
`;

const TechList = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow: scroll;
`;

const Info = styled.div`
  display: grid;
  grid-column: start / center;
  grid-row: center / end;
  background-color: ${(props) => props.theme.accent};
  border-radius: 10px;
  padding-left: 24px;
  align-items: center;
  grid-template-columns: 1fr 3fr;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.bg};
  height: 100%;
  overflow: scroll;

  a {
    svg {
      color: ${(props) => props.theme.fg};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const TitleText = styled.h3`
  margin-right: 12px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 24px;
  overflow: scroll;
  text-overflow: clip;
`;

const Details = styled.div`
  display: flex;
  grid-column: center / end;
  grid-row: center / end;
`;
