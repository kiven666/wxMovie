var subRequire = require('../../utils/subjectUtils.js');
Page({
  data:{
    // text:"这是一个页面"
    inputVal:'',
    movies:[],   //定义一个数组 获取得到的信息
    hidden:true,   //点击搜索是出现 loading效果 默认隐藏
    modalHidden:true    //弹出提示框  默认隐藏
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  bindKeyInput:function(e){
    //   console.log(e);
      this.setData({inputVal:e.detail.value});
  },
  search:function(){
      var self = this;
      if(this.data.inputVal==''){   //如果没有输入内容 则弹出提示框 并return
          this.setData({modalHidden:false});
          return;
      }
      this.setData({hidden:false});
      wx.request({
          url:'https://api.douban.com/v2/movie/search?q='+ self.data.inputVal,
          header:{
              "Content-Type":"application/json"
          },
          success:function(res){
              var subjects = res.data.subjects;
              subRequire.processSubjects(subjects);
              self.setData({movies:subjects,hidden:true});
          }
      })
  },
  hideModal:function(){
      this.setData({modalHidden:true});
  },
  detail:function(e){
    getApp().detail(e);
  },
})