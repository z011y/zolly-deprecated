import styled from "styled-components";
import Link from "next/link";

import Button from "../components/button";

export default function Error() {
  return (
    <Content>
      <FourOFour>404</FourOFour>
      <PageNotFound>page not found</PageNotFound>
      <Message>
        <h2>turn back!</h2>
        <h2>this page doesn't exist</h2>
        <Link href="/">
          <Button text="back to home" icon="back" />
        </Link>
      </Message>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 48px;
`;

const FourOFour = styled.h1`
  font-size: 600px;
  font-family: "DM Mono";
  margin-top: -144px;
  margin-bottom: -96px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.accent};
`;

const PageNotFound = styled.h1`
  font-family: "DM Mono";
  font-size: 64px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.accent};
`;

const Message = styled.div`
  position: absolute;
  bottom: 48px;
  left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 33%;
`;
