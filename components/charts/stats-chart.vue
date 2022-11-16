<template>
  <div class="charts fill">
    <v-btn-toggle v-model="selection" class="charts-controls" background-color="transparent" mandatory>
      <v-btn
        v-for="item in dataControlsChart" :key="item"
        @click="updateData(item)">
        {{item}}
      </v-btn>
    </v-btn-toggle>
    
    <v-sheet color="var(--secondary)" class="divcol pb-0">
      <ApexChart
        ref="chart"
        width="100%"
        height="257px"
        type="line"
        :options="chartOptions"
        :series="chartSeries"
      ></ApexChart>
    </v-sheet>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

// autogenerate series functioin for style test
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const
      x = baseval,
      y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
// autogenerate series functioin for style test

export default {
  name: "StatsChartComponent",
  mixins: [computeds],
  data() {
    return {
      dataControlsChart: ["this week", "this month", "all-time"],
      selection: 2,
      // series
      chartSeries: [
        {
          name: '',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
      ],
      // options
      chartOptions: {
        defaultLocale: 'en',
        grid: {
          show: true,
        },
        colors: ["#5803C5"],
        chart: {
          stacked: false,
          toolbar: {
            show: false,
            autoSelected: "zoom",
          },
        },
        stroke: {
          curve: 'smooth',
          lineCap: 'butt',
          width: 4.5,
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: "hollow",
          colors: ["#000"],
          strokeColors: ["#fff"],
          strokeWidth: 4,
          hover: {
            size: 8,
          },
        },
        tooltip: {
          custom({series, seriesIndex, dataPointIndex, w}) {
            const
              [dateEpoch, value] = w.globals.initialSeries[seriesIndex].data[dataPointIndex],
              date = new Date(dateEpoch),
              day = date.getDate(),
              month = date.getMonth(),
              hr = date.getUTCHours(),
              m = "0" + date.getUTCMinutes(),
              time = `${hr}:${m.substr(-2)}`,
            fullDate = `${month.toMonthName()} ${day}, ${time}`;

            return `<span>${fullDate}</span>
            <span>Price: <b>$${value}</b></span>`;
          },
          marker: {
            show: false,
          },
          style: {
            fontSize: '11px',
          },
        },
        legend: {
          show: false,
          position: 'top',
          horizontalAlign: "start",
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '16px',
              fontFamily: 'Pixelmix, sans-serif',
              fontWeight: 800,
            },
          }
        },
        xaxis: {
          type: "datetime",
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            style: {
              fontSize: '16px',
              fontFamily: 'Pixelmix, sans-serif',
              fontWeight: 800,
            },
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          }
        },
      },
    }
  },
  mounted() {
    console.log(this.chartSeries)
  },
  methods: {
    updateData(timeline) {
      switch (timeline) {
        case 'this week': {
          this.$refs.chart.zoomX(new Date('28 Jan 2017').getTime());
          this.selection = 0
          break
        }
        case 'this month': {
          this.$refs.chart.zoomX(new Date('27 Sep 2017').getTime());
          this.selection = 1
          break
        }
        default: {
          this.$refs.chart.resetSeries();
          this.selection = 2
        }
      }
    },
  },
};
</script>

<style src="~/assets/styles/components/charts.scss" lang="scss" />
