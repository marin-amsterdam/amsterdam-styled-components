"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardFill = {
    name: 'card',
    theme: 'fill',
    icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 32 32' },
        children: [
            { tag: 'path', attrs: { d: 'M34 30H2V6h32zM6 26h24V10H6z' } },
            { tag: 'circle', attrs: { cx: '12.8', cy: '15.21', r: '3.21' } },
            {
                tag: 'path',
                attrs: {
                    d: 'M15.6 19.2H10a2 2 0 0 0-2 2V24h9.6v-2.8a2 2 0 0 0-2-2zM28 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z'
                }
            }
        ]
    }
};
exports.default = CardFill;
