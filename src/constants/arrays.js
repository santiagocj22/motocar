import {images} from '../assets';

export const services = [
  {
    id: 1,
    name: "Servicio de Torno",
    src: "",
    services: [
      { name: "Fabricación de poleas", icon: images.pulley },
      { name: "Fabricación de Hidros", icon: images.hidro },
      { name: "Fabricación de trocar", icon: images.trocars },
      { name: "Fabricacion de bujes", icon: images.bujes },
    ],
  },
  {
    id: 2,
    name: "Servicio de Fresadora",
    src: "",
    services: [
      { name: "Fabricación de piñones", icon:images.gears },
      { name: "Fabricación de cuñeros", icon: images.cunero },
      { name: "Fabricación de estrías", icon: images.estrias },
    ],
  },
  {
    id: 3,
    name: "Servicio de Prensa",
    src: "",
    services: [
      { name: "Extracción de Rodamientos", icon: images.bearing },
      { name: "Extracción de bujes", icon: images.bujes },
      { name: "Extracción de poleas", icon: images.pulley },
    ],
  },
  {
    id: 4,
    name: "Soldaduras",
    src: "",
    services: [
      { name: "Soldaduras Electricas", icon: images.electricWeld },
      { name: "Soldaduras en Argon", icon: images.argonWeld },
      { name: "Soldaduras en Aluminio", icon: images.aluminium },
    ],
  },
];

export const teamPeople = [
  { name: "German Clavijo", function: "Fundador", src: "" },
  {
    name: "Santiago Clavijo",
    function: "Desarrollador Web, Tornero-Fresador",
    src: "",
  },
  { name: "Dairon Ramirez", function: "Tornero-Fresador, Soldador", src: "" },
  {
    name: "Jaime Vergara",
    function: "Tornero-Fresador, Rectificador",
    src: "",
  },
  { name: "Jonathan Giraldo", function: "Mensajero", src: "" },
  { name: "El veneco", function: "Tornero-Fresador, Rectificador", src: "" },
];
