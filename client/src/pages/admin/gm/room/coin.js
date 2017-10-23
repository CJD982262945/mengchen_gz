/**
 * Created by liudian on 9/18/17.
 */

import '../../common.js'
import MyVuetable from '../../../../components/MyVuetable.vue'
import MyToastr from '../../../../components/MyToastr.vue'

Vue.component('custom-actions', {
  template: `
    <div class="row">
        <button class="btn btn-small btn-danger btn-flat" @click="dismissRoom(rowData)">
            解散房间
        </button>
        <div class="overlay" v-show="loading"><i class="fa fa-refresh fa-spin"></i></div>
        <my-toastr ref="toastr"></my-toastr>
    </div>`,
  components: {
    MyToastr,
  },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  data: function () {
    return {
      loading: false,
    }
  },
  methods: {
    dismissRoom (rowData) {
      let _self = this
      let toastr = this.$refs.toastr
      this.loading = true

      axios.delete(`/admin/api/game/room/coin/${rowData.roomid}`)
        .then(function (response) {
          _self.loading = false
          return response.data.error
            ? toastr.message(response.data.error, 'error')
            : toastr.message(response.data.message)
        })
    },
  },
})

new Vue({
  el: '#app',
  components: {
    MyVuetable,
  },
  data: {
    eventHub: new Vue(),
    tableUrl: '/admin/api/game/room/coin',
    tableFields: [
      {
        name: 'roomid',
        title: '房间ID',
      },
      {
        name: 'players',
        title: '玩家',
      },
      {
        name: '__component:custom-actions',
        title: '操作',
        titleClass: 'text-center',
        dataClass: 'text-center',
      },
    ],
  },

  mounted: function () {
    this.$root.eventHub.$on('vuetableDataError', (data) => alert(data.error))
  },
})