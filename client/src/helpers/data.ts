interface Identifiable {
  id: number;
}

type TFindById = <T extends Identifiable>(
  data: T[],
  id: number | undefined
) => T | undefined;

export const findById: TFindById = (data, id) => data.find((d) => d.id === id);
