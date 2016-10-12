
  //封装没一个单独的processSubject
 function  processSubject(subject){
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
  }

  //封装一个处理 subjects 数据的方法
  function processSubjects(subjects){
      for(var i=0;i<subjects.length;i++){
          var subject = subjects[i];
          this.processSubject(subject);
      }
  }

module.exports = {
  processSubject:processSubject,
  processSubjects:processSubjects
}
