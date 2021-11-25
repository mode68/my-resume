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

export interface AnimationContainerType {
	scale?: boolean;
	slideInFromLeft?: boolean;
	staggerChildren?: number;
	delayOrder?: number;
	duration?: number;
	easing?: number[]

    // delayOrder = order of appearance
    // easing[number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
    // constructor (childStyle: string, scale: number, slideInFromLeft: boolean, staggerChildren: number = 0, delayOrder: number, duration: number = 0.4, easing: number[] = [0.42, 0, 0.58, 1]) {
    //     this.childStyle = childStyle;
    //     this.scale = scale;
    //     this.slideInFromLeft = slideInFromLeft;
    //     this.staggerChildren = staggerChildren;
    //     this.delayOrder = delayOrder;
    //     this.duration = duration;
    //     this.easing = easing;
    // }
}