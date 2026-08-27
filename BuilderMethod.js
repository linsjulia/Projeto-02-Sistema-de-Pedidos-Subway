// SISTEMAS DE PEDIDOS SUBWAY

class Tamanho{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

class Pao{
    constructor(tipo){
        this.tipo = this.tipo;
    }
}

class Proteina{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Queijo{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Aquecido{
    constructor(aquecido){
        this.aquecido = aquecido;
    }
}

class Salada{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Molho{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class TemperoAdicional{
    constructor(tipo){
        this.tipo = tipo;
    }
}

// Builder

class LancheBuilder{
    constructor(){
        this.tamanho = null;
        this.pao = null;
        this.proteina = null;
        this.queijo = null;
        this.aquecido = null;
        this.salada = null;
        this.molho = null;
        this.tempero = null;
    }

    definirTamanho(tipo){
        this.tamanho = new Tamanho(tipo);
        return this;
    }

    escolherPao(tipo){
        this.pao = new Pao(tipo);
        return this;
    }

    escolherProteina(tipo){
        this.proteina = new Proteina(tipo);
        return this;
    }

    adicionarQueijo(tipo){
        this.queijo = new Queijo(tipo);
    }

    definirAquecimento(){
        this.aquecido = new Aquecido(aquecido);
    }

    adicionarSalada(){
        this.salada = new Salada(tipo);
    }

    adicionarMolho(){
        this.molho = new Molho(tipo);
    }

    adicionarTempero(){
        this.tempero = new TemperoAdicional(tipo)
    }

    construir(){
        return new Lanche(this.tamanho, this.pao, this.proteina, this.queijo, this.aquecido, this.salada, this.molho, this.tempero);
    }
}

// Construindo o lanche:
class Lanche{
    constructor(tamanho, pao, proteina, queijo, aquecido, salada, molho, tempero){
        this.tamanho = tamanho;
        this.pao = pao;
        this.proteina = proteina;
        this.queijo = queijo;
        this.aquecido = aquecido;
        this.salada = salada;
        this.molho = molho;
        this.tempero = tempero;
    }

    mostrarDetalhes(){
        console.log(`LANCHE: \n
            \t Tamanhor: \t\t${this.tamanho.tipo} 
            \t Estilo: \t\t${this.estilo.estilo} 
            \t Rodas: \t\t${this.rodas.tamanho}
            \t Interior: \t\t${this.interior.cor}
            
        `)
    }
}

// Usando o padrão GoF Criacional - Builder

const carro2 = builder
    .addMotor('1.0')
    .addEstilo('Popular')
    .addRodas(13)
    .addInterior('Vermelho')
    .construir()