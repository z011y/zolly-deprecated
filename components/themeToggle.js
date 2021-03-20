import styled from "styled-components";
import { useState, useContext } from "react";
import { Sun, Moon } from "react-feather";
import { motion, AnimateSharedLayout } from "framer-motion";

export default function ThemeToggle({ toggleTheme, darkTheme }) {
  const [hover, setHover] = useState(false);

  return (
    <ThemeToggleContainer onClick={toggleTheme}>
      <AnimateSharedLayout>
        <StyledIcon layout whileHover={{ rotate: 360 }} data-theme={darkTheme}>
          {darkTheme ? (
            <Sun style={{ width: "22px" }} />
          ) : (
            <Moon style={{ width: "22px" }} />
          )}
        </StyledIcon>
      </AnimateSharedLayout>
    </ThemeToggleContainer>
  );
}

const ThemeToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.bg};

  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
