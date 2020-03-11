// pages/Notifications/Notifications.js
import usersdata from '../../static/js/notifications.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    usersdata: null,
    btnBackground: "",
    btnColor: ""
  },
  btnclick(arg) {
    let ifCopied = arg.currentTarget.dataset.item.copied
    let myid = arg.currentTarget.dataset.item.id
    this.data.usersdata.forEach((item, index, arr) => {
      if(this.data.usersdata[index].id === myid) {
        let userCopy = 'usersdata[' + index + '].copied'
        let userIfCopy = 'usersdata[' + index + '].ifCopy'
        let btnBackgroundColor = 'usersdata[' + index + '].background'
        let btnColor = 'usersdata[' + index + '].color'
        if(this.data.usersdata[index].copied == false) {
          console.log(userCopy)
          this.setData({
            [userCopy]: true,
            [userIfCopy]: "copied",
            [btnBackgroundColor]: "#F8F8F8",
            [btnColor]: "#33FF99"
          })
          console.log(this.data.usersdata)
        }else {
          this.setData({
            [userCopy]: false,
            [userIfCopy]: "copy",
            [btnBackgroundColor]: "#FF0000",
            [btnColor]: "#FFFFFF"
          })
        }
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function checkCopy() {
      usersdata.forEach(function(item) {
        if(item.copied == false) {
          item.background = '#FF0000',
          item.color = "#FFFFFF",
          item.ifCopy = "copy"
        }
        else {
          item.background = '#F8F8F8',
          item.color = "#33FF99",
          item.ifCopy = "copied"
        }
      })
      return usersdata
    }
    this.setData({
      usersdata: checkCopy()
    })
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})