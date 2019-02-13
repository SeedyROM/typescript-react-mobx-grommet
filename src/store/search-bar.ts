import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

export class SearchBarStore {
    @observable
    public value: string = '';
}
