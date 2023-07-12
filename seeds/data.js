// unfortunately, I probably won't be able to use this file

const usernames = [
    'Aaran',
    'Aaren',
    'RizzQueen',
    'Aarman',
    'Kirsche',
    'ELIHaveEthInMyTwitterHandle',
    'Aarron',
    'Walker',
    'TexasRanger',
    'DoctorQuinn',
    'MedicineWoman',
    'ShakeNBake',
    'Abdisalam',
    'RCColaEvangelist',
    'Abdulbasir',
    'HomeschoolMama',
    'ITeachMyKidsAboutTheFlatEarth',
    'OlSmithy',
    'BonesJones',
    'Taylor',
    'ChocolateErasuer',
    'CrayCrayCrayfish',
    'MuricaLuvr',
    'ZenLoss',
    'CanadaIsntReal',
    'Zhen',
    'Zhuo',
    'KnightWhoSaysNi',
    'ZidaneTribal',
    'ZionistConspiracist',
    'Zishan',
    'FluorideIsMindControl',
    'Zohair',
    'StoneCold316',
    'CerealExperimentsLain',
    'Xander',
    'Jarvis',
    'Trevor',
    'AlexQuebec',
    'ShorkLuvr69',
    'Tamar',
    'Farish',
    'GothBecky',
    'NormieCore',
    'Parker',
  ];


const getRandomUser = () => {
    return usernames[Math.floor(Math.random() * usernames.length)];
}


module.exports = { getRandomUser };
