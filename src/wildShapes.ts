export const wildShapes = [
  {
    name: 'Lobo',
    size: 'Mediano',
    alignment: 'No alineado',
    challengeRating: '1/4',
    stats: [
      { label: 'FUE', value: 12 },
      { label: 'DES', value: 15 },
      { label: 'CON', value: 12 },
      { label: 'INT', value: 3 },
      { label: 'SAB', value: 12 },
      { label: 'CAR', value: 6 },
    ],
    armorClass: 13,
    hitPoints: '11 (2d8 + 2)',
    speed: '40 pies',
    senses: 'Percepción pasiva 13',
    skills: 'Percepción +3, Sigilo +4',
    imageUrl: 'https://www.dndbeyond.com/avatars/thumbnails/16/482/1000/1000/636376300223855327.jpeg',
    feats: [
      {
        name: 'Tácticas de manada',
        description:
          'El lobo tiene ventaja en una tirada de ataque contra una criatura si al menos uno de los aliados del lobo está a 5 pies de la criatura y no está incapacitado.',
      },
    ],
    abilities: [
      {
        name: 'Mordisco',
        description:
          'Ataque cuerpo a cuerpo con arma: +4 al ataque, alcance 5 pies, un objetivo. Impacto: 7 (2d4 + 2) puntos de daño perforante. Si el objetivo es una criatura, debe superar una tirada de salvación de Fuerza CD 11 o quedar derribado.',
      },
    ],
  },
  {
    name: 'Oso pardo',
    size: 'Grande',
    alignment: 'No alineado',
    imageUrl: 'https://www.dndbeyond.com/avatars/thumbnails/43939/60/1000/1000/638607413478213174.png',
    challengeRating: '1',
    stats: [
      { label: 'FUE', value: 19 },
      { label: 'DES', value: 10 },
      { label: 'CON', value: 16 },
      { label: 'INT', value: 2 },
      { label: 'SAB', value: 13 },
      { label: 'CAR', value: 7 },
    ],
    armorClass: 11,
    hitPoints: '34 (4d10 + 12)',
    speed: '40 pies, escalar 30 pies',
    senses: 'Percepción pasiva 13',
    skills: 'Percepción +3',
    feats: [],
    abilities: [
      {
        name: 'Multiataque',
        description: 'El oso realiza dos ataques: uno con sus garras y otro con su mordisco.',
      },
      {
        name: 'Mordisco',
        description:
          'Ataque cuerpo a cuerpo con arma: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 8 (1d8 + 4) puntos de daño perforante.',
      },
      {
        name: 'Garras',
        description:
          'Ataque cuerpo a cuerpo con arma: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 11 (2d6 + 4) puntos de daño cortante.',
      },
    ],
  },
  {
    name: 'Águila gigante',
    size: 'Grande',
    alignment: 'Neutral bueno',
    imageUrl: 'https://www.dndbeyond.com/avatars/thumbnails/30849/296/1000/1000/638064498953526929.png',
    challengeRating: '1',
    stats: [
      { label: 'FUE', value: 16 },
      { label: 'DES', value: 17 },
      { label: 'CON', value: 13 },
      { label: 'INT', value: 8 },
      { label: 'SAB', value: 14 },
      { label: 'CAR', value: 10 },
    ],
    armorClass: 13,
    hitPoints: '26 (4d10 + 4)',
    speed: '10 pies, volar 80 pies',
    senses: 'Percepción pasiva 14',
    skills: 'Percepción +4',
    feats: [],
    abilities: [
      {
        name: 'Multiataque',
        description: 'El águila realiza dos ataques: uno con su pico y otro con sus garras.',
      },
      {
        name: 'Pico',
        description:
          'Ataque cuerpo a cuerpo con arma: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 6 (1d6 + 3) puntos de daño perforante.',
      },
      {
        name: 'Garras',
        description:
          'Ataque cuerpo a cuerpo con arma: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 10 (2d6 + 3) puntos de daño cortante.',
      },
    ],
  },
];
