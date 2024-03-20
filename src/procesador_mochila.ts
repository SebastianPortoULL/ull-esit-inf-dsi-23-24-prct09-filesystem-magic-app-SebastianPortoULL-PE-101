/**
 * Clase abstracta para representar un Procesador de una instancia del problema de la mochila
 */
export abstract class ProcesadorMochila {
  // Métodos de enganche
  protected hookAntes: () => void = () => {};
  protected hookDespues: (beneficios: number[], pesos: number[]) => void = () => {};
  
  // Setters de los métodos de enganche
  /**
   * Setter que se ejecutará antes del procesado
   * @param hook bloque de código a ejecutar
   */
  setHookAntes(hook: () => void) {
    this.hookAntes = hook;
  }

  /**
   * Setter que se ejecutará después del procesado
   * @param hook bloque de código a ejecutar
   */
  setHookDespues(hook: (beneficios: number[], pesos: number[]) => void) {
    this.hookDespues = hook;
  }

  /**
   * Función para el procesamiento de un fichero con las instancias del problema de la mochila
   * @param filename nombre del fichero a leer
   * @returns promesa para comprobar la operación
   */
  abstract procesar(filename: string): Promise<void>;
}

