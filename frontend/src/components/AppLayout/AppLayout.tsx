import { Suspense, useCallback, useEffect, useMemo } from "react";

import {
  App as AntdApp,
  Button,
  ConfigProvider,
  Layout,
  Menu,
  theme,
} from "antd";
import enGB from "antd/locale/en_GB";
import { getYear } from "date-fns";
import type { ReactNode } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getDataForFilters } from "@/redux/generalFilter/generalFilterActions";
import { themeSelector } from "@/redux/theme/themeSelectors";
import { UserRolesEnum } from "@/redux/user/_models";
import { getUser } from "@/redux/user/userActions";
import { userSelector } from "@/redux/user/userSelector";

import AppHeader from "./AppHeader/AppHeader";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
// import AccessDeniedPage from "./AccessDeniedPage";
import AppSpin from "./AppSpin";

const { Content, Footer, Sider } = Layout;

type Props = {
  children?: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const { loading, user } = useAppSelector(userSelector);
  const currentTheme = useAppSelector(themeSelector);

  const { defaultAlgorithm, darkAlgorithm } = theme;

  const handleRedirect = useCallback(
    (url: string) => {
      navigate(url);
    },
    [navigate],
  );

  useEffect(() => {
    dispatch(getDataForFilters());
  }, [dispatch]);

  const menuItemsByRole = useMemo(() => {
    const menuItems = [
      {
        key: "home",
        label: "Fighter Page",
        onClick: () => handleRedirect("/"),
      },
      {
        key: "analysis-view",
        label: "Analysis View",
        onClick: () => handleRedirect("/analysis-view"),
      },
      {
        key: "adcc-results",
        label: "ADCC 2024 Results",
        children: [
          {
            key: "adcc/66kg",
            label: "-66kg",
            onClick: () => handleRedirect("adcc/66kg"),
          },
          {
            key: "adcc/77kg",
            label: "-77kg",
            onClick: () => handleRedirect("adcc/77kg"),
          },
          {
            key: "adcc/88kg",
            label: "-88kg",
            onClick: () => handleRedirect("adcc/88kg"),
          },
          {
            key: "adcc/99kg",
            label: "-99kg",
            onClick: () => handleRedirect("adcc/99kg"),
          },
          {
            key: "adcc/+99kg",
            label: "+99kg",
            onClick: () => handleRedirect("adcc/+99kg"),
          }
        ],
      },
    ];

    return menuItems;
  }, [user?.role, handleRedirect]);

  const ALL_URLS = useMemo(
    () => ({
      ...{
        dashboard: {
          key: "home",
          menuLabel: "Fighter Page",
          url: "/",
        },
      },
    }),
    [],
  );

  const urlTab = useMemo(() => {
    // eg pathname: "/admin/counterparty-data"
    // get the first part of the pathname
    const firstPath = location.pathname.split("/")[1];
    return firstPath;
  }, [location]);

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  if (loading) {
    return (
      <Layout className="min-h-[100vh] flex justify-center items-center">
        <AppSpin />
      </Layout>
    );
  }

  // if (!user?.role) {
  //   return <AccessDeniedPage />;
  // }

  const activeKey = Object.values(ALL_URLS).find(
    (item) => item.url === location.pathname,
  )?.key;

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === "dark" ? darkAlgorithm : defaultAlgorithm,
      }}
      locale={enGB}
    >
      <AntdApp>
        <Layout className="min-h-[100vh]">
          <Sider
            trigger={null}
            width={225}
            className="bg-[#141414] border-0 border-r-[0.5px] border-solid border-[#fdfdfd1f]"
          >
            <div className="flex flex-col h-screen sticky top-0">
              <div className="">
                <div className="demo-logo h-[64px] flex justify-center text-white p-0 bg-[#282828]">
                  {/* <div className="demo-logo h-[64px] flex justify-center text-white p-0 bg-[#ffffff]"> */}
                  <Button
                    type="link"
                    className="rounded-lg w-full flex justify-center items-center overflow-hidden p-0 h-full border-0"
                    onClick={() => navigate("/")}
                  >
                    <img
                      id="mattscientist-logo"
                      // src={`/images/logo-dark-theme.png`}
                      src={`/logos/mattscientist-logo.png`}

                      // src={`/images/logo.png`}
                      alt="mattscientist logo"
                      className="h-full"
                    />
                  </Button>
                </div>
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["home"]}
                  defaultOpenKeys={urlTab ? [urlTab] : ["home"]}
                  className="border-0 bg-[#141414] h-[calc(100vh-130px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb:active:bg-gray-600 scrollbar-thumb:hover:bg-gray-600 scrollbar-track:active:bg-gray-800 scrollbar-track:hover:bg-gray-800"
                  activeKey={activeKey}
                  selectedKeys={[activeKey || ""]}
                  items={menuItemsByRole}
                />
              </div>
              {/* Display user name and role */}
              <div className="flex items-center justify-center text-white text-center mt-auto gap-3 bg-[#1c1c1c] py-1 z-[1]">
                <div className="h-full w-12 flex items-center space-x-2">
                  <h5>Switch Theme</h5>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </Sider>
          <Layout className="relative ">
            <AppHeader />
            <Suspense
              fallback={
                <div className="w-full h-[calc(100vh-96px)] flex justify-center items-center">
                  <AppSpin />
                </div>
              }
            >
              <Content className="p-4 min-h-[calc(100vh-128px)]">
                {children}
                <Outlet />
              </Content>
            </Suspense>
            <Footer className="text-center py-2 bg-block-bg shadow-md">
            </Footer>
          </Layout>
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
};

export default AppLayout;
