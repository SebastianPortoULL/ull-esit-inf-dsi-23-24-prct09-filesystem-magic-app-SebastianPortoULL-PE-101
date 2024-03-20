import 'mocha';
import { expect } from 'chai';

import { ProcesadorMochilaCSV } from '../src/procesador_mochila_csv.js'

describe('Tests para la clase ProcesadorMochilaCSV', () => {
  let procesadorCSV : ProcesadorMochilaCSV;
  let file : string;
  let error_file : string;
  beforeEach(() => {
    procesadorCSV = new ProcesadorMochilaCSV();
    file = '/home/usuario/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-SebastianPortoULL-PE-101/datos/mochila.csv';
    error_file = '/home/usuario/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-SebastianPortoULL-PE-101/datos/mochila.txt';
  });

  it('Se crea un ProcesadorMochilaCSV correctamente', () => {
    expect(procesadorCSV).to.be.an.instanceOf(ProcesadorMochilaCSV);
  });
  it('Se procesa un ProcesadorMochilaCSV correctamente', () => {
    procesadorCSV.setHookAntes(() => {
      console.log('Leyendo archivo CSV...');
    });
    procesadorCSV.setHookDespues((beneficios, pesos) => {
      console.log('Beneficios (CSV):', beneficios);
      console.log('Pesos (CSV):', pesos);
      expect(beneficios).to.be.deep.equal([5, 8, 10]);
      expect(pesos).to.be.deep.equal([2, 3, 5]);
    });
    procesadorCSV.procesar(file);
  });
  /**it('Se lanza un error al leer un ProcesadorMochilaCSV incorrectamente', () => {
    procesadorCSV.setHookAntes(() => {
      console.log('Leyendo archivo CSV...');
    });
    procesadorCSV.setHookDespues((beneficios, pesos) => {
      console.log('Beneficios (CSV):', beneficios);
      console.log('Pesos (CSV):', pesos);
    });
    expect(() => procesadorCSV.procesar(error_file)).to.throw(Error, 'Formato de archivo no soportado');
  });*/
})