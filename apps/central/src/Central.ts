import { Application } from '@bd/core';
import { ColorBlock, LayoutContainer } from '@bd/material';

export default class Central extends Application {
	public constructor() {
		super();
		const layoutContainer = new LayoutContainer();
		layoutContainer.appendChild(new ColorBlock());
		layoutContainer.appendChild(new ColorBlock());
		layoutContainer.appendChild(new ColorBlock());
		this.appendChild(layoutContainer);
	}
}
customElements.define('central-app', Central);
