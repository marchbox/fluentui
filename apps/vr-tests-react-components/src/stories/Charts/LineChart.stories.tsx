import * as React from 'react';
import type { Meta } from '@storybook/react';
import { Steps, StoryWright } from 'storywright';
import { DARK_MODE, getStoryVariant, RTL, TestWrapperDecorator } from '../../utilities';
import { LineChartPoints, LineChart, ChartProps, DataVizPalette, CustomizedCalloutData } from '@fluentui/react-charts';

export default {
  title: 'Charts/LineChart',

  decorators: [
    TestWrapperDecorator,
    (story, context) => {
      const steps =
        context.name.startsWith('Basic') && !context.name.includes('RTL')
          ? new Steps()
              .snapshot('default', { cropTo: '.testWrapper' })
              // Selector to select a point on the line, to capture the callout
              .executeScript(
                // eslint-disable-next-line @fluentui/max-len
                `document.querySelectorAll('line[id^="line"]')[3].dispatchEvent(new MouseEvent('mouseover',{bubbles: true,cancelable: true}))`,
              )
              .snapshot('hover', { cropTo: '.testWrapper' })
              .end()
          : new Steps().snapshot('default', { cropTo: '.testWrapper' }).end();

      return <StoryWright steps={steps}>{story()}</StoryWright>;
    },
  ],
} satisfies Meta<typeof LineChart>;

export const Basic = () => {
  const margins = { left: 35, top: 20, bottom: 35, right: 20 };
  const data: ChartProps = {
    chartTitle: 'Line Chart',
    lineChartData: [
      {
        legend: 'From_Legacy_to_O365',
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 216000,
            onDataPointClick: () => alert('click on 217000'),
          },
          {
            x: new Date('2020-03-03T10:00:00.000Z'),
            y: 218123,
            onDataPointClick: () => alert('click on 217123'),
          },
          {
            x: new Date('2020-03-03T11:00:00.000Z'),
            y: 217124,
            onDataPointClick: () => alert('click on 217124'),
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 248000,
            onDataPointClick: () => alert('click on 248000'),
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 252000,
            onDataPointClick: () => alert('click on 252000'),
          },
          {
            x: new Date('2020-03-06T00:00:00.000Z'),
            y: 274000,
            onDataPointClick: () => alert('click on 274000'),
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 260000,
            onDataPointClick: () => alert('click on 260000'),
          },
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 304000,
            onDataPointClick: () => alert('click on 300000'),
          },
          {
            x: new Date('2020-03-09T00:00:00.000Z'),
            y: 218000,
            onDataPointClick: () => alert('click on 218000'),
          },
        ],
        color: '#2c72a8',
        lineOptions: {
          lineBorderWidth: '4',
        },
        onLineClick: () => console.log('From_Legacy_to_O365'),
      },
      {
        legend: 'All',
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 297000,
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 284000,
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 282000,
          },
          {
            x: new Date('2020-03-06T00:00:00.000Z'),
            y: 294000,
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 224000,
          },
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 300000,
          },
          {
            x: new Date('2020-03-09T00:00:00.000Z'),
            y: 298000,
          },
        ],
        color: '#13a10e',
        lineOptions: {
          lineBorderWidth: '4',
        },
      },
      {
        legend: 'single point',
        data: [
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 282000,
          },
        ],
        color: '#ffff00',
      },
    ],
  };

  const rootStyle = { width: `700px`, height: `300px` };

  return (
    <div style={rootStyle}>
      <LineChart
        culture="en-US"
        data={data}
        legendsOverflowText={'Overflow Items'}
        yMinValue={200}
        yMaxValue={301}
        height={300}
        width={700}
        margins={margins}
        xAxisTickCount={10}
        allowMultipleShapesForPoints={false}
        enablePerfOptimization={true}
      />
    </div>
  );
};

export const BasicRTL = getStoryVariant(Basic, RTL);

export const BasicDarkMode = getStoryVariant(Basic, DARK_MODE);

