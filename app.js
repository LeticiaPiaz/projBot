// importando blibio telegraf
const Telegraf = require('telegraf');

const bot = new Telegraf.Telegraf('2044512220:AAHGnwZ6skD6CeNKgfmeduoFPVmzHm3n-Uk');

bot.command('start',ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(
        ctx.chat.id,
        'Olá, tudo bem?',
        {}
    )
});


// utilizand teclado inline
bot.hears('universo', ctx => {
    console.log(ctx.from)
    let imagensMessage=`Qual imagem de universo você quer ver?`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(
        ctx.chat.id,
        imagensMessage,
        {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text:"universo1",
                            callback_data:'universo1'
                        },
                        {
                            text:"universo2",
                            callback_data:'universo2'
                        },
                        {
                            text:"universo3",
                            callback_data:'universo3'
                        }
                    ]
                ]
            }
        }
    )
});

bot.action('universo1', ctx => {
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/universo4.jpg"
        }
    )
});
bot.action('universo2', ctx => {
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/universo13.jpg"
        }
    )
});
bot.action('universo3', ctx => {
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/universo15.jpg"
        }
    )
});

bot.hears('paisagem', ctx => {
    console.log(ctx.from)
    let imagensMessage=`Qual imagem de paisagem você quer ver?`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(
        ctx.chat.id,
        imagensMessage,
        {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text:"paisagem1",
                            callback_data:'paisagem1'
                        },
                        {
                            text:"paisagem2",
                            callback_data:'paisagem2'
                        },
                        {
                            text:"paisagem3",
                            callback_data:'paisagem3'
                        }
                    ]
                ]
            }
        }
    )
});

bot.action('paisagem1', ctx => {
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/Montanha Naranjo de Bulnes no Parque Nacional Picos de Europa, Espanha.jpg"
        }
    )
});
bot.action('paisagem2', ctx => {
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/Lago Matheson refletindo os Alpes do sul na Nova Zelândia.jpg"
        }
    )
});
bot.action('paisagem3', ctx => {
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/Bisão-americano no Parque Nacional de Yellowstone, Wyoming, EUA.jpg"
        }
    )
});

//requisitando número de celular
bot.hears('phone', ctx => {
    console.log(ctx.from.first_name);
    bot.telegram.sendMessage(
        ctx.chat.id,
        'Podemos acessar o seu número de telefone?',
        requestPhoneKeyboard
    )
});

bot.hears('location', ctx => {
    console.log(ctx.from.first_name);
    bot.telegram.sendMessage(
        ctx.chat.id,
        'Podemos acessar o sua localização?',
        requestLocationKeyboard //atributo
    )
});

// "metodos" dos atributos acima
const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [
                {
                    text: "Meu número de telefone",
                    request_contact: true,
                    one_time_keyboard: true
                }
            ],
            ["Cancel"]
        ]
    }
};
const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [
                {
                    text: "Minha localização",
                    request_location: true,
                    one_time_keyboard: true
                }
            ],
            ["Cancel"]
        ]
    }
};


// executando o bot
bot.launch()