import {html, LitElement} from "lit-element";

class LitCheckbox extends LitElement {

    render() {
        //language=HTML
        return html`
            <input class="lit-checkbox__native" type="checkbox">
        `
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
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
