import * as fs from 'fs';

import { Elemento } from './elemento.js';
import { ProcesadorMochila } from "./procesador_mochila.js";

/**
 * Subclase de ProcesadorMochila para representar un Procesador de una instancia del problema de la mochila en un fichero CSV
 */
export class ProcesadorMochilaCSV extends ProcesadorMochila {
  /**
   * Función que procesa los datos del fichero mochila.csv
   * @param filename nombre del fichero a leer
   * @returns promesa para comprobar la operación
   */
  async procesar(filename: string): Promise<void> {
    // if (!filename.endsWith('.csv')) throw new Error('Formato de archivo no soportado');
    this.hookAntes();
    let beneficios: number[] = [];
    let pesos: number[] = [];
    const data = await fs.promises.readFile(filename, 'utf-8');
    const lines = data.split('\n');
    const capacidad = parseInt(lines[0]);
    const numElementos = parseInt(lines[1]);
    for (let i = 2; i < lines.length; i++) {
      const [numero, peso, beneficio] = lines[i].trim().split(',').map(Number);
      beneficios.push(beneficio);
      pesos.push(peso);
    }
    this.hookDespues(beneficios, pesos);
  }
}
