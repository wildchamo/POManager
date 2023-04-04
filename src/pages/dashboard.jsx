import React from "react";
import {useAuth} from "../context";

function Dashboard() {
  const auth = useAuth();

  return (<>
  <h1>Hola!,{auth.user.username}</h1>
  <h1>La unidad es,{auth.user.unidad}</h1>
  </>);
}

export default Dashboard;
