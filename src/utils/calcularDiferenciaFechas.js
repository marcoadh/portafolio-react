const calcularDiferenciaFechas = (fecha) => {
  const fecha_inicial = new Date(fecha),
    fecha_actual = new Date();

  let anios = fecha_actual.getFullYear() - fecha_inicial.getFullYear(),
    meses = fecha_actual.getMonth() - fecha_inicial.getMonth();

  if (meses < 0) {
    anios--
    meses += 12
  }

  return {
    anios,
    meses
  }
}

export default calcularDiferenciaFechas;