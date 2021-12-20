const states = [
  {
    id: "N",
    name: "Neuf",
    description:
      "L’ouvrage est tel qu’à l’achat : couverture propre et brillante, coins carrés sans pliures. L’ouvrage ne présente pas de traces ou de défauts que ce soit à l'intérieur comme à l'extérieur. Les seuls défauts autorisés sont les erreurs qui peuvent survenir lors de la fabrication.",
  },
  {
    id: "E",
    name: "Excellent état",
    description:
      "L’ouvrage a toutes les caractéristiques d'un état Neuf, mais présente un petit défaut mineur comme une légère pliure.",
  },
  {
    id: "TB",
    name: "Très bon état",
    description:
      "L’ouvrage est quasiment dans un état neuf mais présenter plusieurs défauts mineurs.",
  },
  {
    id: "B",
    name: "Bon état",
    description:
      "Le livre possède quelques usures, mais l'exemplaire reste globalement en bon état : couverture encore brillante, coins carrés (avec éventuellement légère pliure ou légèrement émoussés), pliure de lecture, trace de frottement, minuscules déchirures.",
  },
  {
    id: "M",
    name: "Moyen",
    description:
      "Défauts évidents sur le livre : présence de pliures, frottements, mais l’exemplaire est complet et en état correct.",
  },
  {
    id: "A",
    name: "Abîmé",
    description:
      "Défauts multiples, quelques traces d'écritures, ou de restauration amateurs (scotch, colle). Exemplaire cependant complet pouvant être une copie de lecture.",
  },
  {
    id: "NC",
    name: "Non collectionnable",
    description:
      "Exemplaire incomplet, défauts majeurs : grosses salissures, écritures multiples, coloriages, dessins, dégât du à une cause naturelle, …",
  },
];

export default states;
