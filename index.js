// creates element that extends HTMLElement
class DisplayText extends HTMLElement {
    // initialises the element
    constructor() {
        super();
        this.name;
        this.age;
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes(){
        return ['name', 'age'];
    }
    // lifecycle method called when the element is added to the DOM
    connectedCallback(){
        this.render();
    }
    // lifecycle method called when the element is removed from the DOM
    disconnectedCallback(){}

    // lifecycle method called when the element is adopted by another document
    attributeChangedCallback(attrName, oldVal, newVal){
        switch(attrName){
            case 'name':
                this.name = newVal;
                break;
            case 'age':
                this.age = newVal;
                break;
                default:
                    return;
        }
    }

    // method to render the element | can have any name
    render(){
        this.shadowRoot.innerHTML = `
        <div>My name is ${this.name} and I am ${this.age} years young!🔥</div>
    `
    }
}

customElements.define('display-text', DisplayText);