export class SectionObj {
	id: string;
	name: string;
	element: HTMLDivElement;
	inView: boolean;

	constructor(sectionName: string, element: HTMLDivElement, inView: boolean) {
		this.id = sectionName + new Date().getTime().toLocaleString();
		this.name = sectionName;
		this.element = element;
		this.inView = inView;
	}
}
