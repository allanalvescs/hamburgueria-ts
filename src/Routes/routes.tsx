import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../Providers/modules/AuthContext";

interface ReactRouteProps extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: ReactRouteProps) => {
  const { accessToken } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "dashboard"} />
        );
      }}
    />
  );
};

export default Route;
