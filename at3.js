 const info = {
        a1:"titulo:O Máskara",
         a2:"Lancamento:1994",
         a3:"diretor:Chuck Russell",
         a4:"roteirista:Mike Werb",
         a5:"genero:Fantasia",
        elenco:{
            a1: ["Nome:Jim Carrey ","Papel: Stanley Ipkiss"],
            a2: ["Nome: Cameron Diaz","Papel:Tina Carlyle "],
            a3: ["Nome: Peter Greene","Papel: Dorian Tyrell "],
            a4: ["Nome:Peter Riegert ","Papel:Tenente Mitch "],
            a5: ["Nome: Amy Yasbeck","Papel: Peggy Brandt "],
            f: function imprimir(){
                console.log(info)
            }
        }
    }
    info.elenco.f()