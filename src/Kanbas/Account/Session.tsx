// src/Kanbas/Account/Session.tsx
import { useEffect, useState } from "react";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Session({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        setLoading(true);
        const currentUser = await client.profile();
        if (currentUser) {
          dispatch(setCurrentUser(currentUser));
        } else {
          dispatch(setCurrentUser(null));
          navigate("/Kanbas/Account/Signin");
        }
      } catch (error: any) {
        console.log("Session error:", error.message);
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
