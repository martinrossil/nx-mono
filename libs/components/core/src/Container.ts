import Component from './Component';

export default abstract class Container extends Component {
	public constructor() {
		super();
		this.style.display = 'inline-flex';
		this.style.gap = '24px';
		this.style.padding = '32px';
	}
}
