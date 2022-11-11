(window.webpackJsonp = window.webpackJsonp || []).push([
  [222],
  {
    553: function (t, n, a) {
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
                a('h1', { attrs: { id: 'combo-bar-line' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#combo-bar-line' } }, [t._v('#')]),
                  t._v(' Combo bar/line'),
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const data = chart.data;\n      const dsColor = Utils.namedColor(chart.data.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (data.datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        borderWidth: 1,\n        data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels = Utils.months({count: data.labels.length + 1});\n\n        for (let index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(-100, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      order: 1\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      type: 'line',\n      order: 0\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Combined Line/Bar Chart'\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n",
                  },
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#docs' } }, [t._v('#')]),
                  t._v(' Docs'),
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [a('RouterLink', { attrs: { to: '/charts/bar.html' } }, [t._v('Bar')])], 1),
                  t._v(' '),
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
