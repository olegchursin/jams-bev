import cocktails from '../content/active_cocktails.json';

export interface Filter {
  readonly id: string;
  readonly key: string;
  readonly label: string;
}

const baseSpirits = new Set(
  cocktails.map(cocktail => cocktail.baseSpirit).flat()
);

const baseFilter: Filter = {
  id: '',
  key: '',
  label: 'All'
};

export const filters: Filter[] = [
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