export const Events = () => {
  const data: ChartProps = {
    chartTitle: 'Line Chart',
    lineChartData: [
      {
        legend: 'From_Legacy_to_O365',
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 297,
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 284,
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 282,
          },
          {
            x: new Date('2020-03-06T00:00:00.000Z'),
            y: 294,
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 294,
          },
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 300,
          },
          {
            x: new Date('2020-03-09T00:00:00.000Z'),
            y: 298,
          },
        ],
        color: '#2c72a8',
        lineOptions: {
          lineBorderWidth: '4',
        },
      },
      {
        legend: 'All',
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 292,
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 287,
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 287,
          },
          {
            x: new Date('2020-03-06T00:00:00.000Z'),
            y: 292,
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 287,
          },
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 297,
          },
          {
            x: new Date('2020-03-09T00:00:00.000Z'),
            y: 292,
          },
        ],
        color: '#13a10e',
        lineOptions: {
          lineBorderWidth: '4',
        },
      },
    ],
  };

  const rootStyle = { width: `700px`, height: `300px` };

  return (
    <div style={rootStyle}>
      <LineChart
        data={data}
        legendsOverflowText={'Overflow Items'}
        yMinValue={282}
        yMaxValue={301}
        tickFormat={'%m/%d'}
        allowMultipleShapesForPoints={false}
        tickValues={[
          new Date('2020-03-03'),
          new Date('2020-03-04'),
          new Date('2020-03-05'),
          new Date('2020-03-06'),
          new Date('2020-03-07'),
          new Date('2020-03-08'),
          new Date('2020-03-09'),
        ]}
        eventAnnotationProps={{
          events: [
            {
              event: 'event 1',
              date: new Date('2020-03-04T00:00:00.000Z'),
              onRenderCard: () => <div>event 1 message</div>,
            },
            {
              event: 'event 2',
              date: new Date('2020-03-04T00:00:00.000Z'),
              onRenderCard: () => <div>event 2 message</div>,
            },
            {
              event: 'event 3',
              date: new Date('2020-03-04T00:00:00.000Z'),
              onRenderCard: () => <div>event 3 message</div>,
            },
            {
              event: 'event 4',
              date: new Date('2020-03-06T00:00:00.000Z'),
              onRenderCard: () => <div>event 4 message</div>,
            },
            {
              event: 'event 5',
              date: new Date('2020-03-08T00:00:00.000Z'),
              onRenderCard: () => <div>event 5 message</div>,
            },
          ],
          labelHeight: 18,
          labelWidth: 50,
          mergedLabel: (count: number) => `${count} events`,
        }}
        height={300}
        width={700}
        enablePerfOptimization={true}
      />
    </div>
  );
};

export const EventsRTL = getStoryVariant(Events, RTL);

export const EventsDarkMode = getStoryVariant(Events, DARK_MODE);

