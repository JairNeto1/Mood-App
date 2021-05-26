const questions = [
    "O que aprendi hoje?"
    "O que me deixou chateado? e o que poderia ter feito fiferente?"
    "O que me deixou feliz?"
    "Algum plano para o próximo dia?"
];

const ask = (index =0 ) => {
    process.stdout.write.write("\n", + questions[index] + "->"
}

ask ();

        const answers = []
        process.stdout.write.on("data", => {
        answers.push(data.data.toString().trim())
        if (answers.length < questions.length) {
            ask(answers.length)
        }else {
            process.exit()
        }
    })

