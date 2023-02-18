import React from "react";

const Index = React.lazy(() => import("../pages/Home/Index"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const Chat = React.lazy(() => import("../pages/Chat"));
const User = React.lazy(() => import("../pages/User/User"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));

const mainRoutes = [
  {
    linkLabel: "Home",
    path: "/",
    component: Index,
    isProtected: true,
    isNavbarLink: true,
  },
  {
    linkLabel: "Chat",
    path: "/chat",
    component: Chat,
    isProtected: false,
    isNavbarLink: true,
  },
  { linkLabel: "User", path: "/user/:userId", component: User },
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
];

const footerRoutes = [
  {
    linkLabel: "Privacy Policy",
    path: "/privacyPolicy",
    component: PrivacyPolicy,
  },
  { linkLabel: "Contact", path: "/contact" },
  { linkLabel: "Copy Rights", path: "/copyRights" },
];

export { mainRoutes, footerRoutes };
