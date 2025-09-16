export const FieldNames = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
} as const;

export type IFormInputs = {
  [keys in keyof typeof FieldNames]: string;
};
