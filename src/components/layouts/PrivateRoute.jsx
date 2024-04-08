import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase.config";
import { setUser, toggleLoading } from "../../redux/features/userSlice";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { email, isLoading, isError, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user?.displayName, email: user?.email }));

        dispatch(toggleLoading(false));
      } else {
        // dispatch(setUser({ name: null, email: null }));
        dispatch(toggleLoading(false));
      }
    });

    return () => subscribe();
  }, [dispatch]);

  if (isError) {
    return error;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
