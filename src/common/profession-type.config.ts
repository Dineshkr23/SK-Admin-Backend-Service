/**
 * Profession type → list of pi_profession values for list filter.
 * One filter selection can match multiple profession values.
 */
export const PROFESSION_TYPE_MAP: Record<string, string[]> = {
  Mason: ['BarBender', 'Mason'],
  Engineer: ['Architect', 'Engineer'],
  Proprietor: ['Partner', 'Proprietor'],
  // Add more groups and single professions as needed, e.g.:
  // Carpenter: ['Carpenter'],
  // Plumber: ['Plumber'],
};

export function resolveProfessionTypes(professionTypes: string[]): string[] {
  if (!professionTypes?.length) return [];
  const set = new Set<string>();
  for (const type of professionTypes) {
    const values = PROFESSION_TYPE_MAP[type];
    if (values) values.forEach((v) => set.add(v));
    else set.add(type); // single profession
  }
  return Array.from(set);
}
