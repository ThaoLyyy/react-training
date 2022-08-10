import styled from "styled-components";
import UserImage from "../../assets/images/logo-users.png";

const UserSidebar = styled.header`
  background-color: #ffdede;
  width: 300px;
  height: 1200px;
  padding: 20px;
  left: 0px;
  top: 0px;
  position: relative;
`;
const ContainerSidebar = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 0;
  width: 100%;
`;
const SidebarTitle = styled.h1`
  position: absolute;
  margin: 5px 70px;
  font-size: 26px;
  line-height: 28px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-family: Roboto-BoldItalic;
  letter-spacing: 1px;
`;

const UserLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  /* background-image: url(../../assets/images/logo-users.png); */
  background-image: url(${UserImage});
  object-fit: scale-down;
  object-fit: contain;
  
`;
export { UserSidebar, ContainerSidebar, SidebarTitle, UserLogo };
