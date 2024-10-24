export const wildShapes = [
  {
    name: 'Águila gigante',
    size: 'Grande',
    alignment: 'Neutral bueno',
    imageUrl: 'https://i.pinimg.com/736x/7e/24/14/7e2414f50c8d41dabcfced2de23afe6c.jpg',
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
    speed: '10 pies, 8 pies volando',
    senses: 'Percepción pasiva 14',
    skills: 'Percepción +4',
    feats: [
      {
        name: 'Vista agudizada',
        description: 'El águila tiene ventaja en las tiradas de Sabiduría (Percepción) que se basen en la vista.',
      },
    ],
    actions: [
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
  {
    name: 'Águila',
    size: 'Pequeño',
    alignment: 'No alineado',
    imageUrl: 'https://www.dndbeyond.com/avatars/thumbnails/30849/292/1000/1000/638064498871776868.png',
    challengeRating: '0',
    stats: [
      { label: 'FUE', value: 6 },
      { label: 'DES', value: 15 },
      { label: 'CON', value: 10 },
      { label: 'INT', value: 2 },
      { label: 'SAB', value: 14 },
      { label: 'CAR', value: 7 },
    ],
    armorClass: 12,
    hitPoints: '3 (1d6)',
    speed: '10 pies, 60 pies volando',
    skills: 'Percepción +4',
    senses: 'Percepción pasiva 14',
    feats: [
      {
        name: 'Vista agudizada',
        description: 'El águila tiene ventaja en las tiradas de Sabiduría (Percepción) que se basen en la vista.',
      },
    ],
    actions: [
      {
        name: 'Garras',
        description:
          'Ataque cuerpo a cuerpo con arma: +4 al ataque, alcance 5 pies, un objetivo. Impacto: 10 (1d4+2) puntos de daño cortante.',
      },
    ],
  },
  {
    name: 'Alce',
    size: 'Grande',
    alignment: 'No alineado',
    imageUrl: 'https://i.imgur.com/tNht6VF.png',
    challengeRating: '1/4',
    stats: [
      { label: 'FUE', value: 16 },
      { label: 'DES', value: 10 },
      { label: 'CON', value: 12 },
      { label: 'INT', value: 2 },
      { label: 'SAB', value: 10 },
      { label: 'CAR', value: 6 },
    ],
    armorClass: 10,
    hitPoints: '13 (2d10+2)',
    speed: '50 pies',
    skills: '',
    senses: 'Percepción pasiva 10',
    feats: [
      {
        name: 'Carga',
        description:
          'Si el alce se mueve al menos 20 pies en línea recta hacia un objetivo y le impacta con un ataque de embestir en el mismo turno, el objetivo recibe 7 (2d6) puntos de daño adicional. Si el objetivo es una criatura, debe superar una tirada de salvación de Fuerza CD 13 para no quedar tumbado.',
      },
    ],
    actions: [
      {
        name: 'Embestir',
        description:
          'Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) puntos de daño contundente.',
      },
      {
        name: 'Pezuñas',
        description:
          'Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, una criatura tumbada. Impacto: 8 (2d4+3) puntos de daño contundente.',
      },
    ],
  },

  {
    name: 'Alce gigante',
    size: 'Enorme',
    alignment: 'No alineado',
    imageUrl: 'https://i.imgur.com/tNht6VF.png',
    challengeRating: '2',
    stats: [
      { label: 'FUE', value: 19 },
      { label: 'DES', value: 16 },
      { label: 'CON', value: 14 },
      { label: 'INT', value: 7 },
      { label: 'SAB', value: 14 },
      { label: 'CAR', value: 10 },
    ],
    armorClass: 14,
    hitPoints: '42 (5d12+10)',
    speed: '60 pies',
    skills: 'Percepción +4',
    senses: 'Percepción pasiva 14',
    feats: [
      {
        name: 'Carga',
        description:
          'Si el alce se mueve al menos 20 pies en línea recta hacia un objetivo y le impacta con un ataque de embestir en el mismo turno, el objetivo recibe 7 (2d6) puntos de daño adicional. Si el objetivo es una criatura, debe superar una tirada de salvación de Fuerza CD 14 para no quedar tumbado.',
      },
    ],
    actions: [
      {
        name: 'Embestir',
        description:
          'Ataque de arma cuerpo a cuerpo: +6 al ataque, alcance 10 pies, un objetivo. Impacto: 11 (2d6+4) puntos de daño contundente.',
      },
      {
        name: 'Pezuñas',
        description:
          'Ataque de arma cuerpo a cuerpo: +6 al ataque, alcance 5 pies, una criatura tumbada. Impacto: 22 (4d8+4) puntos de daño contundente.',
      },
    ],
  },
  {
    name: 'Alosaurio',
    size: 'Grande',
    alignment: 'No alineado',
    imageUrl: 'https://static.wikia.nocookie.net/forgottenrealms/images/d/d6/Ambush_drake_HotDQ.png',
    challengeRating: '2',
    stats: [
      { label: 'FUE', value: 19 },
      { label: 'DES', value: 13 },
      { label: 'CON', value: 17 },
      { label: 'INT', value: 2 },
      { label: 'SAB', value: 12 },
      { label: 'CAR', value: 5 },
    ],
    armorClass: 13,
    hitPoints: '51 (6d10+18)',
    speed: '60 pies',
    skills: 'Percepción +5',
    senses: 'Percepción pasiva 15',
    feats: [
      {
        name: 'Abalanzarse',
        description:
          'Si el alosaurio se mueve al menos 30 pies en línea recta hacia una criatura y después la impacta con su ataque de garra durante el mismo turno, el objetivo deberá superar una tirada de salvación de Fuerza CD 13 o será derribado. Si el objetivo está derribado, el alosaurio puede usar una acción adicional para hacer un ataque de mordisco contra él.',
      },
    ],
    actions: [
      {
        name: 'Mordisco',
        description:
          'Ataque con arma cuerpo a cuerpo: +6 a impactar, alcance 5 pies, un objetivo. Impacto: 15 (2d10+4) de daño perforante.',
      },
      {
        name: 'Garra',
        description:
          'Ataque con arma cuerpo a cuerpo: +6 a impactar, alcance 5 pies, un objetivo. Impacto: 8 (1d8+4) de daño cortante.',
      },
    ],
  },

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
    actions: [
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
    actions: [
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
];
