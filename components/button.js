import styled from "styled-components";
import React from "react";
import { Briefcase, Info, ArrowLeftCircle, MessageCircle } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

const Button = React.forwardRef(({ text, icon, href, onClick }, ref) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "work":
        return <Briefcase />;
        break;
      case "info":
        return <Info />;
        break;
      case "back":
        return <ArrowLeftCircle />;
        break;
      case "contact":
        return <MessageCircle />;
        break;
      default:
        return null;
    }
  };
  return (
    <ButtonContainer
      href={href}
      onClick={onClick}
      ref={ref}
      whileHover={{
        x: 12,
        transition: { type: "spring", stiffness: 120 },
      }}
    >
      <ButtonText>{text}</ButtonText>
      <ButtonIcon>{renderIcon(icon)}</ButtonIcon>
    </ButtonContainer>
  );
});

export default Button;

const ButtonContainer = styled(motion.a)`
  width: 412px;
  height: 50px;
  border-radius: 10px;
  background-color: #2f80ed;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition &:hover {
    opacity: 87%;
  }
`;

const ButtonText = styled.div`
  text-transform: uppercase;
  font-family: "DM Mono";
  font-size: 18px;
  letter-spacing: 0.1em;
`;

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 18px;
`;
