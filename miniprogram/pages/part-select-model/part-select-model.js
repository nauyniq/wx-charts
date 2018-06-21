Page({

  data: {
    modelInfo: {},
  },

  onLoad: function (options) {
    let modelInfo = JSON.parse(options.modelInfo)
    this.setData({
      modelInfo,
    })
    console.log(this.data.modelInfo);
  },


  onShow: function () {
    
  },

  goBackFn(e) {
    let pages = getCurrentPages();

    pages[pages.length - 2].setData({
      modelId: e.detail.modelId,
      selectModelState: 1,
      showModal: 0,
      pageState: 'series',
      noModelInfo: false,
      modelInfo: e.detail.modelInfo,
      noSeriesId: false,
    });
    // 回到配件列表页面也得触发配件列表页面中的配件列表组件
    // 就是父组件出发子组件的事件
    
    // pages[pages.length - 2].getPartListFromEpc();
    // pages[pages.length - 2].getModelByIdFn();
    wx.navigateBack({
      delta: 1,
    })
  }

})