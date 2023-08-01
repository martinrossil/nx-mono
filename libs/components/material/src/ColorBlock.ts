import { Component } from '@bd/core';

export default class ColorBlock extends Component {
	public constructor() {
		super();
		this.style.width = '200px';
		this.style.height = '200px';
		this.style.background = 'var(--background-color-block, black)';
	}
}
customElements.define('color-block', ColorBlock);
