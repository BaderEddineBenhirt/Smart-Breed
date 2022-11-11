(window.webpackJsonp = window.webpackJsonp || []).push([
  [150],
  {
    479: function (t, a, e) {
      'use strict';
      e.r(a);
      var s = e(6),
        r = Object(s.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a;
            return e(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                e('h1', { attrs: { id: 'scatter-chart' } }, [
                  e('a', { staticClass: 'header-anchor', attrs: { href: '#scatter-chart' } }, [t._v('#')]),
                  t._v(' Scatter Chart'),
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties. The example below creates a scatter chart with 4 points.'
                  ),
                ]),
                t._v(' '),
                e('chart-editor', {
                  attrs: {
                    code: "// <block:setup:1>\nconst data = {\n  datasets: [{\n    label: 'Scatter Dataset',\n    data: [{\n      x: -10,\n      y: 0\n    }, {\n      x: 0,\n      y: 10\n    }, {\n      x: 10,\n      y: 5\n    }, {\n      x: 0.5,\n      y: 5.5\n    }],\n    backgroundColor: 'rgb(255, 99, 132)'\n  }],\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    scales: {\n      x: {\n        type: 'linear',\n        position: 'bottom'\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n",
                  },
                }),
                e('h2', { attrs: { id: 'dataset-properties' } }, [
                  e('a', { staticClass: 'header-anchor', attrs: { href: '#dataset-properties' } }, [t._v('#')]),
                  t._v(' Dataset Properties'),
                ]),
                t._v(' '),
                e('p', [t._v('Namespaces:')]),
                t._v(' '),
                e('ul', [
                  e('li', [e('code', [t._v('data.datasets[index]')]), t._v(' - options for this dataset only')]),
                  t._v(' '),
                  e('li', [e('code', [t._v('options.datasets.scatter')]), t._v(' - options for all scatter datasets')]),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e('code', [t._v('options.elements.line')]),
                      t._v(' - options for all '),
                      e('RouterLink', { attrs: { to: '/configuration/elements.html#line-configuration' } }, [t._v('line elements')]),
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e('code', [t._v('options.elements.point')]),
                      t._v(' - options for all '),
                      e('RouterLink', { attrs: { to: '/configuration/elements.html#point-configuration' } }, [t._v('point elements')]),
                    ],
                    1
                  ),
                  t._v(' '),
                  e('li', [e('code', [t._v('options')]), t._v(' - options for the whole chart')]),
                ]),
                t._v(' '),
                e(
                  'p',
                  [
                    t._v('The scatter chart supports all of the same properties as the '),
                    e('RouterLink', { attrs: { to: '/charts/line.html#dataset-properties' } }, [t._v('line chart')]),
                    t._v('.\nBy default, the scatter chart will override the showLine property of the line chart to '),
                    e('code', [t._v('false')]),
                    t._v('.'),
                  ],
                  1
                ),
                t._v(' '),
                e('p', [
                  t._v('The index scale is of the type '),
                  e('code', [t._v('linear')]),
                  t._v(
                    '. This means if you are using the labels array the values have to be numbers or parsable to numbers, the same applies to the object format for the keys.'
                  ),
                ]),
                t._v(' '),
                e('h2', { attrs: { id: 'data-structure' } }, [
                  e('a', { staticClass: 'header-anchor', attrs: { href: '#data-structure' } }, [t._v('#')]),
                  t._v(' Data Structure'),
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'Unlike the line chart where data can be supplied in two different formats, the scatter chart only accepts data in a point format.'
                  ),
                ]),
                t._v(' '),
                e('div', { staticClass: 'language-javascript extra-class' }, [
                  e('pre', { pre: !0, attrs: { class: 'language-javascript' } }, [
                    e('code', [
                      e('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('data')]),
                      e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      e('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('x')]),
                      e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n        '),
                      e('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('y')]),
                      e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('20')]),
                      t._v('\n    '),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      e('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('x')]),
                      e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('15')]),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n        '),
                      e('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('y')]),
                      e('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      e('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                      t._v('\n    '),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      e('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                      t._v('\n'),
                    ]),
                  ]),
                ]),
                e('h2', { attrs: { id: 'internal-data-format' } }, [
                  e('a', { staticClass: 'header-anchor', attrs: { href: '#internal-data-format' } }, [t._v('#')]),
                  t._v(' Internal data format'),
                ]),
                t._v(' '),
                e('p', [e('code', [t._v('{x, y}')])]),
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
      a.default = r.exports;
    },
  },
]);
