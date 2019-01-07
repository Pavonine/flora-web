import Item from './item.interface';
import { MutationTree } from 'vuex';
type ItemsMutationType = (state: State, payload: Item) => Item[];

export interface State {
  items: Item[];
}

export interface Mutations extends MutationTree<State> {
  editItem: ItemsMutationType;
  newItem: ItemsMutationType;
  removeItem: ItemsMutationType;
  toggleItem: ItemsMutationType;
}
