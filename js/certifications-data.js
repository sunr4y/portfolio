export const CERTIFICATIONS = [
  {
    id: 'c_abapd',
    examCode: 'C_ABAPD',
    nameKey: 'certs.abapd.name',
    descKey: 'certs.abapd.desc',
    chipsKey: 'certs.abapd.chips',
    validityKey: 'certs.abapd.validity',
    credentialUrl: 'https://www.credly.com/badges/0e0c6e91-03d2-4908-966f-93a17f230dbf/public_url',
    icon: 'code-2',
  },
  {
    id: 'c_cpe',
    examCode: 'C_CPE_2601',
    nameKey: 'certs.cpe.name',
    descKey: 'certs.cpe.desc',
    chipsKey: 'certs.cpe.chips',
    validityKey: 'certs.cpe.validity',
    credentialUrl: 'https://www.credly.com/badges/885693c0-b401-48f4-a4c0-a2c790d6d9bc/public_url',
    icon: 'layers',
  },
  {
    id: 'c_aig',
    examCode: 'C_AIG_2604',
    nameKey: 'certs.aig.name',
    descKey: 'certs.aig.desc',
    chipsKey: 'certs.aig.chips',
    validityKey: 'certs.aig.validity',
    credentialUrl: 'https://www.credly.com/badges/a37f1f27-e8bb-42bb-924d-0c5f83593228/public_url',
    icon: 'sparkles',
  },
  {
    id: 'c_cpi',
    examCode: 'C_CPI_2601',
    nameKey: 'certs.cpi.name',
    descKey: 'certs.cpi.desc',
    chipsKey: 'certs.cpi.chips',
    validityKey: 'certs.cpi.validity',
    credentialUrl: 'https://www.credly.com/badges/5c9c3ca7-3c59-4df1-808e-53e6b19e17d9/public_url',
    icon: 'git-branch',
  },
];

export const LEARNING_AREAS = [
  { id: 'abap', titleKey: 'learning.abap.title', itemsKey: 'learning.abap.items' },
  { id: 'btp', titleKey: 'learning.btp.title', itemsKey: 'learning.btp.items' },
  { id: 'cap', titleKey: 'learning.cap.title', itemsKey: 'learning.cap.items' },
  { id: 'integration', titleKey: 'learning.integration.title', itemsKey: 'learning.integration.items' },
];

export const SKILL_GROUPS = [
  { id: 'sapBackend', labelKey: 'skills.groups.sapBackend.label', itemsKey: 'skills.groups.sapBackend.items', sap: true, training: false },
  { id: 'sapBtp', labelKey: 'skills.groups.sapBtp.label', itemsKey: 'skills.groups.sapBtp.items', sap: true, training: false },
  { id: 'foundations', labelKey: 'skills.groups.foundations.label', itemsKey: 'skills.groups.foundations.items', sap: false, training: false },
  { id: 'previous', labelKey: 'skills.groups.previous.label', itemsKey: 'skills.groups.previous.items', sap: false, training: false },
  { id: 'devops', labelKey: 'skills.groups.devops.label', itemsKey: 'skills.groups.devops.items', sap: false, training: false },
];
