import { Person } from '~/types'

export interface RootState {
  peoples: Person[];
  name: string;
}
