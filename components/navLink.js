import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Briefcase, Compass, Smile, MessageCircle } from "react-feather";
import styled from "styled-components";

const NavLink = ({ path, icon }) => {
  const router = useRouter();
  const renderIcon = (icon) => {
    if (icon === "home") {
      return <Home />;
    }
    if (icon === "work") {
      return <Briefcase />;
    }
    if (icon === "explore") {
      return <Compass />;
    }
    if (icon === "about") {
      return <Smile />;
    }
    if (icon === "contact") {
      return <MessageCircle />;
    }
  };
  return (
    <Link href={path} passHref>
      {router.pathname === path ? (
        <ActiveNavLink>{renderIcon(icon)}</ActiveNavLink>
      ) : (
        <InactiveNavLink>{renderIcon(icon)}</InactiveNavLink>
      )}
    </Link>
  );
};

export default NavLink;

const InactiveNavLink = styled.a`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px 0 0 24px;
  color: ${(props) => props.theme.fg};

  &:hover {
    cursor: pointer;
    color: #2f80ed;
  }
`;

const ActiveNavLink = styled(InactiveNavLink)`
  background-color: ${(props) => props.theme.bg};
  color: #2f80ed;
`;
