import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const POContext = React.createContext();

const POprojets = [
  {
    id: 1,
    nombre: "Investigación arquitectura PWA",
    fechaInicio: "2021-11-03",
    fechaFin: "2022-10-02",
    fechaCreacion: "",
    estado: "Anulado",
    descripcion: "Soy una descripción",
    motivoCancelacion: "jose",
  },
  {
    id: 2,
    nombre: "Software de encuestas Limesurvey",
    fechaInicio: "2021-11-05",
    fechaFin: "2022-10-05",
    fechaCreacion: "2022-10-04",
    estado: "Activo",
    descripcion: "Soy una descripción",
    motivoCancelacion: "",
  },
  {
    id: 3,
    nombre: "ChatBot Sinapsis (Diseño de flujo)",
    fechaInicio: "2021-11-07",
    fechaFin: "2022-10-03",
    fechaCreacion: "2021-11-03",
    estado: "Suspendido",
    descripcion: "Soy una descripción",
    motivoCancelacion: "",
  },
];

function POProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [unidad, setUnidad] = React.useState(null);
  const [proyectos, setProyectos] = React.useState(POprojets);

  const navigate = useNavigate();

  const login = (username, unidad) => {
    setUser(username);
    setUnidad(unidad);
    navigate("/dashboard");
  };
  const logout = () => {
    setUser(null);
    setUnidad(null);
    navigate("/");
  };

  function newPOID(proyectos) {
    if (!proyectos.length) {
      return 1;
    }
    const idlist = proyectos.map((proyecto) => proyecto.id);
    const idmax = Math.max(...idlist);
    return idmax + 1;
  }

  const createPO = (nombre, estado, fechaInicio) => {
    const id = newPOID(proyectos);
    const newProyectos = [...proyectos];
    newProyectos.push({
      id,
      nombre,
      estado,
      fechaInicio,
    });
    setProyectos(newProyectos);
  };

  const auth = { user, login, logout, proyectos, createPO };
  return <POContext.Provider value={auth}>{children}</POContext.Provider>;
}

function useAuth() {
  const auth = useContext(POContext);
  return auth;
}

function PrivateRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={"/"} />;
  }
  return props.children;
}

export { POProvider, useAuth, PrivateRoute };
