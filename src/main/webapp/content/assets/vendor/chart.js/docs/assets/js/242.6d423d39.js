(window.webpackJsonp = window.webpackJsonp || []).push([
  [242],
  {
    572: function (t, n, a) {
      'use strict';
      a.r(n);
      var e = a(6),
        s = Object(e.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              a = t._self._c || n;
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'linear-scale-step-size' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#linear-scale-step-size' } }, [t._v('#')]),
                  t._v(' Linear Scale - Step Size'),
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const data = chart.data;\n      const dsColor = Utils.namedColor(chart.data.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (data.datasets.length + 1),\n        backgroundColor: dsColor,\n        borderColor: dsColor,\n        data: Utils.numbers({count: data.labels.length, min: 0, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels = Utils.months({count: data.labels.length + 1});\n\n        for (let index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(0, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.CHART_COLORS.blue,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      tooltip: {\n        mode: 'index',\n        intersect: false\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart'\n      }\n    },\n    hover: {\n      mode: 'index',\n      intersec: false\n    },\n    scales: {\n      x: {\n        title: {\n          display: true,\n          text: 'Month'\n        }\n      },\n      y: {\n        title: {\n          display: true,\n          text: 'Value'\n        },\n        min: 0,\n        max: 100,\n        ticks: {\n          // forces step size to be 50 units\n          stepSize: 50\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n",
                  },
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#docs' } }, [t._v('#')]),
                  t._v(' Docs'),
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [a('RouterLink', { attrs: { to: '/charts/line.html' } }, [t._v('Line')])], 1),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/general/data-structures.html' } }, [
                        t._v('Data structures ('),
                        a('code', [t._v('labels')]),
                        t._v(')'),
                      ]),
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/axes/' } }, [t._v('Axes scales')]),
                      t._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a('RouterLink', { attrs: { to: '/axes/#common-options-to-all-axes' } }, [
                              t._v('Common options to all axes ('),
                              a('code', [t._v('min')]),
                              t._v(','),
                              a('code', [t._v('max')]),
                              t._v(')'),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/axes/cartesian/linear.html' } }, [t._v('Linear Axis')]),
                      t._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a('RouterLink', { attrs: { to: '/axes/cartesian/linear.html#linear-axis-specific-tick-options' } }, [
                              t._v('Linear Axis specific tick options ('),
                              a('code', [t._v('stepSize')]),
                              t._v(')'),
                            ]),
                          ],
                          1
                        ),
                        t._v(' '),
                        a('li', [a('RouterLink', { attrs: { to: '/axes/cartesian/linear.html#step-size' } }, [t._v('Step Size')])], 1),
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
      n.default = s.exports;
    },
  },
]);
