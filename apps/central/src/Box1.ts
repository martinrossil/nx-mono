import { testObservable } from './Model';

export default class Box1 extends HTMLElement {
	public constructor() {
		super();
		testObservable.add(value => console.log(value));
	}
}
customElements.define('box-one', Box1);
