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
    justificacion: "jose",
  },
  {
    id: 2,
    nombre: "Software de encuestas Limesurvey",
    fechaInicio: "2021-11-05",
    fechaFin: "2022-10-05",
    fechaCreacion: "2022-10-04",
    estado: "Activo",
    descripcion: "Soy una descripción",
    justificacion: "",
  },
  {
    id: 3,
    nombre: "ChatBot Sinapsis (Diseño de flujo)",
    fechaInicio: "2021-11-07",
    fechaFin: "2022-10-03",
    fechaCreacion: "2021-11-03",
    estado: "Suspendido",
    descripcion: "Soy una descripción",
    justificacion: "",
  },
];

function POProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [unidad, setUnidad] = React.useState(null);
  const [proyectos, setProyectos] = React.useState(POprojets);
  const [searchValue, setSearchValue] = React.useState("");
  let proyectosBuscados = [];

  const navigate = useNavigate();

  const noProyectos = proyectos.length;

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

  const createPO = (
    nombre,
    estado,
    fechaInicio,
    fechaFin,
    fechaCreacion,
    descripcion
  ) => {
    const id = newPOID(proyectos);
    const newProyectos = [...proyectos];
    newProyectos.push({
      id,
      nombre,
      estado,
      fechaInicio,
      fechaFin,
      fechaCreacion,
      descripcion,
    });
    setProyectos(newProyectos);
  };

  const editPO = (
    id,
    nombre,
    estado,
    fechaInicio,
    fechaFin,
    fechaCreacion,
    descripcion
  ) => {
    const POIndex = proyectos.findIndex((proyecto) => proyecto.id === id);

    proyectos[POIndex].nombre = nombre;
    proyectos[POIndex].estado = estado;
    proyectos[POIndex].fechaInicio = fechaInicio;
    proyectos[POIndex].fechaFin = fechaFin;
    proyectos[POIndex].fechaCreacion = fechaCreacion;
    proyectos[POIndex].descripcion = descripcion;

    setProyectos(proyectos);
  };

  const anulPO = (id, justificacion) => {
    const POIndex = proyectos.findIndex((proyecto) => proyecto.id === id);

    proyectos[POIndex].justificacion = justificacion;
    proyectos[POIndex].estado = "Anulado";
  };

  let proyectosActivos = proyectos.filter(
    (proyecto) => proyecto.estado === "Activo"
  );
  let proyectosActivosValue = proyectosActivos.length;

  let proyectosSuspendidos = proyectos.filter(
    (proyecto) => proyecto.estado === "Suspendido"
  );
  let proyectosSuspendidosValue = proyectosSuspendidos.length;

  let proyectosAnulados = proyectos.filter(
    (proyecto) => proyecto.estado === "Anulado"
  );
  let proyectosAnuladosValue = proyectosAnulados.length;

  if (!searchValue.length >= 1) {
    proyectosBuscados = proyectos;
  } else {
    proyectosBuscados = proyectos.filter((proyecto) => {
      const proyectoNombre = proyecto.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return proyectoNombre.includes(searchText);
    });
  }

  const auth = {
    user,
    login,
    logout,
    proyectos,
    createPO,
    editPO,
    anulPO,
    noProyectos,
    proyectosBuscados,
    proyectosActivosValue,
    proyectosSuspendidosValue,
    proyectosAnuladosValue,
    setSearchValue,
  };
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
