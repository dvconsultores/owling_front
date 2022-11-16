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
import gql from 'graphql-tag'
import moment from 'moment'
import computeds from '~/mixins/computeds'

// autogenerate series functioin for style test
// function generateDayWiseTimeSeries(baseval, count, yrange) {
//   let i = 0;
//   const series = [];
//   while (i < count) {
//     const
//       x = baseval,
//       y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

//     series.push([x, y]);
//     baseval += 86400000;
//     i++;
//   }
//   return series;
// }
// autogenerate series functioin for style test

export default {
  name: "StatsChartComponent",
  mixins: [computeds],
  data() {
    return {
      // dataControlsChart: ["this week", "this month", "all-time"],
      dataControlsChart: ["this week"],
      selection: 0,
      // series
      chartSeries: [
        // {
        //   name: '',
        //   data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 60
        //   })
        // },
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
              [, value] = w.globals.initialSeries[seriesIndex].data[dataPointIndex]

            // const
            //   [dateEpoch, value] = w.globals.initialSeries[seriesIndex].data[dataPointIndex],
            //   date = new Date(dateEpoch)

            // const fullDate = (moment(date).format('YYYY-MM-DD'))

            return `<span>Responses: <b>${value}</b></span>`;
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
    this.getGrafic({id: "4"})
  },
  methods: {
    async getGrafic (item) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const ALL_CHARACTERS_QUERY = gql`
        query ALL_CHARACTERS_QUERY($fecha: BigInt, $formId: String) {
          submitForms(where: {fecha_gte: $fecha, form_id: $formId}, first: 1000) {
            answers
            fecha
            final_image
            final_result
            form_id
            id
            total_points
            wallet_id
          }
        }
      `;

      const num = 7

      const epoch = moment().subtract(num, 'd').valueOf()*1000000

      // const fecha = (moment(epoch/1000000).format('YYYY-MM-DD'))

      const res = await clientApollo.query({
        query: ALL_CHARACTERS_QUERY,
        variables: {fecha: String(epoch), formId: item.id},
      })

      const datos = res.data.submitForms

      for (let i = 0; i < datos.length; i++) {
        datos[i].date = moment(datos[i].fecha/1000000).format('YYYY-MM-DD')
        // datos[i].year = moment(datos[i].fecha/1000000).format('YYYY')
        // datos[i].month = moment(datos[i].fecha/1000000).format('MM')
        // datos[i].day = moment(datos[i].fecha/1000000).format('DD')
      }

      // const now = Date.now()
      // let dayNow = (moment(now).format('DD'))
      // const monthNow = (moment(now).format('MM'))
      // const yearNow = (moment(now).format('YYYY'))

      // new Date("2016-3-17").valueOf() 

      const seriesData = [];
      
      for (let i = 0; i < num; i++) {
        const subtract = moment().subtract(i, 'd').valueOf()*1000000
        console.log(subtract)
        const fecha = (moment(subtract/1000000).format('YYYY-MM-DD'))
        console.log(fecha)
        const epochTime = new Date(fecha).valueOf() 
        console.log(epochTime)

        let contador = 0

        for (let j = 0; j < datos.length; j++) {
          if (fecha === datos[j].date) {
            contador = contador + 1
          }
        }

        seriesData.push([epochTime, contador]);

      }

      this.chartSeries = [
        {
          name: 'Responses',
          data: seriesData
        },
      ]
    },
    updateData(timeline) {
      switch (timeline) {
        case 'this week': {
          // this.$refs.chart.zoomX(new Date('28 Jan 2017').getTime());
          this.selection = 0
          break
        }
        case 'this month': {
          // this.$refs.chart.zoomX(new Date('27 Sep 2017').getTime());
          this.selection = 1
          break
        }
        default: {
          // this.$refs.chart.resetSeries();
          this.selection = 2
        }
      }
    },
  },
};
</script>

<style src="~/assets/styles/components/charts.scss" lang="scss" />
