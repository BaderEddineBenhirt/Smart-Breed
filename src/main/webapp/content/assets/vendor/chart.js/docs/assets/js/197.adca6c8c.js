(window.webpackJsonp = window.webpackJsonp || []).push([
  [197],
  {
    527: function (n, t, a) {
      'use strict';
      a.r(t);
      var e = a(6),
        s = Object(e.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t;
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'line-chart-boundaries' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#line-chart-boundaries' } }, [n._v('#')]),
                  n._v(' Line Chart Boundaries'),
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:setup:2>\nconst inputs = {\n  min: -100,\n  max: 100,\n  count: 8,\n  decimals: 2,\n  continuity: 1\n};\n\nconst generateLabels = () => {\n  return Utils.months({count: inputs.count});\n};\n\nconst generateData = () => (Utils.numbers(inputs));\n// </block:setup>\n\n// <block:data:0>\nconst data = {\n  labels: generateLabels(),\n  datasets: [\n    {\n      label: 'Dataset',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),\n      fill: false\n    }\n  ]\n};\n// </block:data>\n\n// <block:actions:3>\nlet smooth = false;\n\nconst actions = [\n  {\n    name: 'Fill: false (default)',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.fill = false;\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Fill: origin',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.fill = 'origin';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Fill: start',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.fill = 'start';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Fill: end',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.fill = 'end';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Smooth',\n    handler(chart) {\n      smooth = !smooth;\n      chart.options.elements.line.tension = smooth ? 0.4 : 0;\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:1>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      filler: {\n        propagate: false,\n      },\n      title: {\n        display: true,\n        text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill\n      }\n    },\n    interaction: {\n      intersect: false,\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n",
                  },
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#docs' } }, [n._v('#')]),
                  n._v(' Docs'),
                ]),
                n._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/area.html' } }, [n._v('Area')]),
                      n._v(' '),
                      a('ul', [
                        a('li', [
                          a('a', { attrs: { href: '../../charts/area.htmll#filling-modes' } }, [n._v('Filling modes')]),
                          n._v(' '),
                          a('ul', [
                            a('li', [
                              n._v('Boundary: '),
                              a('code', [n._v("'start'")]),
                              n._v(', '),
                              a('code', [n._v("'end'")]),
                              n._v(', '),
                              a('code', [n._v("'origin'")]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  n._v(' '),
                  a('li', [a('RouterLink', { attrs: { to: '/charts/line.html' } }, [n._v('Line')])], 1),
                  n._v(' '),
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/general/data-structures.html' } }, [
                        n._v('Data structures ('),
                        a('code', [n._v('labels')]),
                        n._v(')'),
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
      t.default = s.exports;
    },
  },
]);
