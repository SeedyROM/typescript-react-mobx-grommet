import { action, observable } from 'mobx';
import { SearchBarStore } from './search-bar';

export class ApplicationStore {
    public searchBarStore: SearchBarStore = new SearchBarStore();
}

export default new ApplicationStore();
