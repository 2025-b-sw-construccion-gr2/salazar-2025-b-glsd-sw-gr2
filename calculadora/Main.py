from glsd_suma.archivo_de_logica_suma import Suma

class Main:
    @staticmethod
    def main():

        while True:
            try:
                opcion = int(input("Presiona 1 para sumar, 2 para restar y 3 para cerrar el programa: "))

                if(opcion == 3):
                    print("Cerrando el programa...")
                    break
                
                if(opcion not in [1, 2]):
                    print("Error: Opcion no valida.")
                    continue

                primerValor = int(input("Ingresa el primer numero: "))
                segundoValor = int(input("Ingresa el segundo numero: "))

                if opcion == 1:
                    Suma.sumar(primerValor, segundoValor)
                elif opcion == 2:
                    print("Aqui iria la resta, pero no se ha implementado.")

            except ValueError:
                print("Error: Número no valido.")
                

# Llama al método main() cuando se ejecute el script.
if __name__ == "__main__":
    Main.main()

            
