const geladeira = ['carne', 'arroz-velho', 'agua']

const item = 'carne'

const procurarCoisaNaGeladeira = async () =>{
    return new Promise((aprovado, reprovado)=>{
        setTimeout(()=>{
            if (geladeira.includes(item)){
                return aprovado('Huuum, achei seu item')
            }
            return reprovado('Esse carai num tem')
        }, 1000)
    })
}

procurarCoisaNaGeladeira()
.then((temIsso)=>{
    console.log(temIsso + ' oi')  
})
.then((valor)=>{
    console.log(valor)
})
.catch((err)=>{
    console.log(err)
})