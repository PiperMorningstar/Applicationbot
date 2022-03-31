const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`)

})

client.on('message', async message => {

    let args = message.content.slice(config.prefix.length).trim().split(/ +/)
    let command = args.shift().toLowerCase()


    let questions = {
        firstQuestion: "What is your Timezone?",
        secondQuestion: "How much free time do you have in your current schedule",
        thirdQuestion: "Why do you participate in the server",
        fourthQuestion: "How old are you ?",
        fifthQuestion: "What made you decide to apply to become a moderator",
        sixthQuestion: "How should a moderator behave in the server?",
        seventhQuestion: "Why do we need you on our moderation team",
        eighthQuestion: "What does a moderator do?",
        ninthQuestion: "What are you like as a person?",
        tenthQuestion: "Are you willing to put aside all personal relationships to avoid bias whilst moderating",
        tenthQuestion: "Without too much detail, suggest an improvement which could be made to the discord server.",
        
        
    }


    if (!message.content.startsWith(config.prefix) || message.author.bot) return
    if (command === "apply") {
        message.channel.send("I have started this process in your DM's. Type `cancel` to cancel")
        message.author.send(questions.firstQuestion).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
                time: 5 * 60000,
                max: 1
            }).then(messages => {
                let msg1 = messages.first().content
                if(msg1.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                message.author.send(questions.secondQuestion).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(messages => {
                        let msg2 = messages.first().content
                        if(msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(questions.thirdQuestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1
                            }).then(messages => {
                                let msg3 = messages.first().content
                                if(msg3.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                message.author.send(questions.fourthQuestion).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(messages => {
                                        let msg4 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                    }).then(messages => {
                                        let msg5 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                    }).then(messages => {
                                        let msg6 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                    }).then(messages => {
                                        let msg7 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1  
                                    }).then(messages => {
                                        let msg8 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                    }).then(messages => {
                                        let msg9 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                    }).then(messages => {
                                        let msg10 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                            }).then(messages => {
                                                let msg11 = messages.first().content
                                                if(msg5.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                                message.author.send("Subbmitted application! ``made by captain motchy``").then(msg => {
                                                    message.client.channels.cache.get(config.applicationChannel).send(
                                                        new Discord.MessageEmbed()
                                                            .setTitle('Application Submitted')
                                                            .setDescription(`This application was submitted by ${message.author.tag} (${message.author.id}).\nCreated: ${message.author.createdAt}`)
                                                            .addField(questions.firstQuestion, "Answer: " + msg1)
                                                            .addField(questions.secondQuestion, "Answer: " + msg2)
                                                            .addField(questions.thirdQuestion, "Answer: " + msg3)
                                                            .addField(questions.fourthQuestion, "Answer: " + msg4)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg5)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg6)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg7)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg8)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg9)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg10)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg11)
                                                    )
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    if(command === "decline"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you dont' have permission to use this command")
        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to decline")
        User.send("Your application to " + message.guild.name + " got declined by: " + message.author.tag)
    }

    if(command === "accept"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you dont' have permission to use this command")
        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to accept")
        User.send(":tada: Your application to " + message.guild.name + " got accepted by: " + message.author.tag)
    }
})

client.login(config.token)
