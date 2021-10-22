/**
 * EJERCICIO #1
 */
const nombre = document.getElementById("username");
const apellido = document.getElementById("lastname");
const edad = document.getElementById("age");
const telefono = document.getElementById("phone");
const celular = document.getElementById("cellphone");
const direccion = document.getElementById("address");

const btnOne = document.getElementById("btnOne");

const exOne = () => {
  let username = prompt("Ingrese su nombre: ");
  let lastname = prompt("Ingrese su apellido: ");
  let age = prompt("Ingrese su edad: ");
  let phone = prompt("Ingrese su teléfono: ");
  let cellphone = prompt("Ingrese su celular: ");
  let address = prompt("Ingrese su dirección: ");

  if (
    username == null ||
    username == "" ||
    lastname == null ||
    lastname == "" ||
    age == null ||
    age == "" ||
    phone == null ||
    phone == "" ||
    cellphone == null ||
    cellphone == "" ||
    address == null ||
    address == ""
  ) {
    return alert("Hay campos vacios, intentelo nuevamente");
  }

  localStorage.setItem("username", username);
  localStorage.setItem("lastname", lastname);
  localStorage.setItem("age", age);
  localStorage.setItem("phone", phone);
  localStorage.setItem("cellphone", cellphone);
  localStorage.setItem("address", address);
};

if (
  localStorage.getItem("username", username) &&
  localStorage.getItem("lastname", lastname) &&
  localStorage.getItem("age", age) &&
  localStorage.getItem("phone", phone) &&
  localStorage.getItem("cellphone", cellphone) &&
  localStorage.getItem("address", address)
) {
  nombre.innerHTML = "Su nombre es: " + localStorage.getItem("username");
  apellido.innerHTML = "Su apellido es: " + localStorage.getItem("lastname");
  edad.innerHTML = "Su edad es: " + localStorage.getItem("age");
  telefono.innerHTML = "Su telefono es: " + localStorage.getItem("phone");
  celular.innerHTML = "Su celular es: " + localStorage.getItem("cellphone");
  direccion.innerHTML = "Su direccion es: " + localStorage.getItem("address");
}

btnOne.onclick = () => {
  exOne();
};

/**
 * EJERCICIO 2
 */
const btnTwo = document.getElementById("btnTwo");
const showData = document.getElementById("showData");
const exTwo = () => {
  let employee = prompt("Ingrese el nombre del empleado: ");
  let salary = prompt("Ingrese el salario: ");
  if (employee == null || employee == "" || salary == null || salary == "") {
    return alert("Hay campos vacios, intentelo nuevamente");
  }
  showData.innerHTML = "Nombre del empleado: " + employee+"<br>Salario del empleado: " + salary;
};

btnTwo.onclick = () => {
  exTwo();
};

/**
 * EJERCICIO 3
 */
const btnThree = document.getElementById("btnThree");
const showWord = document.getElementById("showWord");

const exThree = () => {
  let word = prompt("Ingrese una palabra: ");
  if (word == null || word == "") {
    return alert("Hay campos vacios, intentelo nuevamente");
  }
  word = word.toLowerCase();
  switch (word) {
    case "casa":
      showWord.innerHTML = "Palabra: "+word+"<br> Traducción: House";
      break;
    case "mesa":
      showWord.innerHTML = "Palabra: "+word+"<br> Traducción: Table";
      break;
    case "perro":
      showWord.innerHTML = "Palabra: "+word+"<br> Traducción: Dog";
      break;
    case "gato":
      showWord.innerHTML = "Palabra :"+word+"<br> Traducción: Cat";
      break;
    default:
      alert("Ingrese una palabra valida");
      break;
  }
};
btnThree.onclick = () => {
  exThree();
};

/**
 * Ejercicio 4
 */
const btnFour = document.getElementById("btnFour");
const showDepartment = document.getElementById("showDepartment");

const exFour = () => {
  let department = prompt("Ingrese una departamento de Colombia: ");
  if (department == null || department == "") {
    return alert("Hay campos vacios, intentelo nuevamente");
  }
  department = department.toLowerCase();
  switch (department) {
    case "amazonas":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: LETICIA";
      break;
    case "antioquia":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: MEDELLIN";
      break;
    case "arauca":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: ARAUCA";
      break;
    case "atlantico":
      showDepartment.innerHTML =
        "Departamento: " +
        department.toUpperCase() +
        "\n Capital: BARRANQUILLA";
      break;
    case "bolivar":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: CARTAGENA";
      break;
    case "boyaca":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: TUNJA";
      break;
    case "caldas":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: MANIZALES";
      break;
    case "caqueta":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: FLORENCIA";
      break;
    case "casanare":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: YOPAL";
      break;
    case "cauca":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: POPAYAN";
      break;
    case "cesar":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: VALLEDUPAR";
      break;
    case "choco":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: QUIBDO";
      break;
    case "cordoba":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: MONTERIA";
      break;
    case "cundinamarca":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: BOGOTA";
      break;
    case "guainia":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: INIRIDA";
      break;
    case "guaviare":
      showDepartment.innerHTML =
        "Departamento: " +
        department.toUpperCase() +
        "\n Capital: SAN JOSE DEL GUAVIARE";
      break;
    case "huila":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: NEIVA";
      break;
    case "guajira":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: RIOHACHA";
      break;
    case "magdalena":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: SANTA MARTA";
      break;
    case "meta":
      showDepartment.innerHTML =
        "Departamento: " +
        department.toUpperCase() +
        "\n Capital: VILLAVICENCIO";
      break;
    case "nariño":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: PASTO";
      break;
    case "norte de santander":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: CUCUTA";
      break;
    case "putumayo":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: MOCOA";
      break;
    case "quindio":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: ARMENIA";
      break;
    case "risaralda":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: PEREIRA";
      break;
    case "san andres":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: SAN ANDRES";
      break;
    case "santander":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: BUCARAMANGA";
      break;
    case "sucre":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: SINCELEJO";
      break;
    case "tolima":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: IBAGUE";
      break;
    case "valle del cauca":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: CALI";
      break;
    case "vaupes":
      showDepartment.innerHTML =
        "Departamento: " + department.toUpperCase() + "\n Capital: MITU";
      break;
    case "vichada":
      showDepartment.innerHTML =
        "Departamento: " +
        department.toUpperCase() +
        "\n Capital: PUERTO CARREÑO";
      break;
    default:
      alert("Ingrese una departament valido");
      break;
  }
};

btnFour.onclick = () => {
  exFour();
};
