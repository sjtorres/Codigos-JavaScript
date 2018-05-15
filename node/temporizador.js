const schedule = require('node-schedule')

const tarefa0 = schedule.scheduleJob('*/5 * 18 * * 1', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa0.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 18
regra.second = 30

const tarefa1 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})