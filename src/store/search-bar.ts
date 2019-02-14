import { action, observable } from 'mobx';

export class SearchBarStore {
    @observable
    public value: string = '';
}
