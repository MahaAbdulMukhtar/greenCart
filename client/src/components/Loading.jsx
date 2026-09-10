import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

const Loading = () => {
  const { navigate, axios, setCartItems } = useAppContext();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const nextUrl = query.get("next");
  const sessionId = query.get("session_id");

  useEffect(() => {
    if (!nextUrl) {
      return;
    }

    const verifyPayment = async () => {
      if (sessionId) {
        const { data } = await axios.get(
          `/api/order/stripe/verify?sessionId=${encodeURIComponent(sessionId)}`,
        );
        if (data.success) {
          setCartItems({});
        }
      }

      navigate(`/${nextUrl}`);
    };

    verifyPayment().catch(() => navigate(`/${nextUrl}`));
  }, [axios, navigate, nextUrl, sessionId, setCartItems]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary"></div>
    </div>
  );
};

export default Loading;
