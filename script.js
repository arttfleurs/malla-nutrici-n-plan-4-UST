const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      "Razonamiento lógico matemático",
      "Psicología de la alimentación",
      "Química general",
      "Introducción a la Nutrición y Dietética",
      "Taller de competencias comunicativas",
      "Taller de competencias del aprendizaje",
      "Taller de desarrollo personal I"
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      "Gestión de la información",
      "Biología celular",
      "Química orgánica (PR: Química general)",
      "Ciencias de los alimentos",
      "Primeros auxilios",
      "Taller de desarrollo personal II",
      "Cultura y Valores"
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      "Estadísticas para ciencias de la salud (PR: Razonamiento lógico matemático)",
      "Microbiología y parasitología alimentaria (PR: Biología celular)",
      "Bioquímica (PR: Biología celular y Química orgánica)",
      "Anatomofisiología (PR: Biología celular)",
      "Inglés básico I"
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      "Fundamentos en salud pública (PR: Estadísticas para ciencias de la salud)",
      "Higiene e inocuidad alimentaria (PR: Microbiología y parasitología alimentaria)",
      "Nutrición básica (PR: Bioquímica y Anatomofisiología)",
      "Factores de la conducta alimentaria",
      "Fisiología y bioquímica del ejercicio (PR: Bioquímica y Anatomofisiología)",
      "Persona y sentido",
      "Inglés básico II (PR: Inglés básico I)"
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      "Gestión en salud",
      "Bioquímica de los alimentos y bromatología (PR: Higiene e inocuidad alimentaria)",
      "Técnicas dietéticas y gastronomía (PR: Higiene e inocuidad alimentaria y Nutrición básica)",
      "Evaluación nutricional (PR: Nutrición básica y Fisiología y bioquímica del ejercicio)",
      "Educación alimentaria nutricional (PR: Factores de la conducta alimentaria)",
      "Promoción en salud (PR: Factores de la conducta alimentaria)"
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      "Ética en salud",
      "Alimentación normal en el ciclo vital (PR: Técnicas dietéticas y gastronomía)",
      "Fisiopatología y terapia farmacológica (PR: Técnicas dietéticas y gastronomía, Evaluación nutricional)",
      "Administración en servicios de alimentación (PR: Técnicas dietéticas y gastronomía, Bioquímica de los alimentos y bromatología)",
      "Práctico evaluación nutricional (PR: Evaluación nutricional)",
      "Electivo I"
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      "Metodología de la investigación (PR: Práctico evaluación nutricional, Fisiopatología y terapia farmacológica)",
      "Dietoterapia en el ciclo vital (PR: Fisiopatología y terapia farmacológica, Alimentación normal en el ciclo vital, Práctico evaluación nutricional)",
      "Práctica dietoterapia en el ciclo vital (PR: Dietoterapia en el ciclo vital)",
      "Gestión en servicios de alimentación (PR: Administración de servicios de alimentación)",
      "Taller de gestión servicios de alimentación (PR: Gestión de servicios de alimentación)",
      "Intervención comunitaria (PR: Alimentación normal en ciclo vital)",
      "Electivo II"
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      "Seminario de investigación (PR: Metodología de la investigación)",
      "Dietoterapia en patologías complejas (PR: Práctico dietoterapia en el ciclo vital)",
      "Práctica dietoterapia en patologías complejas (PR: Dietoterapia en patologías complejas)",
      "Diseño proyectos de intervención en salud (PR: Metodología de la investigación)",
      "Electivo III"
    ]
  },
  {
    semestre: "9° Semestre",
    ramos: [
      "Internado 1",
      "Internado 2"
    ]
  },
  {
    semestre: "10° Semestre",
    ramos: [
      "Internado 3",
      "Internado 4"
    ]
  }
];

const container = document.getElementById("malla-container");

malla.forEach(({ semestre, ramos }) => {
  const bloque = document.createElement("div");
  bloque.className = "bloque";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  titulo.className = "titulo";
  titulo.onclick = () => {
    contenido.classList.toggle("visible");
  };

  const contenido = document.createElement("div");
  contenido.className = "contenido";

  ramos.forEach(ramo => {
    const p = document.createElement("p");
    p.textContent = "• " + ramo;
    contenido.appendChild(p);
  });

  bloque.appendChild(titulo);
  bloque.appendChild(contenido);
  container.appendChild(bloque);
});

