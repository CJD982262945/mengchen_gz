new Vue({
  el: '#sidebar',
  data: {
    uri: {
      home: {
        isActive: false,
      },
      statement: {
        isActive: false,
        hourly: {
          isActive: false,
        },
        daily: {
          isActive: false,
        },
        monthly: {
          isActive: false,
        },
      },
      player: {
        isActive: false,
        list: {
          isActive: false,
        },
        'top-up': {
          isActive: false,
        },
      },
      gm: {
        isActive: false,
        notification: {
          isActive: false,
          marquee: {
            isActive: false,
          },
          login: {
            isActive: false,
          },
        },
        room: {
          isActive: false,
          friend: {
            isActive: false,
          },
          coin: {
            isActive: false,
          },
        },
        ai: {
          isActive: false,
          list: {
            isActive: false,
          },
        },
        whitelist: {
          isActive: false,
          list: {
            isActive: false,
          },
        },
      },
      stock: {
        isActive: false,
        'apply-request': {
          isActive: false,
        },
        'apply-list': {
          isActive: false,
        },
        'apply-history': {
          isActive: false,
        },
      },
      agent: {
        isActive: false,
        create: {
          isActive: false,
        },
        list: {
          isActive: false,
        },
      },
      'top-up': {
        isActive: false,
        admin: {
          isActive: false,
        },
        agent: {
          isActive: false,
        },
        player: {
          isActive: false,
        },
      },
      system: {
        isActive: false,
        log: {
          isActive: false,
        },
      },
    },
  },

  methods: {},

  created: function () {
    let _self = this
    let currentUri = location.href.match(/http:\/\/[\w.-]+\/admin\/([\w/-]+)/)[1]
      .split('/')

    //被访问的页面的菜单项会被设置为active
    currentUri.reduce(function (lastValue, currentValue) {
      lastValue[currentValue].isActive = true
      return lastValue[currentValue]
    }, _self.uri)
  },
})