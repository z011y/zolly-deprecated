import styled from "styled-components";
import { ArrowDown, ArrowUp } from "react-feather";
import { useState } from "react";
import { motion } from "framer-motion";

import WorkItem from "../components/workItem";
import WorkModal from "../components/workModal";

export default function Work() {
  const [item, setItem] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const workItems = [
    {
      id: 0,
      title: "portfolio site",
      titleText: "this website!",
      img: "/portfolio.png",
      tech: [
        "next.js",
        "react",
        "styled-components",
        "javascript",
        "nodemailer",
      ],
      link: "https://zolly.dev",
      details: {
        roles: ["Design", "Development", "Testing", "Deployment"],
        target:
          "To create a portfolio site that feels like a native app and shows my personality",
        features: [
          "Static generation and server side rendering with Next.js",
          "Email forwarding with nodemailer",
        ],
      },
    },
    {
      id: 1,
      title: "doTERRA",
      titleText: "an ecommerce site for essential oils",
      img: "/doterra.png",
      tech: ["Jira", "Testrail", "Postman", "Crownpeak CMS"],
      link: "https://shop.doterra.com",
      details: {
        roles: ["Testing"],
        target:
          "To ensure bugs have been fixed and future enhancements are working as expected",
        features: [
          "Tracked and triaged bugs and enhancements in Jira and tested prior to release to ensure proper functionality",
          "Imagined, organized, and executed a comprehensive series of manual tests for new features of our ecommerce web application in TestRail",
        ],
      },
    },
    {
      id: 2,
      title: "barter.",
      titleText: "an app for trading your things",
      img: "/barter.png",
      tech: [
        "next.js",
        "styled-components",
        "react native",
        "socket.io",
        "graphcms",
      ],
      link: "#",
      details: {
        roles: ["Design", "Development", "Testing", "Deployment"],
        target:
          "To create a portfolio site that feels like a native app and shows my personality",
        features: [
          "Static generation and server side rendering with Next.js",
          "Email forwarding with nodemailer",
        ],
      },
    },
    {
      id: 3,
      title: "wedding site",
      titleText: "my fiance and I's wedding site",
      img: "/portfolio.png",
      tech: [
        "next.js",
        "react",
        "styled-components",
        "javascript",
        "graphcms",
        "nodemailer",
      ],
      link: "https://cameronandnicole.com",
      details: {
        roles: ["Design", "Development", "Testing", "Deployment"],
        target:
          "To create a space to share my wedding experience and provide information to guests",
        features: [
          "Fully featured image gallery with masonry layout and full screen mode",
          "Content fetched from GraphCMS headless CMS",
          "Email forwarding with nodemailer",
        ],
      },
    },
  ];

  const renderWorkItem = () => {
    const currentWorkItem = workItems.find((workItem) => workItem.id === item);
    return (
      <WorkItem
        id={currentWorkItem.id}
        title={currentWorkItem.title}
        titleText={currentWorkItem.titleText}
        img={currentWorkItem.img}
        tech={currentWorkItem.tech}
        link={currentWorkItem.link}
        toggleModal={toggleModal}
      />
    );
  };

  const renderWorkModal = () => {
    const currentWorkItem = workItems.find((workItem) => workItem.id === item);
    console.log(currentWorkItem.details.roles);
    return (
      <WorkModal
        toggleModal={toggleModal}
        title={currentWorkItem.title}
        titleText={currentWorkItem.titleText}
        roles={currentWorkItem.details.roles}
        target={currentWorkItem.details.target}
        features={currentWorkItem.details.features}
      />
    );
  };

  const handleNext = () => {
    setItem(item + 1);
  };

  const handlePrevious = () => {
    setItem(item - 1);
  };

  return (
    <WorkContainer>
      <Title>my work</Title>
      {item >= 1 ? (
        <PreviousItem
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 200 } }}
          onClick={handlePrevious}
        >
          <ArrowUp />
          <NextItemText>previous</NextItemText>
        </PreviousItem>
      ) : null}
      {renderWorkItem()}
      {item === workItems.length - 1 ? null : (
        <NextItem
          whileHover={{ y: 4, transition: { type: "spring", stiffness: 200 } }}
          onClick={handleNext}
        >
          <ArrowDown />
          <NextItemText>next</NextItemText>
        </NextItem>
      )}
      {modalActive ? renderWorkModal() : null}
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Title = styled.h2`
  position: fixed;
  top: 96px;
  left: 120px;
`;

const NextItem = styled(motion.div)`
  position: fixed;
  bottom: 24px;
  left: calc(50% - 80px / 2);
  display: flex;
  width: 80px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const NextItemText = styled.p`
  text-transform: uppercase;
  font-family: "DM Mono";
  font-size: 18px;
  letter-spacing: 0.1em;
`;

const PreviousItem = styled(motion.div)`
  position: fixed;
  top: 118px;
  left: calc(50% - 132px / 2);
  display: flex;
  width: 132px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
