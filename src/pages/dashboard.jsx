import React from "react";
import { useAuth } from "../context";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

function Dashboard() {
  const auth = useAuth();
  // 

  return (
    <>
      <Header logout={auth.logout} username={auth.user.username} />
      <Main unidad={auth.user.unidad}/>
    </>
  );
}

export default Dashboard;
