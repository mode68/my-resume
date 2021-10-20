class SectionObj {
    id: string;
    name: string;
    element: HTMLDivElement;

    constructor(sectionName: string, element: HTMLDivElement) {
        this.id = sectionName + new Date().getTime().toLocaleString();
        this.name = sectionName;
        this.element = element;
    }
}

export default SectionObj;