import * as React from 'react';

import {
  ComponentPage,
  ExampleCard,
  IComponentDemoPageProps,
  PropertiesTableSet,
  Markdown,
} from '@fluentui/react-docsite-components';

import { AreaChartBasicExample } from './AreaChart.Basic.Example';
import { AreaChartMultipleExample } from './AreaChart.Multiple.Example';
import { AreaChartStyledExample } from './AreaChart.Styled.Example';
import { AreaChartCustomAccessibilityExample } from './AreaChart.CustomAccessibility.Example';
import { AreaChartLargeDataExample } from './AreaChart.LargeData.Example';
import { AreaChartDataChangeExample } from './AreaChart.DataChange.Example';
import { AreaChartNegativeExample } from './AreaChart.Negative.Example';
import { AreaChartMultipleNegativeExample } from './AreaChart.MultipleNegative.Example';
import { AreaChartAllNegativeExample } from './AreaChart.AllNegative.Example';
import { AreaChartSecondaryYAxisExample } from './AreaChart.SecondaryYAxis.Example';

const AreaChartBasicExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Basic.Example.tsx') as string;
const AreaChartMultipleExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Multiple.Example.tsx') as string;
const AreaChartStyledExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Styled.Example.tsx') as string;
const AreaChartCustomAccessibilityExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.CustomAccessibility.Example.tsx') as string;
const AreaChartLargeDataExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.LargeData.Example.tsx') as string;
const AreaChartDataChangeExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.DataChange.Example.tsx') as string;
const AreaChartNegativeExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Negative.Example.tsx') as string;
const AreaChartMultipleNegativeExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.MultipleNegative.Example.tsx') as string;
const AreaChartAllNegativeExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.AllNegative.Example.tsx') as string;
const AreaChartSecondaryYAxisExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.SecondaryYAxis.Example.tsx') as string;

export class AreaChart extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Area Chart"
        componentName="AreaChartBasicExample"
        exampleCards={
          <div>
            <ExampleCard title="Area Chart basic" code={AreaChartBasicExampleCode}>
              <AreaChartBasicExample />
            </ExampleCard>
            <ExampleCard title="Multiple Area chart" code={AreaChartMultipleExampleCode}>
              <AreaChartMultipleExample />
            </ExampleCard>
            <ExampleCard title="Styled Area chart" code={AreaChartStyledExampleCode}>
              <AreaChartStyledExample />
            </ExampleCard>
            <ExampleCard title="Area chart custom Accessibility" code={AreaChartCustomAccessibilityExampleCode}>
              <AreaChartCustomAccessibilityExample />
            </ExampleCard>
            <ExampleCard title="Area chart large data" code={AreaChartLargeDataExampleCode}>
              <AreaChartLargeDataExample />
            </ExampleCard>
            <ExampleCard title="Area chart Data Change" code={AreaChartDataChangeExampleCode}>
              <AreaChartDataChangeExample />
            </ExampleCard>
            <ExampleCard title="Area chart some negative y value data" code={AreaChartNegativeExampleCode}>
              <AreaChartNegativeExample />
            </ExampleCard>
            <ExampleCard title="Area chart Multiple negative y value data" code={AreaChartMultipleNegativeExampleCode}>
              <AreaChartMultipleNegativeExample />
            </ExampleCard>
            <ExampleCard title="Area chart All negative y value data" code={AreaChartAllNegativeExampleCode}>
              <AreaChartAllNegativeExample />
            </ExampleCard>
            <ExampleCard title="Area chart secondary y-axis" code={AreaChartSecondaryYAxisExampleCode}>
              <AreaChartSecondaryYAxisExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/AreaChart/AreaChart.types.ts'),
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/CommonComponents/CartesianChart.types.ts'),
            ]}
          />
        }
        isHeaderVisible={this.props.isHeaderVisible}
        overview={
          <Markdown>
            {require<string>('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/docs/AreaChartOverview.md')}
          </Markdown>
        }
        bestPractices={
          <Markdown>
            {require<string>('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/docs/AreaChartBestPractices.md')}
          </Markdown>
        }
        dos={
          <Markdown>
            {require<string>('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/docs/AreaChartDos.md')}
          </Markdown>
        }
        donts={
          <Markdown>
            {require<string>('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/docs/AreaChartDonts.md')}
          </Markdown>
        }
      />
    );
  }
}
