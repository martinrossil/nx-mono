import { testObservable } from './Model';

export default class Box2 extends HTMLElement {
	public constructor() {
		super();
		testObservable.add(value => console.log(value));
	}
}
customElements.define('box-two', Box2);
