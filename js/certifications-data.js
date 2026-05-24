export const CERTIFICATIONS = [
  {
    id: 'c_abapd',
    examCode: 'C_ABAPD',
    nameKey: 'certs.abapd.name',
    descKey: 'certs.abapd.desc',
    chipsKey: 'certs.abapd.chips',
    icon: 'code-2',
  },
  {
    id: 'c_cpe',
    examCode: 'C_CPE',
    nameKey: 'certs.cpe.name',
    descKey: 'certs.cpe.desc',
    chipsKey: 'certs.cpe.chips',
    icon: 'layers',
  },
  {
    id: 'c_cpi',
    examCode: 'C_CPI',
    nameKey: 'certs.cpi.name',
    descKey: 'certs.cpi.desc',
    chipsKey: 'certs.cpi.chips',
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
  { id: 'sapBackend', labelKey: 'skills.groups.sapBackend.label', itemsKey: 'skills.groups.sapBackend.items', sap: true, training: true },
  { id: 'sapBtp', labelKey: 'skills.groups.sapBtp.label', itemsKey: 'skills.groups.sapBtp.items', sap: true, training: true },
  { id: 'foundations', labelKey: 'skills.groups.foundations.label', itemsKey: 'skills.groups.foundations.items', sap: false, training: false },
  { id: 'previous', labelKey: 'skills.groups.previous.label', itemsKey: 'skills.groups.previous.items', sap: false, training: false },
  { id: 'devops', labelKey: 'skills.groups.devops.label', itemsKey: 'skills.groups.devops.items', sap: false, training: false },
];