export const Multiple = () => {
  const _onLegendClickHandler = (selectedLegend: string | string[] | null): void => {
    if (selectedLegend !== null) {
      console.log(`Selected legend - ${selectedLegend}`);
    }
  };

  const points: LineChartPoints[] = [
    {
      data: [
        {
          x: new Date('2018/01/01'),
          y: 10,
          xAxisCalloutData: '2018/01/01',
          yAxisCalloutData: '10%',
        },
        {
          x: new Date('2018/02/01'),
          y: 30,
          xAxisCalloutData: '2018/01/15',
          yAxisCalloutData: '18%',
        },
        {
          x: new Date('2018/03/01'),
          y: 10,
          xAxisCalloutData: '2018/01/28',
          yAxisCalloutData: '24%',
        },
        {
          x: new Date('2018/04/01'),
          y: 30,
          xAxisCalloutData: '2018/02/01',
          yAxisCalloutData: '25%',
        },
        {
          x: new Date('2018/05/01'),
          y: 10,
          xAxisCalloutData: '2018/03/01',
          yAxisCalloutData: '15%',
        },
        {
          x: new Date('2018/06/01'),
          y: 30,
          xAxisCalloutData: '2018/03/15',
          yAxisCalloutData: '30%',
        },
      ],
      legend: 'First',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 30 },
        { x: new Date('2018/02/01'), y: 50 },
        { x: new Date('2018/03/01'), y: 30 },
        { x: new Date('2018/04/01'), y: 50 },
        { x: new Date('2018/05/01'), y: 30 },
        { x: new Date('2018/06/01'), y: 50 },
      ],
      legend: 'Second',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 50 },
        { x: new Date('2018/02/01'), y: 70 },
        { x: new Date('2018/03/01'), y: 50 },
        { x: new Date('2018/04/01'), y: 70 },
        { x: new Date('2018/05/01'), y: 50 },
        { x: new Date('2018/06/01'), y: 70 },
      ],
      legend: 'Third',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 70 },
        { x: new Date('2018/02/01'), y: 90 },
        { x: new Date('2018/03/01'), y: 70 },
        { x: new Date('2018/04/01'), y: 90 },
        { x: new Date('2018/05/01'), y: 70 },
        { x: new Date('2018/06/01'), y: 90 },
      ],
      legend: 'Fourth',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 90 },
        { x: new Date('2018/02/01'), y: 110 },
        { x: new Date('2018/03/01'), y: 90 },
        { x: new Date('2018/04/01'), y: 110 },
        { x: new Date('2018/05/01'), y: 90 },
        { x: new Date('2018/06/01'), y: 110 },
      ],
      legend: 'Fifth',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 110 },
        { x: new Date('2018/02/01'), y: 130 },
        { x: new Date('2018/03/01'), y: 110 },
        { x: new Date('2018/04/01'), y: 130 },
        { x: new Date('2018/05/01'), y: 110 },
        { x: new Date('2018/06/01'), y: 130 },
      ],
      legend: 'Sixth',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 130 },
        { x: new Date('2018/02/01'), y: 150 },
        { x: new Date('2018/03/01'), y: 130 },
        { x: new Date('2018/04/01'), y: 150 },
        { x: new Date('2018/05/01'), y: 130 },
        { x: new Date('2018/06/01'), y: 150 },
      ],
      legend: 'Seventh',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 150 },
        { x: new Date('2018/02/01'), y: 170 },
        { x: new Date('2018/03/01'), y: 150 },
        { x: new Date('2018/04/01'), y: 170 },
        { x: new Date('2018/05/01'), y: 150 },
        { x: new Date('2018/06/01'), y: 170 },
      ],
      legend: 'Eight',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 170 },
        { x: new Date('2018/02/01'), y: 190 },
        { x: new Date('2018/03/01'), y: 170 },
        { x: new Date('2018/04/01'), y: 190 },
        { x: new Date('2018/05/01'), y: 170 },
        { x: new Date('2018/06/01'), y: 190 },
      ],
      legend: 'Ninth',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 190 },
        { x: new Date('2018/02/01'), y: 210 },
        { x: new Date('2018/03/01'), y: 190 },
        { x: new Date('2018/04/01'), y: 210 },
        { x: new Date('2018/05/01'), y: 190 },
        { x: new Date('2018/06/01'), y: 210 },
      ],
      legend: 'Tenth',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 210 },
        { x: new Date('2018/02/01'), y: 230 },
        { x: new Date('2018/03/01'), y: 210 },
        { x: new Date('2018/04/01'), y: 230 },
        { x: new Date('2018/05/01'), y: 210 },
        { x: new Date('2018/06/01'), y: 230 },
      ],
      legend: 'Eleventh',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
    {
      data: [
        { x: new Date('2018/01/01'), y: 230 },
        { x: new Date('2018/02/01'), y: 250 },
        { x: new Date('2018/03/01'), y: 230 },
        { x: new Date('2018/04/01'), y: 250 },
        { x: new Date('2018/05/01'), y: 230 },
        { x: new Date('2018/06/01'), y: 250 },
      ],
      legend: 'Tweleth',
      lineOptions: {
        lineBorderWidth: '4',
      },
      onLegendClick: _onLegendClickHandler,
    },
  ];

  const data: ChartProps = {
    chartTitle: 'Line Chart',
    lineChartData: points,
  };
  const rootStyle = { width: `${700}px`, height: `${300}px` };
  const timeFormat = '%m/%d';
  // Passing tick values is optional, for more control.
  // If you do not pass them the line chart will render them for you based on D3's standard.
  const tickValues: Date[] = [
    new Date('01-01-2018'),
    new Date('02-01-2018'),
    new Date('03-01-2018'),
    new Date('04-01-2018'),
    new Date('05-01-2018'),
    new Date('06-01-2018'),
    new Date('07-01-2018'),
  ];
  const colorFillBarData = [
    {
      legend: 'Time range 1',
      color: DataVizPalette.color19,
      data: [
        {
          startX: new Date('2018/01/06'),
          endX: new Date('2018/01/25'),
        },
      ],
    },
    {
      legend: 'Time range 2',
      color: DataVizPalette.color20,
      data: [
        {
          startX: new Date('2018/01/18'),
          endX: new Date('2018/02/20'),
        },
        {
          startX: new Date('2018/04/17'),
          endX: new Date('2018/05/10'),
        },
      ],
      applyPattern: true,
    },
  ];
  return (
    <div style={rootStyle}>
      <LineChart
        data={data}
        strokeWidth={4}
        tickFormat={timeFormat}
        tickValues={tickValues}
        height={300}
        width={700}
        legendProps={{ canSelectMultipleLegends: true, allowFocusOnLegends: true }}
        colorFillBars={colorFillBarData}
        allowMultipleShapesForPoints={true}
        enablePerfOptimization={true}
      />
    </div>
  );
};

