import React, { useEffect } from "react";
import { View } from "react-native";
import { useRequestStatusStore } from "../../store/requestStatus";
import Loading from "./components/Loading";
import Success from "./components/Success";
import Error from "./components/Error";

const RequestStatus = () => {
  const { status, message, setStatus } = useRequestStatusStore();

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timeout = setTimeout(() => setStatus("idle"), 3000);

      return () => clearTimeout(timeout);
    }
  }, [status]);

  switch (status) {
    case "loading":
      return <Loading />;
    case "success":
      return <Success message={message} />;
    case "error":
      return <Error message={message} />;
    default:
      return <View />;
  }
};

export default RequestStatus;
