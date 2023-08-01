import { Container } from '@bd/core';

export default class LayoutContainer extends Container {
	public constructor() {
		super();
		this.style.background = 'lightgray';
	}
}
customElements.define('layout-container', LayoutContainer);
