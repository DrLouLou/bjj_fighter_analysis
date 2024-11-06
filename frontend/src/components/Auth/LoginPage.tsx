import { useEffect, useLayoutEffect, useState } from "react";

import { useMsal } from "@azure/msal-react";
import { Button, Card, Layout, Spin } from "antd";

import { loginRequest } from "@/api/msal/authConfig";

const LoginPage = () => {
  const { instance, inProgress } = useMsal();

  const [timeoutForRedirect, setTimeoutForRedirect] = useState(false);

  useLayoutEffect(() => {
    // timeout for 10 seconds
    // if the user is not redirected to the sign in page, show the button to sign in
    const timer = setTimeout(() => {
      setTimeoutForRedirect(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.warn("REDIRECT TO SIGNIN", e);
    });
  }, [instance]);

  const handleRedirectToSignIn = () => {
    const itemKey = "msal.interaction.status";

    sessionStorage.removeItem(itemKey);

    console.warn(loginRequest);
    instance.loginRedirect(loginRequest).catch((e) => {
      console.warn("REDIRECT TO SIGNIN", e);
    });
  };

  console.warn("inProgress :>> ", inProgress);

  return (
    <Layout
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url(/images/login-bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center h-screen flex-col w-[500px]">
        {timeoutForRedirect ? (
          <div className="flex justify-center h-screen flex-col w-[500px]">
            {/* <Card
              className=" w-[500px] flex justify-center items-center p-0 mb-4 shadow-sm shadow-slate-200"
              styles={{
                body: {
                  padding: 5,
                },
              }}
            >
                <img
                  src="/images/logo-white-theme.png"
                  alt="JBDH"
                  className="rounded-lg h-20"
                />
              
            </Card> */}

            <Card className="shadow-sm shadow-slate-200 w-full">
              <h1 className="text-2xl font-bold mb-2 text-center">
                Welcome to the Exchange App
              </h1>

              <p className="text-md mb-8 text-center">
                We are unable to redirect you to the sign in page. Please click
                the button below to sign in.
              </p>

              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-blue-700"
                block
                onClick={() => handleRedirectToSignIn()}
              >
                Sign in
              </Button>
            </Card>
          </div>
        ) : (
          <Spin size="large" />
        )}
      </div>
    </Layout>
  );
};

export default LoginPage;
