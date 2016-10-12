var subRequire = require('../../utils/subjectUtils.js');     //引入公用的js
Page({
  data:{
    // text:"这是一个页面"
    movies:[],   //定义一个数组 获取得到的信息
    hidden:false    //加载load显示 还是隐藏 默认出现
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovie();   //调用函数 加载数据
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  loadMovie:function(){
      var self = this;
      wx.request({
          url:'https://api.douban.com/v2/movie/top250',
          header:{
              "Content-Type":"application/json"
          },
          success:function(res){
              var subjects = res.data.subjects;
              subRequire.processSubjects(subjects);
              self.setData({movies:subjects,hidden:true});
          }
      })
  }
})