export const MultipleRTL = getStoryVariant(Multiple, RTL);

export const MultipleDarkMode = getStoryVariant(Multiple, DARK_MODE);

export const Gaps = () => {
  const _calculateCalloutDescription = (calloutDataProps: CustomizedCalloutData): string | undefined => {
    if (calloutDataProps.values.filter(value => value.legend === 'Low Confidence Data*').length > 0) {
      return '* This data was below our confidence threshold.';
    }
    return undefined;
  };

  const data: ChartProps = {
    chartTitle: 'Line Chart',
    lineChartData: [
      {
        legend: 'Confidence Level',
        legendShape: 'dottedLine',
        hideNonActiveDots: true,
        lineOptions: {
          strokeDasharray: '5',
          strokeLinecap: 'butt',
          strokeWidth: '2',
          lineBorderWidth: '4',
        },
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 250000,
            hideCallout: true,
          },
          {
            x: new Date('2020-03-10T00:00:00.000Z'),
            y: 250000,
            hideCallout: true,
          },
        ],
        color: '#000000',
      },
      {
        legend: 'Normal Data',
        gaps: [
          {
            startIndex: 3,
            endIndex: 4,
          },
          {
            startIndex: 6,
            endIndex: 7,
          },
          {
            startIndex: 1,
            endIndex: 2,
          },
        ],
        hideNonActiveDots: true,
        lineOptions: {
          lineBorderWidth: '4',
        },
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 216000,
          },
          {
            x: new Date('2020-03-03T10:30:00.000Z'),
            y: 218123,
            hideCallout: true,
          },
          // gap here
          {
            x: new Date('2020-03-03T11:00:00.000Z'),
            y: 219000,
            hideCallout: true,
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 248000,
            hideCallout: true,
          },
          // gap here
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 252000,
            hideCallout: true,
          },
          {
            x: new Date('2020-03-06T00:00:00.000Z'),
            y: 274000,
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 260000,
            hideCallout: true,
          },
          // gap here
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 300000,
            hideCallout: true,
          },
          {
            x: new Date('2020-03-08T12:00:00.000Z'),
            y: 218000,
          },
          {
            x: new Date('2020-03-09T00:00:00.000Z'),
            y: 218000,
          },
          {
            x: new Date('2020-03-10T00:00:00.000Z'),
            y: 269000,
          },
        ],
        color: '#2c72a8',
      },
      {
        legend: 'Low Confidence Data*',
        legendShape: 'dottedLine',
        hideNonActiveDots: true,
        lineOptions: {
          strokeDasharray: '2',
          strokeDashoffset: '-1',
          strokeLinecap: 'butt',
          lineBorderWidth: '4',
        },
        gaps: [
          {
            startIndex: 3,
            endIndex: 4,
          },
          {
            startIndex: 1,
            endIndex: 2,
          },
        ],
        data: [
          {
            x: new Date('2020-03-03T10:30:00.000Z'),
            y: 218123,
          },
          {
            x: new Date('2020-03-03T11:00:00.000Z'),
            y: 219000,
          },
          // gap here
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 248000,
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 252000,
          },
          // gap here
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 260000,
          },
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 300000,
          },
        ],
        color: '#2c72a8',
      },
      {
        legend: 'Green Data',
        lineOptions: {
          lineBorderWidth: '4',
        },
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 297000,
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 284000,
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 282000,
          },
          {
            x: new Date('2020-03-06T00:00:00.000Z'),
            y: 294000,
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 224000,
          },
          {
            x: new Date('2020-03-08T00:00:00.000Z'),
            y: 300000,
          },
          {
            x: new Date('2020-03-09T00:00:00.000Z'),
            y: 298000,
          },
          {
            x: new Date('2020-03-10T00:00:00.000Z'),
            y: 299000,
          },
        ],
        color: '#13a10e',
      },
    ],
  };

  const rootStyle = { width: `${700}px`, height: `${300}px` };
  const margins = { left: 35, top: 20, bottom: 35, right: 20 };

  return (
    <>
      <div style={rootStyle}>
        <LineChart
          data={data}
          legendsOverflowText={'Overflow Items'}
          yMinValue={150000}
          yMaxValue={400000}
          height={300}
          width={700}
          margins={margins}
          getCalloutDescriptionMessage={_calculateCalloutDescription}
          enablePerfOptimization={true}
        />
      </div>
    </>
  );
};

export const GapsRTL = getStoryVariant(Gaps, RTL);

export const GapsDarkMode = getStoryVariant(Gaps, DARK_MODE);
