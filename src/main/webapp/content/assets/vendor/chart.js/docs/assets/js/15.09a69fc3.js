(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    346: function (t, e, a) {
      'use strict';
      a.r(e);
      var r = a(6),
        s = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('h1', { attrs: { id: 'class-chart-ttype-tdata-tlabel' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#class-chart-ttype-tdata-tlabel' } }, [t._v('#')]),
                t._v(' Class: Chart<TType, TData, TLabel>'),
              ]),
              t._v(' '),
              a('h2', { attrs: { id: 'type-parameters' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#type-parameters' } }, [t._v('#')]),
                t._v(' Type parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('TType')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        t._v('extends '),
                        a('RouterLink', { attrs: { to: '/api/#charttype' } }, [a('code', [t._v('ChartType')])]),
                        t._v(' = '),
                        a('RouterLink', { attrs: { to: '/api/#charttype' } }, [a('code', [t._v('ChartType')])]),
                      ],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('TData')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/#defaultdatapoint' } }, [a('code', [t._v('DefaultDataPoint')])]),
                        t._v('<'),
                        a('code', [t._v('TType')]),
                        t._v('>'),
                      ],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('TLabel')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('unknown')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h2', { attrs: { id: 'constructors' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#constructors' } }, [t._v('#')]),
                t._v(' Constructors'),
              ]),
              t._v(' '),
              a('h3', { attrs: { id: 'constructor' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#constructor' } }, [t._v('#')]),
                t._v(' constructor'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('strong', [t._v('new Chart')]),
                t._v('<'),
                a('code', [t._v('TType')]),
                t._v(', '),
                a('code', [t._v('TData')]),
                t._v(', '),
                a('code', [t._v('TLabel')]),
                t._v('>('),
                a('code', [t._v('item')]),
                t._v(', '),
                a('code', [t._v('config')]),
                t._v(')'),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'type-parameters-2' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#type-parameters-2' } }, [t._v('#')]),
                t._v(' Type parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('TType')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        t._v('extends keyof '),
                        a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [
                          a('code', [t._v('ChartTypeRegistry')]),
                        ]),
                        t._v(' = keyof '),
                        a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [
                          a('code', [t._v('ChartTypeRegistry')]),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('TData')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('code', [t._v('DistributiveArray')]),
                        t._v('<'),
                        a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [
                          a('code', [t._v('ChartTypeRegistry')]),
                        ]),
                        t._v('['),
                        a('code', [t._v('TType')]),
                        t._v(']['),
                        a('code', [t._v('"defaultDataPoint"')]),
                        t._v(']>'),
                      ],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('TLabel')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('unknown')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('item')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [a('RouterLink', { attrs: { to: '/api/#chartitem' } }, [a('code', [t._v('ChartItem')])])],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('config')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/interfaces/ChartConfiguration.html' } }, [
                          a('code', [t._v('ChartConfiguration')]),
                        ]),
                        t._v('<'),
                        a('code', [t._v('TType')]),
                        t._v(', '),
                        a('code', [t._v('TData')]),
                        t._v(', '),
                        a('code', [t._v('TLabel')]),
                        t._v('> | '),
                        a('RouterLink', { attrs: { to: '/api/interfaces/ChartConfigurationCustomTypesPerDataset.html' } }, [
                          a('code', [t._v('ChartConfigurationCustomTypesPerDataset')]),
                        ]),
                        t._v('<'),
                        a('code', [t._v('TType')]),
                        t._v(', '),
                        a('code', [t._v('TData')]),
                        t._v(', '),
                        a('code', [t._v('TLabel')]),
                        t._v('>'),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L504',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:504'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('h2', { attrs: { id: 'properties' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#properties' } }, [t._v('#')]),
                t._v(' Properties'),
              ]),
              t._v(' '),
              a('h3', { attrs: { id: 'aspectratio' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#aspectratio' } }, [t._v('#')]),
                t._v(' aspectRatio'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('aspectRatio')]),
                t._v(': '),
                a('code', [t._v('number')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-2' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-2' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L491',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:491'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'attached' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#attached' } }, [t._v('#')]),
                t._v(' attached'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('attached')]),
                t._v(': '),
                a('code', [t._v('boolean')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-3' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-3' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L496',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:496'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'boxes' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#boxes' } }, [t._v('#')]),
                t._v(' boxes'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('boxes')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/LayoutItem.html' } }, [a('code', [t._v('LayoutItem')])]),
                  t._v('[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-4' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-4' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L492',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:492'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'canvas' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#canvas' } }, [t._v('#')]),
                t._v(' canvas'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('canvas')]),
                t._v(': '),
                a('code', [t._v('HTMLCanvasElement')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-5' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-5' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L486',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:486'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'chartarea' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#chartarea' } }, [t._v('#')]),
                t._v(' chartArea'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('chartArea')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartArea.html' } }, [a('code', [t._v('ChartArea')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-6' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-6' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L494',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:494'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'config' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#config' } }, [t._v('#')]),
                t._v(' config'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('config')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartConfiguration.html' } }, [a('code', [t._v('ChartConfiguration')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('> | '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartConfigurationCustomTypesPerDataset.html' } }, [
                    a('code', [t._v('ChartConfigurationCustomTypesPerDataset')]),
                  ]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-7' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-7' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L488',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:488'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'ctx' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#ctx' } }, [t._v('#')]),
                t._v(' ctx'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('ctx')]),
                t._v(': '),
                a('code', [t._v('CanvasRenderingContext2D')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-8' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-8' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L487',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:487'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'currentdevicepixelratio' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#currentdevicepixelratio' } }, [t._v('#')]),
                t._v(' currentDevicePixelRatio'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('currentDevicePixelRatio')]),
                t._v(': '),
                a('code', [t._v('number')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-9' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-9' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L493',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:493'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'data' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#data' } }, [t._v('#')]),
                t._v(' data'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('strong', [t._v('data')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartData.html' } }, [a('code', [t._v('ChartData')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-10' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-10' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L501',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:501'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'height' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#height' } }, [t._v('#')]),
                t._v(' height'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('height')]),
                t._v(': '),
                a('code', [t._v('number')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-11' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-11' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L490',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:490'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'id' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#id' } }, [t._v('#')]),
                t._v(' id'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('id')]),
                t._v(': '),
                a('code', [t._v('string')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-12' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-12' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L485',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:485'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'legend' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#legend' } }, [t._v('#')]),
                t._v(' legend'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('code', [t._v('Optional')]),
                  t._v(' '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('legend')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/LegendElement.html' } }, [a('code', [t._v('LegendElement')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-13' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-13' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L498',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:498'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'options' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#options' } }, [t._v('#')]),
                t._v(' options'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('strong', [t._v('options')]),
                  t._v(': '),
                  a('code', [t._v('DeepPartial')]),
                  t._v('<'),
                  a('RouterLink', { attrs: { to: '/api/interfaces/CoreChartOptions.html' } }, [a('code', [t._v('CoreChartOptions')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('> & '),
                  a('RouterLink', { attrs: { to: '/api/#elementchartoptions' } }, [a('code', [t._v('ElementChartOptions')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('> & '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/PluginChartOptions.html' } }, [a('code', [t._v('PluginChartOptions')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('> & '),
                  a('RouterLink', { attrs: { to: '/api/#datasetchartoptions' } }, [a('code', [t._v('DatasetChartOptions')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('> & '),
                  a('RouterLink', { attrs: { to: '/api/#scalechartoptions' } }, [a('code', [t._v('ScaleChartOptions')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('> & '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v('['),
                  a('code', [t._v('TType')]),
                  t._v(']['),
                  a('code', [t._v('"chartOptions"')]),
                  t._v(']>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-14' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-14' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L502',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:502'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'platform' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#platform' } }, [t._v('#')]),
                t._v(' platform'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('platform')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/classes/BasePlatform.html' } }, [a('code', [t._v('BasePlatform')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-15' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-15' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L484',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:484'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'scales' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#scales' } }, [t._v('#')]),
                t._v(' scales'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('scales')]),
                t._v(': '),
                a('code', [t._v('Object')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'index-signature' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#index-signature' } }, [t._v('#')]),
                t._v(' Index signature'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▪ [key: '),
                  a('code', [t._v('string')]),
                  t._v(']: '),
                  a('RouterLink', { attrs: { to: '/api/classes/Scale.html' } }, [a('code', [t._v('Scale')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-16' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-16' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L495',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:495'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'tooltip' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#tooltip' } }, [t._v('#')]),
                t._v(' tooltip'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('• '),
                  a('code', [t._v('Optional')]),
                  t._v(' '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('tooltip')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/TooltipModel.html' } }, [a('code', [t._v('TooltipModel')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-17' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-17' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L499',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:499'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'width' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#width' } }, [t._v('#')]),
                t._v(' width'),
              ]),
              t._v(' '),
              a('p', [
                t._v('• '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('width')]),
                t._v(': '),
                a('code', [t._v('number')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-18' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-18' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L489',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:489'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'defaults' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defaults' } }, [t._v('#')]),
                t._v(' defaults'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▪ '),
                  a('code', [t._v('Static')]),
                  t._v(' '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('defaults')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/Defaults.html' } }, [a('code', [t._v('Defaults')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-19' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-19' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L542',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:542'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'instances' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#instances' } }, [t._v('#')]),
                t._v(' instances'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▪ '),
                a('code', [t._v('Static')]),
                t._v(' '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('instances')]),
                t._v(': '),
                a('code', [t._v('Object')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'index-signature-2' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#index-signature-2' } }, [t._v('#')]),
                t._v(' Index signature'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▪ [key: '),
                  a('code', [t._v('string')]),
                  t._v(']: '),
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-20' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-20' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L545',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:545'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'overrides' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#overrides' } }, [t._v('#')]),
                t._v(' overrides'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▪ '),
                  a('code', [t._v('Static')]),
                  t._v(' '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('overrides')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/#overrides' } }, [a('code', [t._v('Overrides')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-21' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-21' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L543',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:543'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'registry' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#registry' } }, [t._v('#')]),
                t._v(' registry'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▪ '),
                  a('code', [t._v('Static')]),
                  t._v(' '),
                  a('code', [t._v('Readonly')]),
                  t._v(' '),
                  a('strong', [t._v('registry')]),
                  t._v(': '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/Registry.html' } }, [a('code', [t._v('Registry')])]),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-22' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-22' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L546',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:546'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'version' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#version' } }, [t._v('#')]),
                t._v(' version'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▪ '),
                a('code', [t._v('Static')]),
                t._v(' '),
                a('code', [t._v('Readonly')]),
                t._v(' '),
                a('strong', [t._v('version')]),
                t._v(': '),
                a('code', [t._v('string')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-23' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-23' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L544',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:544'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('h2', { attrs: { id: 'methods' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#methods' } }, [t._v('#')]),
                t._v(' Methods'),
              ]),
              t._v(' '),
              a('h3', { attrs: { id: 'bindevents' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#bindevents' } }, [t._v('#')]),
                t._v(' bindEvents'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('bindEvents')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-24' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-24' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L536',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:536'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'buildorupdatecontrollers' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#buildorupdatecontrollers' } }, [t._v('#')]),
                t._v(' buildOrUpdateControllers'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('buildOrUpdateControllers')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-2' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-2' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-25' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-25' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L512',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:512'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'buildorupdatescales' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#buildorupdatescales' } }, [t._v('#')]),
                t._v(' buildOrUpdateScales'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('buildOrUpdateScales')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-3' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-3' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-26' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-26' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L511',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:511'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'clear' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#clear' } }, [t._v('#')]),
                t._v(' clear'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('strong', [t._v('clear')]),
                  t._v('(): '),
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-4' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-4' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-27' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-27' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L506',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:506'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'destroy' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#destroy' } }, [t._v('#')]),
                t._v(' destroy'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('destroy')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-5' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-5' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-28' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-28' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L534',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:534'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'draw' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#draw' } }, [t._v('#')]),
                t._v(' draw'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('draw')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-6' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-6' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-29' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-29' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L516',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:516'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'ensurescaleshaveids' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#ensurescaleshaveids' } }, [t._v('#')]),
                t._v(' ensureScalesHaveIDs'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('ensureScalesHaveIDs')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-7' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-7' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-30' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-30' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L510',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:510'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getactiveelements' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getactiveelements' } }, [t._v('#')]),
                t._v(' getActiveElements'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('strong', [t._v('getActiveElements')]),
                  t._v('(): '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ActiveElement.html' } }, [a('code', [t._v('ActiveElement')])]),
                  t._v('[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-8' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-8' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/interfaces/ActiveElement.html' } }, [a('code', [t._v('ActiveElement')])]),
                  t._v('[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-31' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-31' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L531',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:531'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getdatavisibility' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getdatavisibility' } }, [t._v('#')]),
                t._v(' getDataVisibility'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('getDataVisibility')]),
                t._v('('),
                a('code', [t._v('index')]),
                t._v('): '),
                a('code', [t._v('boolean')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-2' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-2' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('index')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-9' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-9' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('boolean')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-32' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-32' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L527',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:527'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getdatasetmeta' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getdatasetmeta' } }, [t._v('#')]),
                t._v(' getDatasetMeta'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('strong', [t._v('getDatasetMeta')]),
                  t._v('('),
                  a('code', [t._v('datasetIndex')]),
                  t._v('): '),
                  a('RouterLink', { attrs: { to: '/api/#chartmeta' } }, [a('code', [t._v('ChartMeta')])]),
                  t._v('<'),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, '),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, keyof '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-3' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-3' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('datasetIndex')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-10' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-10' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/#chartmeta' } }, [a('code', [t._v('ChartMeta')])]),
                  t._v('<'),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, '),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, keyof '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-33' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-33' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L522',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:522'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getelementsateventformode' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getelementsateventformode' } }, [t._v('#')]),
                t._v(' getElementsAtEventForMode'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('strong', [t._v('getElementsAtEventForMode')]),
                  t._v('('),
                  a('code', [t._v('e')]),
                  t._v(', '),
                  a('code', [t._v('mode')]),
                  t._v(', '),
                  a('code', [t._v('options')]),
                  t._v(', '),
                  a('code', [t._v('useFinalPosition')]),
                  t._v('): '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/InteractionItem.html' } }, [a('code', [t._v('InteractionItem')])]),
                  t._v('[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-4' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-4' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('e')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('Event')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('mode')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('string')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('options')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/interfaces/InteractionOptions.html' } }, [
                          a('code', [t._v('InteractionOptions')]),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('useFinalPosition')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('boolean')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-11' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-11' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/interfaces/InteractionItem.html' } }, [a('code', [t._v('InteractionItem')])]),
                  t._v('[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-34' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-34' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L519',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:519'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getsortedvisibledatasetmetas' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getsortedvisibledatasetmetas' } }, [t._v('#')]),
                t._v(' getSortedVisibleDatasetMetas'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('strong', [t._v('getSortedVisibleDatasetMetas')]),
                  t._v('(): '),
                  a('RouterLink', { attrs: { to: '/api/#chartmeta' } }, [a('code', [t._v('ChartMeta')])]),
                  t._v('<'),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, '),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, keyof '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v('>[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-12' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-12' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/#chartmeta' } }, [a('code', [t._v('ChartMeta')])]),
                  t._v('<'),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, '),
                  a('RouterLink', { attrs: { to: '/api/#element' } }, [a('code', [t._v('Element')])]),
                  t._v('<'),
                  a('code', [t._v('AnyObject')]),
                  t._v(', '),
                  a('code', [t._v('AnyObject')]),
                  t._v('>, keyof '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v('>[]'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-35' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-35' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L521',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:521'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getvisibledatasetcount' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getvisibledatasetcount' } }, [t._v('#')]),
                t._v(' getVisibleDatasetCount'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('getVisibleDatasetCount')]), t._v('(): '), a('code', [t._v('number')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-13' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-13' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('number')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-36' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-36' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L523',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:523'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'hide' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#hide' } }, [t._v('#')]),
                t._v(' hide'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('hide')]),
                t._v('('),
                a('code', [t._v('datasetIndex')]),
                t._v(', '),
                a('code', [t._v('dataIndex?')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-5' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-5' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('datasetIndex')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('dataIndex?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-14' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-14' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-37' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-37' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L528',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:528'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'isdatasetvisible' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#isdatasetvisible' } }, [t._v('#')]),
                t._v(' isDatasetVisible'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('isDatasetVisible')]),
                t._v('('),
                a('code', [t._v('datasetIndex')]),
                t._v('): '),
                a('code', [t._v('boolean')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-6' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-6' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('datasetIndex')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-15' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-15' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('boolean')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-38' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-38' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L524',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:524'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'ispointinarea' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#ispointinarea' } }, [t._v('#')]),
                t._v(' isPointInArea'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('isPointInArea')]),
                t._v('('),
                a('code', [t._v('point')]),
                t._v('): '),
                a('code', [t._v('boolean')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-7' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-7' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('point')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [a('RouterLink', { attrs: { to: '/api/interfaces/Point.html' } }, [a('code', [t._v('Point')])])],
                      1
                    ),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-16' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-16' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('boolean')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-39' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-39' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L518',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:518'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'notifyplugins' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#notifyplugins' } }, [t._v('#')]),
                t._v(' notifyPlugins'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('notifyPlugins')]),
                t._v('('),
                a('code', [t._v('hook')]),
                t._v(', '),
                a('code', [t._v('args?')]),
                t._v('): '),
                a('code', [t._v('boolean')]),
                t._v(' | '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-8' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-8' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('hook')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('string')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('args?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('AnyObject')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-17' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-17' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('boolean')]), t._v(' | '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-40' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-40' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L540',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:540'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'render' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#render' } }, [t._v('#')]),
                t._v(' render'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('render')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-18' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-18' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-41' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-41' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L515',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:515'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'reset' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#reset' } }, [t._v('#')]),
                t._v(' reset'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('reset')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-19' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-19' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-42' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-42' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L513',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:513'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'resize' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#resize' } }, [t._v('#')]),
                t._v(' resize'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('resize')]),
                t._v('('),
                a('code', [t._v('width?')]),
                t._v(', '),
                a('code', [t._v('height?')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-9' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-9' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('width?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('height?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-20' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-20' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-43' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-43' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L509',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:509'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'setactiveelements' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#setactiveelements' } }, [t._v('#')]),
                t._v(' setActiveElements'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('setActiveElements')]),
                t._v('('),
                a('code', [t._v('active')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-10' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-10' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('active')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/interfaces/ActiveDataPoint.html' } }, [a('code', [t._v('ActiveDataPoint')])]),
                        t._v('[]'),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-21' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-21' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-44' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-44' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L532',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:532'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'setdatasetvisibility' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#setdatasetvisibility' } }, [t._v('#')]),
                t._v(' setDatasetVisibility'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('setDatasetVisibility')]),
                t._v('('),
                a('code', [t._v('datasetIndex')]),
                t._v(', '),
                a('code', [t._v('visible')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-11' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-11' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('datasetIndex')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('visible')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('boolean')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-22' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-22' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-45' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-45' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L525',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:525'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'show' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#show' } }, [t._v('#')]),
                t._v(' show'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('show')]),
                t._v('('),
                a('code', [t._v('datasetIndex')]),
                t._v(', '),
                a('code', [t._v('dataIndex?')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-12' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-12' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('datasetIndex')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('dataIndex?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-23' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-23' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-46' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-46' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L529',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:529'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'stop' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#stop' } }, [t._v('#')]),
                t._v(' stop'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('strong', [t._v('stop')]),
                  t._v('(): '),
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-24' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-24' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                  t._v('<'),
                  a('code', [t._v('TType')]),
                  t._v(', '),
                  a('code', [t._v('TData')]),
                  t._v(', '),
                  a('code', [t._v('TLabel')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-47' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-47' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L507',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:507'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'tobase64image' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#tobase64image' } }, [t._v('#')]),
                t._v(' toBase64Image'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('toBase64Image')]),
                t._v('('),
                a('code', [t._v('type?')]),
                t._v(', '),
                a('code', [t._v('quality?')]),
                t._v('): '),
                a('code', [t._v('string')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-13' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-13' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('type?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('string')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('quality?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('unknown')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-25' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-25' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('string')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-48' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-48' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L535',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:535'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'toggledatavisibility' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#toggledatavisibility' } }, [t._v('#')]),
                t._v(' toggleDataVisibility'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('toggleDataVisibility')]),
                t._v('('),
                a('code', [t._v('index')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-14' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-14' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('index')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('number')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-26' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-26' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-49' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-49' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L526',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:526'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'unbindevents' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#unbindevents' } }, [t._v('#')]),
                t._v(' unbindEvents'),
              ]),
              t._v(' '),
              a('p', [t._v('▸ '), a('strong', [t._v('unbindEvents')]), t._v('(): '), a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-27' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-27' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-50' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-50' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L537',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:537'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'update' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#update' } }, [t._v('#')]),
                t._v(' update'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('update')]),
                t._v('('),
                a('code', [t._v('mode?')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-15' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-15' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('mode?')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [
                      a('code', [t._v('"resize"')]),
                      t._v(' | '),
                      a('code', [t._v('"reset"')]),
                      t._v(' | '),
                      a('code', [t._v('"none"')]),
                      t._v(' | '),
                      a('code', [t._v('"hide"')]),
                      t._v(' | '),
                      a('code', [t._v('"show"')]),
                      t._v(' | '),
                      a('code', [t._v('"normal"')]),
                      t._v(' | '),
                      a('code', [t._v('"active"')]),
                    ]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-28' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-28' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-51' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-51' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L514',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:514'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'updatehoverstyle' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#updatehoverstyle' } }, [t._v('#')]),
                t._v(' updateHoverStyle'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('strong', [t._v('updateHoverStyle')]),
                t._v('('),
                a('code', [t._v('items')]),
                t._v(', '),
                a('code', [t._v('mode')]),
                t._v(', '),
                a('code', [t._v('enabled')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-16' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-16' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('items')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/interfaces/InteractionItem.html' } }, [a('code', [t._v('InteractionItem')])]),
                        t._v('[]'),
                      ],
                      1
                    ),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('mode')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('"dataset"')])]),
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('enabled')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('boolean')])]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-29' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-29' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-52' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-52' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L538',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:538'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'getchart' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#getchart' } }, [t._v('#')]),
                t._v(' getChart'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  t._v('▸ '),
                  a('code', [t._v('Static')]),
                  t._v(' '),
                  a('strong', [t._v('getChart')]),
                  t._v('('),
                  a('code', [t._v('key')]),
                  t._v('): '),
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                  t._v('<keyof '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v(', ('),
                  a('code', [t._v('number')]),
                  t._v(' | '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ScatterDataPoint.html' } }, [a('code', [t._v('ScatterDataPoint')])]),
                  t._v(' | '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/BubbleDataPoint.html' } }, [a('code', [t._v('BubbleDataPoint')])]),
                  t._v(')[], '),
                  a('code', [t._v('unknown')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-17' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-17' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('key')])]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [
                      a('code', [t._v('string')]),
                      t._v(' | '),
                      a('code', [t._v('HTMLCanvasElement')]),
                      t._v(' | '),
                      a('code', [t._v('CanvasRenderingContext2D')]),
                    ]),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-30' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-30' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a(
                'p',
                [
                  a('RouterLink', { attrs: { to: '/api/classes/Chart.html' } }, [a('code', [t._v('Chart')])]),
                  t._v('<keyof '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ChartTypeRegistry.html' } }, [a('code', [t._v('ChartTypeRegistry')])]),
                  t._v(', ('),
                  a('code', [t._v('number')]),
                  t._v(' | '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/ScatterDataPoint.html' } }, [a('code', [t._v('ScatterDataPoint')])]),
                  t._v(' | '),
                  a('RouterLink', { attrs: { to: '/api/interfaces/BubbleDataPoint.html' } }, [a('code', [t._v('BubbleDataPoint')])]),
                  t._v(')[], '),
                  a('code', [t._v('unknown')]),
                  t._v('>'),
                ],
                1
              ),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-53' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-53' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L547',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:547'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'register' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#register' } }, [t._v('#')]),
                t._v(' register'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('code', [t._v('Static')]),
                t._v(' '),
                a('strong', [t._v('register')]),
                t._v('(...'),
                a('code', [t._v('items')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-18' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-18' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('...items')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/#chartcomponentlike' } }, [a('code', [t._v('ChartComponentLike')])]),
                        t._v('[]'),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-31' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-31' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-54' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-54' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L548',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:548'), a('OutboundLink')],
                  1
                ),
              ]),
              t._v(' '),
              a('hr'),
              t._v(' '),
              a('h3', { attrs: { id: 'unregister' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#unregister' } }, [t._v('#')]),
                t._v(' unregister'),
              ]),
              t._v(' '),
              a('p', [
                t._v('▸ '),
                a('code', [t._v('Static')]),
                t._v(' '),
                a('strong', [t._v('unregister')]),
                t._v('(...'),
                a('code', [t._v('items')]),
                t._v('): '),
                a('code', [t._v('void')]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'parameters-19' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#parameters-19' } }, [t._v('#')]),
                t._v(' Parameters'),
              ]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Name')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('Type')]),
                  ]),
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [a('code', [t._v('...items')])]),
                    t._v(' '),
                    a(
                      'td',
                      { staticStyle: { 'text-align': 'left' } },
                      [
                        a('RouterLink', { attrs: { to: '/api/#chartcomponentlike' } }, [a('code', [t._v('ChartComponentLike')])]),
                        t._v('[]'),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: 'returns-32' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#returns-32' } }, [t._v('#')]),
                t._v(' Returns'),
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('void')])]),
              t._v(' '),
              a('h4', { attrs: { id: 'defined-in-55' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#defined-in-55' } }, [t._v('#')]),
                t._v(' Defined in'),
              ]),
              t._v(' '),
              a('p', [
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/chartjs/Chart.js/blob/5ea4b3a/types/index.esm.d.ts#L549',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('index.esm.d.ts:549'), a('OutboundLink')],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = s.exports;
    },
  },
]);
