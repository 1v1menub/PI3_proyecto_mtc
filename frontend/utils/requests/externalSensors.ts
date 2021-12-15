import {urls} from '../../constants/pages';

export interface ExternalSensorType {
  codigoEquipo: number;
  token: string;
  action: string;
  fechaHora: string;
  correlativo: string;
  entidad: {
    codigo: number;
    nombre: string;
  };
  postulante: {
    tipoDoc: number;
    nroDoc: string;
  };
}

export const ExternalSensor = {
  publish: async (externalSensor: ExternalSensorType) => {
    return fetch(`${urls.SENSOR_URL}/publish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(externalSensor),
    }).then(response => {
      if (response.ok) {
        return response.text();
      } else {
        return 'Error';
      }
    });
  },
};
