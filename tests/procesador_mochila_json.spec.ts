import 'mocha';
import { expect } from 'chai';

import { ProcesadorMochilaJSON } from '../src/procesador_mochila_json.js';

describe('Tests para la clase ProcesadorMochilaJSON', () => {
    let procesadorJSON : ProcesadorMochilaJSON;
    let file : string;
    let error_file : string;
    beforeEach(() => {
      procesadorJSON = new ProcesadorMochilaJSON();
      file = '/home/usuario/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-SebastianPortoULL-PE-101/datos/mochila.json';
      error_file = '/home/usuario/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-SebastianPortoULL-PE-101/datos/mochila.txt';
    });
  
    it('Se crea un ProcesadorMochilaJSON correctamente', () => {
      expect(procesadorJSON).to.be.an.instanceOf(ProcesadorMochilaJSON);
    });
    it('Se procesa un ProcesadorMochilaJSON correctamente', () => {
      procesadorJSON.setHookAntes(() => {
        console.log('Leyendo archivo JSON...');
      });
      procesadorJSON.setHookDespues((beneficios, pesos) => {
        console.log('Beneficios (JSON):', beneficios);
        console.log('Pesos (JSON):', pesos);
        expect(beneficios).to.be.deep.equal([8, 12, 15, 6]);
        expect(pesos).to.be.deep.equal([3, 5, 7, 2]);
      });
      
    });
    /**it('Se lanza un error al leer un ProcesadorMochilaJSON incorrectamente', () => {
      procesadorJSON.setHookAntes(() => {
        console.log('Leyendo archivo JSON...');
      });
      procesadorJSON.setHookDespues((beneficios, pesos) => {
        console.log('Beneficios (JSON):', beneficios);
        console.log('Pesos (JSON):', pesos);
      });
      // expect(() => procesadorJSON.procesar(error_file)).to.throw(Error, 'Formato de archivo no soportado');
    });*/
  })