Page({
  data:{
    // text:"这是一个页面"

    imgUrls: [
      "/assets/img/001.jpg",
      "/assets/img/002.jpg",
      "/assets/img/003.jpg",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies:[],   //定义一个数组 获取得到的信息
    hidden:false    //加载load显示 还是隐藏 默认出现
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovie();
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
  //封装没一个单独的processSubject
  processSubject(subject){
      var title = subject.title;
      var directors = subject.directors;
      var directorStr = "";
      for(var index in directors){
          directorStr = directorStr + directors[index].name + " / ";
      }
      if(directorStr !=""){
          directorStr = directorStr.substring(0,directorStr.length -2);
      }
      var casts = subject.casts;
      var castStr = "";
      for(var index in casts){
          castStr = castStr + casts[index].name + " / ";
      }
      if(castStr !=""){
          castStr = castStr.substring(0,castStr.length -2);
      }

      var genres = subject.genres;
      var genresStr = "";
      for(var index in genres){
          genresStr = genresStr + genres[index] + " / ";
      }
      if(genresStr !=""){
          genresStr = genresStr.substring(0,genresStr.length -2);
      }
      var year = subject.year;

      //拼接起来
      var text = "名称：" + title +"\n导演：" + directorStr + "\n主演：" + castStr + "\n类型：" + genresStr + "\n上映年份：" + year + "中国大陆";
      subject.text = text;  //subject创建text属性  属性值为text的值
  },

  //封装一个处理 subjects 数据的方法
  processSubjects(subjects){
      for(var i=0;i<subjects.length;i++){
          var subject = subjects[i];
          this.processSubject(subject);
      }
  },

  loadMovie:function(){
      var self = this;
      wx.request({
          url:'https://api.douban.com/v2/movie/in_theaters',
          header:{
              "Content-Type":"application/json"
          },
          success:function(res){
              var subjects = res.data.subjects;
              self.processSubjects(subjects);
              self.setData({movies:subjects,hidden:true});
          }
      })
  }
})