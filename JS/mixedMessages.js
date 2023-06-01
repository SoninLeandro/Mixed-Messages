const messageFactory = {
    whoArr: ['Your brother', 'Michael Jackson', 'A stranger', 'Leo Messi', 'Bin Laden', "Your friend's mom", 'A Tesco employee'],
    whatArr: ['buy you a boat', 'make you a cake', 'build a spaceship', 'steal your jewlery', 'hack your bank account', 'perform leg surgery to you','get you a cat'],
    howArr: ['on your birthday', 'tomorrow', 'on your last day', 'while you are sleeping', 'with Batman', 'on a motorbike', 'on the New Moon'],
    mishitoMessArr: ["You're welcome", "I know it", "You own me £40", "This is 100% real", "A witch told me", "Cats know this stuff"]
}

function mixedMessages () {
    let who = messageFactory.whoArr[Math.floor(Math.random() * messageFactory.whoArr.length)]
    let what = messageFactory.whatArr[Math.floor(Math.random() *messageFactory.whatArr.length)]
    let how = messageFactory.howArr[Math.floor(Math.random() * messageFactory.howArr.length)]
    let mishitoMessage = messageFactory.mishitoMessArr[Math.floor(Math.random() * messageFactory.mishitoMessArr.length)]

    let randomMessage = `Mishito Meme says: ${who} will ${what}, ${how}. ${mishitoMessage}.`

    console.log(randomMessage);
}

