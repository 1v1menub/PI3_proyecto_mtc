// interface from json above
export interface CheckListType {
  Antes: {
    Verificacion: Array<string>;
    Inicio: Array<string>;
    Desplazamiento: Array<string>;
    Cambio: Array<string>;
    Giros: Array<string>;
  };
  Durante: {
    Inicio: Array<string>;
    Desplazamiento: Array<string>;
    Cambio: Array<string>;
    Giros: Array<string>;
  };
  Despues: {
    Verificacion: Array<string>;
    Inicio: Array<string>;
    Desplazamiento: Array<string>;
    Cambio: Array<string>;
    Giros: Array<string>;
  };
}

export const CheckList = {
  // get checklist with timeout of 2 seconds
  getCheckList: async (): Promise<CheckListType> => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          Antes: {
            Verificacion: [
              'Alinear los espejos retrovisores laterales exteriores y el espejo retrovisor central interior, según corresponda a la categoría vehicular; y de manera correcta.',
              'Verificar el correcto funcionamiento del sistema de luces (luces direccionales, luces intermitentes de emergencia, luces delanteras) y de la bocina.',
              'Abrocharse el cinturón de seguridad.',
              'Colocar correctamente, el asiento (ángulo de inclinación de 90º a 105º), y el cabezal de seguridad (reposacabezas) del conductor.',
            ],
            Inicio: [
              'Seguir las indicaciones del evaluador, en todo momento.',
              'Liberar el freno de mano del vehículo antes de iniciar la partida.',
              'Demostrar dominio del uso de los mandos del vehículo (frenos, acelerador, embrague, caja de cambios)',
              'No detenerse innecesariamente.',
              'Conducir con ambas manos sobre el volante de dirección, salvo por la necesidad de accionar un comando del vehículo.',
            ],
            Desplazamiento: [
              'Desplazarse dentro del carril correspondiente. ',
              'Respetar las señales de velocidad máxima y mínima instaladas en la infraestructura cerrada a la circulación vial.',
              'Respetar los semáforos, las señales horizontales y verticales, y detenerse ante los cruceros peatonales, según corresponda.',
              'Respetar la señalización preventiva de cruce de ciclovía.',
              'No perder el control del vehículo.',
              'No realizar maniobras temerarias, generando riesgo o un accidente de tránsito.',
              'No frenar bruscamente.',
              'No tocar el claxon innecesariamente.',
              'Guardar la distancia técnica mínima entre vehículo, de modo tal que visualice la rueda trasera del vehículo que va adelante desde su posición.',
            ],
            Cambio: [
              'Verificar la aproximación de otro vehículo al realizar la maniobra del cambio de carril.',
              'Utilizar las luces direccionales y de manera correcta para informar el cambio de carril.',
              'Realizar el cambio de carril únicamente cuando está permitido (línea blanca discontinua).',
              'Apagar las luces direccionales una vez realizada la maniobra de cambio de carril.',
            ],
            Giros: [
              'Alinear el vehículo al carril correspondiente de giro (izquierda o derecha).',
            ],
          },
          Durante: {
            Inicio: [
              'Seguir las indicaciones del evaluador, en todo momento.',
              'Liberar el freno de mano del vehículo antes de iniciar la partida.',
              'Demostrar dominio del uso de los mandos del vehículo (frenos, acelerador, embrague, caja de cambios)',
              'No detenerse innecesariamente.',
              'Conducir con ambas manos sobre el volante de dirección, salvo por la necesidad de accionar un comando del vehículo.',
            ],
            Desplazamiento: [
              'Desplazarse dentro del carril correspondiente. ',
              'Respetar las señales de velocidad máxima y mínima instaladas en la infraestructura cerrada a la circulación vial.',
              'Respetar los semáforos, las señales horizontales y verticales, y detenerse ante los cruceros peatonales, según corresponda.',
              'Respetar la señalización preventiva de cruce de ciclovía.',
              'No perder el control del vehículo.',
              'No realizar maniobras temerarias, generando riesgo o un accidente de tránsito.',
              'No frenar bruscamente.',
              'No tocar el claxon innecesariamente.',
              'Guardar la distancia técnica mínima entre vehículo, de modo tal que visualice la rueda trasera del vehículo que va adelante desde su posición.',
            ],
            Cambio: [
              'Verificar la aproximación de otro vehículo al realizar la maniobra del cambio de carril.',
              'Utilizar las luces direccionales y de manera correcta para informar el cambio de carril.',
              'Realizar el cambio de carril únicamente cuando está permitido (línea blanca discontinua).',
              'Apagar las luces direccionales una vez realizada la maniobra de cambio de carril.',
            ],
            Giros: [
              'Alinear el vehículo al carril correspondiente de giro (izquierda o derecha).',
            ],
          },
          Despues: {
            Verificacion: [
              'Alinear los espejos retrovisores laterales exteriores y el espejo retrovisor central interior, según corresponda a la categoría vehicular; y de manera correcta.',
              'Verificar el correcto funcionamiento del sistema de luces (luces direccionales, luces intermitentes de emergencia, luces delanteras) y de la bocina.',
              'Abrocharse el cinturón de seguridad.',
              'Colocar correctamente, el asiento (ángulo de inclinación de 90º a 105º), y el cabezal de seguridad (reposacabezas) del conductor.',
            ],
            Inicio: [
              'Seguir las indicaciones del evaluador, en todo momento.',
              'Liberar el freno de mano del vehículo antes de iniciar la partida.',
              'Demostrar dominio del uso de los mandos del vehículo (frenos, acelerador, embrague, caja de cambios)',
              'No detenerse innecesariamente.',
              'Conducir con ambas manos sobre el volante de dirección, salvo por la necesidad de accionar un comando del vehículo.',
            ],
            Desplazamiento: [
              'Desplazarse dentro del carril correspondiente. ',
              'Respetar las señales de velocidad máxima y mínima instaladas en la infraestructura cerrada a la circulación vial.',
              'Respetar los semáforos, las señales horizontales y verticales, y detenerse ante los cruceros peatonales, según corresponda.',
              'Respetar la señalización preventiva de cruce de ciclovía.',
              'No perder el control del vehículo.',
              'No realizar maniobras temerarias, generando riesgo o un accidente de tránsito.',
              'No frenar bruscamente.',
              'No tocar el claxon innecesariamente.',
              'Guardar la distancia técnica mínima entre vehículo, de modo tal que visualice la rueda trasera del vehículo que va adelante desde su posición.',
            ],
            Cambio: [
              'Verificar la aproximación de otro vehículo al realizar la maniobra del cambio de carril.',
              'Utilizar las luces direccionales y de manera correcta para informar el cambio de carril.',
              'Realizar el cambio de carril únicamente cuando está permitido (línea blanca discontinua).',
              'Apagar las luces direccionales una vez realizada la maniobra de cambio de carril.',
            ],
            Giros: [
              'Alinear el vehículo al carril correspondiente de giro (izquierda o derecha).',
            ],
          },
        });
      }, 2000);
    });
  },
};
