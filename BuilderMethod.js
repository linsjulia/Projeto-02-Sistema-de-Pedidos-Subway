class LancheBuilder {
    constructor() {
        this.tamanho = null;
        this.pao = null;
        this.proteina = null;
        this.queijo = null;
        this.aquecido = null;
        this.salada = null;
        this.molho = null;
        this.tempero = null;
    }

        definirTamanho(tipo) {
            this.tamanho = tipo;
            return this;
        }

        escolherPao(tipo) {
            this.pao = tipo;
            return this;
        }

        escolherProteina(tipo) {
            this.proteina = tipo;
            return this;
        }

        escolherQueijo(tipo) {
            this.queijo = tipo;
            return this;
        }

        escolherAquecido(tipo) {
        this.aquecido = tipo;
        return this;
    }


        escolherSalada(tipo) {
        this.salada = tipo;
        return this;
    }

        escolherMolho(tipo) {
        this.molho = tipo;
        return this;
    }

        escolherTempero(tipo) {
        this.tempero = tipo;
        return this;
    }

    construir() {
        return new Lanche(
            this.tamanho,
            this.pao,
            this.proteina ?? "Sem proteina",
            this.queijo ?? "Sem queijo",
            this.aquecido ?? "Não",
            this.salada ?? "Sem salada",
            this.molho ?? "Sem molho",
            this.tempero ?? "Sem tempero"
        );
    }
}


class Lanche {
    constructor(tamanho, pao, proteina, queijo, aquecido, salada, molho, tempero) {
        this.tamanho = tamanho;
        this.pao = pao;
        this.proteina = proteina;
        this.queijo = queijo;
        this.aquecido = aquecido;
        this.salada = salada;
        this.molho = molho;
        this.tempero = tempero;
    }

    mostrarPedido(){
        console.log(`LANCHE: \n
            \t Tamanho do lanche: ${this.tamanho} 
            \t Tipo de pão: ${this.pao} 
            \t Tipo de proteina: ${this.proteina}
            \t Queijo: ${this.queijo}
            \t Aquecimento do lanche: ${this.aquecido}
            \t Vegetais e saladas: ${this.salada}
            \t Molhos: ${this.molho}
            \t Temperos e adicionais: ${this.tempero}
        `)
    }
}




const lanche1 = new LancheBuilder()
    .definirTamanho("30 cm")
    .escolherPao("3 Queijos")
    .escolherProteina("Frango")
    .escolherQueijo("Cheddar")
    .escolherSalada("Tomate")
    .escolherMolho("Barbecue")
    .construir();
lanche1.mostrarPedido();

const lanche2 = new LancheBuilder()
    .definirTamanho("15 cm")
    .escolherPao("Italiano")
    .escolherProteina("Atum")
    .escolherQueijo("Mussarela")
    .escolherSalada("Repolho")
    .escolherMolho("Cebola Agridoce")
    .construir();
lanche2.mostrarPedido();

const lanche3 = new LancheBuilder()
    .definirTamanho("30 cm")
    .escolherPao("Integral")
    .escolherSalada("Picles")
    .escolherMolho("Mostarda e Mel")
    .construir();
lanche3.mostrarPedido();

const lanche4 = new LancheBuilder()
    .definirTamanho("30 cm")
    .escolherPao("Italiano")
    .escolherProteina("Frango")
    .escolherQueijo("Mussarela")
    .escolherAquecido("Sim")
    .escolherSalada("Alface")
    .escolherMolho("Chipotle")
    .construir();
lanche4.mostrarPedido();