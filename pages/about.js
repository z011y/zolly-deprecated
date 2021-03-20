import styled from "styled-components";
import Link from "next/link";

import Button from "../components/button";

export default function About() {
  return (
    <div>
      <StyledTitle>about me</StyledTitle>
      <StyledContent>
        <h3>Hi, I’m Cameron Zollinger 🤘</h3>
        <p>
          I have a passion for <b>front-end web development</b> and an eye for{" "}
          <b>design</b>.
        </p>
        <p>I’m hungry for knowledge and constantly iterating on my work.</p>
        <p>
          I'm also interested in music, podcasts, skiing, RPGs, food (sometimes
          I cook it), and hiking.
        </p>
        <p>
          Check out my blog for my thoughts about random web related things, or
          browse my work!
        </p>
        <Link href="contact">
          <Button text="contact me" icon="contact" />
        </Link>
      </StyledContent>
    </div>
  );
}

const StyledTitle = styled.h2`
  position: fixed;
  top: 96px;
  left: 120px;
`;

const StyledContent = styled.div`
  margin-left: 48px;
  margin-top: 48px;
  padding: 24px;
  border-radius: 20px;
  width: calc(50vw - 72px);
  background-color: ${(props) => props.theme.accent};

  h3 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 12px;
  }
`;
