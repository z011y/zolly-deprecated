import Head from "next/head";
import styled from "styled-components";
import { useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import ThemeToggle from "./themeToggle";
import NavLink from "./navLink";
import Github from "./githubIcon";
import Twitter from "./twitterIcon";
import Logo from "./logo";

export default function Layout({
  children,
  toggleTheme,
  darkTheme,
  rehydrateTheme,
}) {
  useEffect(() => {
    const cachedTheme = localStorage.getItem("darkTheme");
    if (cachedTheme !== darkTheme.toString()) {
      rehydrateTheme();
    }
  }, []);

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>zolly's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header>
        <Logo />
        <Socials>
          <a href="https://github.com/cameron-charles" target="blank">
            <Github />
          </a>
          <a href="https://twitter.com" target="blank">
            <Twitter />
          </a>
        </Socials>
      </Header>

      <SideBar>
        <NavContainer>
          <NavLink path="/" icon="home" />
          <NavLink path="/work" icon="work" />
          <NavLink path="/explore" icon="explore" />
          <NavLink path="/about" icon="about" />
          <NavLink path="/contact" icon="contact" />
        </NavContainer>
        <ThemeToggle toggleTheme={toggleTheme} darkTheme={darkTheme} />
      </SideBar>

      <Main>{children}</Main>
    </div>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 118px;
  z-index: 2;
  padding: 0 48px 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 24px;
  }
`;

const Socials = styled.div`
  display: flex;
  width: 72px;
  justify-content: space-between;
  height: 24px;
  align-items: center;

  svg {
    width: 24px;
    color: ${(props) => props.theme.fg};
  }
`;

const SideBar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 72px;
  height: calc(100vh - 118px);
  background-color: ${(props) => props.theme.accent};
  border-radius: 0 72px 0 0;
  padding-top: 96px;

  display: grid;
  grid-template-rows: 1fr 72px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  padding-top: 118px;
  padding-left: 72px;
`;
