import {html, LitElement} from "lit-element";

class LitCheckbox extends LitElement {
    static get properties() {
        return {
            checked: {type: Boolean, reflect: true},
        };
    }

    render() {
        //language=HTML
        return html`
            <input class="lit-checkbox__native" type="checkbox">
            <div class="lit-checkbox__background">
                <svg class="lit-checkbox__checkmark" viewBox="0 0 24 24">
                    <path class="lit-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
                <div class="lit-checkbox__mixedmark"></div>
            </div>
        `
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.native = this.firstElementChild
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }

    // no ShadowDOM
    createRenderRoot() {
        return this
    }
}

customElements.define('lit-checkbox', LitCheckbox);
