  let v = []
        add = (nome,h=0,conc=true)=>{
            if(conc){
                v = [nome,h,"Projeto concluído!"]
            }else{
                v = [nome,h,"Projeto não concluído!"]
            }
            console.log(v)
        }
        add("estoque de compras",4,true)