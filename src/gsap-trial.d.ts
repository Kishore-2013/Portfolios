declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars: any);
    chars: any[];
    lines: any[];
    words: any[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    paused(value: boolean): void;
    scrollTop(value?: number): number | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}

declare module 'gsap-trial/ScrollTrigger' {
  export const ScrollTrigger: any;
}

declare module 'gsap-trial/DrawSVGPlugin' {
  export const DrawSVGPlugin: any;
}
