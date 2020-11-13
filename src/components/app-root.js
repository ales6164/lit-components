import {html, LitElement} from "lit-element";
import {setPassiveTouchGestures} from '@polymer/polymer/lib/utils/settings.js';

import "./lit-checkbox"

class AppRoot extends LitElement {
    constructor() {
        super()
        setPassiveTouchGestures(true)
    }

    render() {
        //language=HTML
        return html`
            <h1>lit-components</h1>
            <h2>lit-checkbox</h2>
            <label>
                <lit-checkbox class="lit-checkbox"></lit-checkbox> Checkbox
            </label>
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

customElements.define('app-root', AppRoot);
