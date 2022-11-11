(window.webpackJsonp = window.webpackJsonp || []).push([
  [218],
  {
    548: function (t, n, e) {
      'use strict';
      e.r(n);
      var s = e(6),
        i = Object(s.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                e('h1', { attrs: { id: 'line-segment-styling' } }, [
                  e('a', { staticClass: 'header-anchor', attrs: { href: '#line-segment-styling' } }, [t._v('#')]),
                  t._v(' Line Segment Styling'),
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    "Using helper functions to style each segment. Gaps in the data ('skipped') are set to dashed lines and segments with values going 'down' are set to a different color."
                  ),
                ]),
                t._v(' '),
                e('chart-editor', {
                  attrs: {
                    code: "\n// <block:segmentUtils:1>\nconst skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;\nconst down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;\n// </block:segmentUtils>\n\n// <block:genericOptions:2>\nconst genericOptions = {\n  fill: false,\n  interaction: {\n    intersect: false\n  },\n  radius: 0,\n};\n// </block:genericOptions>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: {\n    labels: Utils.months({count: 7}),\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, NaN, 48, 56, 57, 40],\n      borderColor: 'rgb(75, 192, 192)',\n      segment: {\n        borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),\n        borderDash: ctx => skipped(ctx, [6, 6]),\n      },\n      spanGaps: true\n    }]\n  },\n  options: genericOptions\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n",
                  },
                }),
                e('h2', { attrs: { id: 'docs' } }, [
                  e('a', { staticClass: 'header-anchor', attrs: { href: '#docs' } }, [t._v('#')]),
                  t._v(' Docs'),
                ]),
                t._v(' '),
                e('ul', [
                  e(
                    'li',
                    [
                      e('RouterLink', { attrs: { to: '/general/data-structures.html' } }, [
                        t._v('Data structures ('),
                        e('code', [t._v('labels')]),
                        t._v(')'),
                      ]),
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e('RouterLink', { attrs: { to: '/charts/line.html' } }, [t._v('Line')]),
                      t._v(' '),
                      e('ul', [
                        e('li', [e('RouterLink', { attrs: { to: '/charts/line.html#line-styling' } }, [t._v('Line Styling')])], 1),
                        t._v(' '),
                        e('li', [e('RouterLink', { attrs: { to: '/charts/line.html#segment' } }, [t._v('Segment')])], 1),
                      ]),
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e('RouterLink', { attrs: { to: '/general/options.html' } }, [t._v('Options')]),
                      t._v(' '),
                      e('ul', [
                        e(
                          'li',
                          [e('RouterLink', { attrs: { to: '/general/options.html#scriptable-options' } }, [t._v('Scriptable Options')])],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = i.exports;
    },
  },
]);
