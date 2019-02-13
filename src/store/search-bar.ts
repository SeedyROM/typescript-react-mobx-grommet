import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

export class SearchBarStore {
    @observable
    public currentValue: string = '';
}
