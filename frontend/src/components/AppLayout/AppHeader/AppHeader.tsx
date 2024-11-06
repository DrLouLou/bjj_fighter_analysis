import { useEffect, useMemo } from "react";

import { UserOutlined } from "@ant-design/icons";
import { useMsal } from "@azure/msal-react";
import {
  Avatar,
  Button,
  Divider,
  Layout,
  Popover,
  theme,
  Typography,
} from "antd";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";
import { themeSelector } from "@/redux/theme/themeSelectors";
import { userSelector } from "@/redux/user/userSelector";

import * as URLS from "../urlConstants";

import AppHeaderFilters from "./AppHeaderFilters";

const { Text } = Typography;
const { Header } = Layout;

const AppHeader = () => {
  const { instance } = useMsal();
  const location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { user } = useAppSelector(userSelector);
  const currentTheme = useAppSelector(themeSelector);

  // const currentTheme = useAppSelector(themeSelector);

  const ALL_URLS = useMemo(() => {
    // convert URLS to object values
    return Object.values(URLS).reduce((acc, curr) => {
      return {
        ...acc,
        ...curr,
      };
    });
  }, []);

  useEffect(() => {
    const title = Object.values(ALL_URLS).find(({ url }) => {
      return location.pathname === url;
    })?.headerLabel;

    // change title of page
    document.title = title ? `${title} - mattscientist.com` : "mattscientist.com";
  }, [ALL_URLS, location.pathname]);

  const handleLogout = () => {
    instance
      .logoutRedirect({
        postLogoutRedirectUri: "/",
      })
      .catch((e: unknown) => {
        console.error(e);
      });
  };

  return (
    <Header
      style={{ backgroundColor: colorBgContainer }}
      className="flex items-center justify-between sticky top-0 z-10 shadow dark:bg-[#1c1c1c] px-10"
    >
      <AppHeaderFilters />
      <div className="flex items-center">
        {/* <img
          // src={`/images/logo-${currentTheme === "dark" ? "dark" : "white"}-theme.png`}
          src={`/logos/mattscientist-logo.png`}
          
          alt="logo"
          className="h-14 mr-8"
        /> */}

        <Popover
          trigger="click"
          content={
            <div className="flex flex-col gap-2">
              <div className="flex items-center flex-col">
                <Text className="text-center">
                  Welcome, <br /> {user?.email}
                </Text>
                <Text className="text-center uppercase mt-1">
                  ({user?.role})
                </Text>
              </div>

              <Divider className="w-full m-1" />

              <Button
                className="w-full hover:border-0"
                danger
                type="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          }
        >
          <Avatar
            size={32}
            icon={<UserOutlined />}
            className="ml-auto flex items-center justify-center cursor-pointer"
          />
        </Popover>
      </div>
    </Header>
  );
};

export default AppHeader;
