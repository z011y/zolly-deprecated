import styled from "styled-components";
import { Info, X, Target, Star, User } from "react-feather";

const WorkModal = ({ toggleModal, title, roles, target, features }) => {
  const renderRoleList = (roles) => {
    return roles.map((role) => {
      return <li>{role}</li>;
    });
  };
  const renderFeatureList = (features) => {
    return features.map((feature) => {
      return <li>{feature}</li>;
    });
  };

  return (
    <StyledModalBackground>
      <StyledModal>
        <StyledModalTitle>
          <StyledTitle>
            <Info />
            <h3>{title}</h3>
          </StyledTitle>
          <Close onClick={toggleModal} />
        </StyledModalTitle>
        <StyledModalContent>
          <StyledTitle>
            <User />
            <h3>role</h3>
          </StyledTitle>
          <ul>
            <StyledList>{renderRoleList(roles)}</StyledList>
          </ul>
          <StyledTitle>
            <Target />
            <h3>target</h3>
          </StyledTitle>
          <ul>
            <StyledList>
              <li>{target}</li>
            </StyledList>
          </ul>
          <StyledTitle>
            <Star />
            <h3>features</h3>
          </StyledTitle>
          <ul>
            <StyledList>{renderFeatureList(features)}</StyledList>
          </ul>
        </StyledModalContent>
      </StyledModal>
    </StyledModalBackground>
  );
};

export default WorkModal;

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(30px);
`;

const StyledModal = styled.div`
  width: 50vw;
  height: 75vh;
  background-color: ${(props) => props.theme.modal};
  border-radius: 20px;
  overflow: scroll;
  display: grid;
  grid-template-rows: 72px 1fr;
`;

const Close = styled(X)`
  margin: 0px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.bg};
  padding: 24px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;

const StyledModalContent = styled.div`
  padding: 24px;

  ul {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;

  li {
    margin-left: 36px;
    margin-bottom: 6px;
    font-size: 18px;
    letter-spacing: -0.05em;
  }
`;
