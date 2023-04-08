import React from "react";
import { useAuth } from "../context";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

function Dashboard() {
  const auth = useAuth();
  // 

  return (
    <>
      <Header logout={auth.logout} setSearchValue={auth.setSearchValue} username={auth.user.username} />
      <Main proyectos={auth.proyectosBuscados} unidad={auth.user.unidad}/>
    </>
  );
}

export default Dashboard;
