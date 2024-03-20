import * as fs from 'fs';

import { Elemento } from './elemento.js';
import { ProcesadorMochila } from "./procesador_mochila.js";

/**
 * Subclase de ProcesadorMochila para representar un Procesador de una instancia del problema de la mochila en un fichero JSON
 */
export class ProcesadorMochilaJSON extends ProcesadorMochila {
  /**
   * Función que procesa los datos del fichero mochila.json
   * @param filename nombre del fichero a leer
   * @returns promesa para comprobar la operación
   */
  async procesar(filename: string): Promise<void> {
    // if (!filename.endsWith('.json')) throw new Error('Formato de archivo no soportado');
    this.hookAntes();
    let beneficios: number[] = [];
    let pesos: number[] = [];
    const data = await fs.promises.readFile(filename, 'utf-8');
    const json = JSON.parse(data);
    const capacidad = json.capacidad;
    const numElementos = json.numElementos;
    const elementos: { numero: number, peso: number, beneficio: number }[] = json.elementos;
    for (const elemento of elementos) {
      beneficios.push(elemento.beneficio);
      pesos.push(elemento.peso);
    }
    this.hookDespues(beneficios, pesos);
  }
}