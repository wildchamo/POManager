import React from "react";
import { useAuth } from "../context";
import Header from "../components/Header.jsx";

function Dashboard() {
  const auth = useAuth();
  // unidad={auth.user.unidad}

  return (
    <>
      <Header logout={auth.logout} username={auth.user.username} />
    </>
  );
}

export default Dashboard;
