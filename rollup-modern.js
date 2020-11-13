/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import alias from "@rollup/plugin-alias";

const filesizeConfig = {
    showGzippedSize: true,
    showBrotliSize: false,
    showMinifiedSize: false,
};

const copyConfig = {
    targets: [
        { src: 'images', dest: 'public' },
        { src: 'styles', dest: 'public' },
        { src: 'index.html', dest: 'public', rename: 'index.html' },
    ],
};

const config = {
    input: 'src/components/app-root.js',
    output: {
        dir: 'public/src/components',
        format: 'es',
    },
    plugins: [
        alias({
            entries: [{
                find: 'lit-html/lib/shady-render.js',
                replacement: 'node_modules/lit-html/lit-html.js'
            }]
        }),
        minifyHTML(),
        copy(copyConfig),
        resolve(),
        filesize(filesizeConfig)
    ],
    preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;
