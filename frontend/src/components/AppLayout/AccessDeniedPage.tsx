import { useMsal } from "@azure/msal-react";
import { Button, Layout } from "antd";

const AccessDeniedPage = () => {
  const { instance } = useMsal();

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
    <Layout className="min-h-[100vh] flex justify-center items-center">
      <h1>Access denied</h1>
      <p className="text-center">
        You don&apos;t have permission to access this page. Please try to login
        one more time. If you think this is a mistake, please contact your
        administrator.
      </p>

      <Button type="primary" className="mt-4" onClick={handleLogout}>
        Go back to Login page
      </Button>
    </Layout>
  );
};

export default AccessDeniedPage;
