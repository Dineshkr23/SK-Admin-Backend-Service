/**
 * Map legacy/selected `pi_profession` values to the new indexed `formType`.
 *
 * Backend list filter should remain fast by filtering on `FormSubmission.formType`
 * instead of `pi_profession` substring/multi-value matching.
 */
const PROFESSION_TO_FORM_TYPE: Record<string, string> = {
  Mason: 'masonBarBender',
  BarBender: 'masonBarBender',

  Architect: 'architectEngineer',
  Engineer: 'architectEngineer',

  Commercial: 'commercial',
  Individual: 'individual',

  Proprietor: 'dealer',
  Partner: 'dealer',
  LLP: 'dealer',
  'Pvt Ltd': 'dealer',
};

function normalizeProfession(p: string): string {
  return p
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

export function resolveProfessionTypes(professionTypes: string[]): string[] {
  if (!professionTypes?.length) return [];

  const formTypes = new Set<string>();
  for (const raw of professionTypes) {
    const p = normalizeProfession(raw);
    if (!p) continue;

    // Normalize mapping keys too (we keep keys in the original casing).
    // eslint-disable-next-line no-prototype-builtins
    const mapped = Object.keys(PROFESSION_TO_FORM_TYPE).find(
      (k) => normalizeProfession(k) === p,
    );
    if (mapped) formTypes.add(PROFESSION_TO_FORM_TYPE[mapped]);
    else {
      // Allow direct formType pass-through if frontend starts sending it.
      if (p === 'masonbarbender') formTypes.add('masonBarBender');
      else if (p === 'architectengineer') formTypes.add('architectEngineer');
      else if (p === 'commercial') formTypes.add('commercial');
      else if (p === 'individual') formTypes.add('individual');
      else if (p === 'dealer') formTypes.add('dealer');
    }
  }

  return Array.from(formTypes);
}
