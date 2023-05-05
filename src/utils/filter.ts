import cocktails from '../content/cocktails.json';

interface Filter {
  readonly id: string;
  readonly key: string;
  readonly label: string;
}

const baseSpirits = new Set(
  cocktails.map(cocktail => cocktail.baseSpirit).flat()
);

const baseFilter = {
  id: '',
  key: '',
  label: 'All'
};

export const filters = [
  baseFilter,
  ...Array.from(baseSpirits).map(spirit => {
    const spiritName = spirit.toLowerCase();
    return {
      id: spiritName,
      key: spiritName,
      label: spiritName.toUpperCase()
    };
  })
];
