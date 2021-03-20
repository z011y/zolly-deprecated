import styled from "styled-components";
import Link from "next/link";
import { Briefcase, Code, CloudLightning, PenTool, Tool } from "react-feather";

import Button from "../components/button";

export default function Home() {
  return (
    <StyledContent>
      <h1>Cameron Zollinger</h1>
      <p style={{ marginBottom: "18px" }}>Frontend Developer & Designer</p>
      <Link href="/work" passHref>
        <Button text="see my work" icon="work" />
      </Link>
      <StyledGrid>
        <StyledGridColumn>
          <StyledGridTitle>
            <PenTool />
            <h3>design</h3>
          </StyledGridTitle>
          <StyledGridItems>
            <p>
              Brainstorming and prototyping in <b>Figma</b>
            </p>
            <p>
              Polished mock ups in <b>Framer</b>
            </p>
          </StyledGridItems>
        </StyledGridColumn>
        <StyledGridColumn>
          <StyledGridTitle>
            <Code />
            <h3>develop</h3>
          </StyledGridTitle>
          <StyledGridItems>
            <p>
              Server-side rendered apps with <b>Next</b>
            </p>
            <p>
              Component-based development with <b>React</b>
            </p>
            <p>
              Dynamic styles with <b>CSS-in-JS</b>
            </p>
          </StyledGridItems>
        </StyledGridColumn>
        <StyledGridColumn>
          <StyledGridTitle>
            <Tool />
            <h3>test</h3>
          </StyledGridTitle>
          <StyledGridItems>
            <p>
              Unit testing in <b>Jest</b>
            </p>
            <p>
              Maintaining regression test suites in <b>TestRail</b>
            </p>
          </StyledGridItems>
        </StyledGridColumn>
        <StyledGridColumn>
          <StyledGridTitle>
            <CloudLightning />
            <h3>deploy</h3>
          </StyledGridTitle>
          <StyledGridItems>
            <p>
              Powerful and efficient deployments with <b>Vercel</b>
            </p>
          </StyledGridItems>
        </StyledGridColumn>
      </StyledGrid>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px;
  height: 100%;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) minmax(
      300px,
      1fr
    ) minmax(300px, 1fr);
  width: calc(100vw - 168px);
  background-color: ${(props) => props.theme.accent};
  border-radius: 20px;
  position: absolute;
  bottom: 72px;
  left: 120px;

  @media (max-width: 1079px) {
    width: calc(100vw - 120px);
    overflow-x: scroll;
    grid-template-columns: 300px 300px 300px 300px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const StyledGridColumn = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  border: 1px solid ${(props) => props.theme.bg};
`;

const StyledGridTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.bg};
  padding-left: 24px;
  padding-right: 24px;

  h3 {
    margin-left: 12px;
  }
`;

const StyledGridItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  p {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;
