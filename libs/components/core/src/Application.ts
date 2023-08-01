import Component from './Component';

export default abstract class Application extends Component {
	public constructor() {
		super();
		this.style.display = 'flex';
		this.style.alignItems = 'center';
		this.style.justifyContent = 'center';
		this.style.minHeight = '100%';
	}
}
