var subjectUtil = require("../../utils/subjectUtil.js");
Page({
  data:{
    // text:"这是一个页面"
    inputVal:"",
    movies:[],
    hidden:true,
    modalHidden:true
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
  detail:function(e){
    getAPP().detail(e);
  },
  bindKeyInput:function(e){
      this.setData({inputVal:e.detail.value});
  },
  search:function(){
      var page = this;
      if(page.data.modalHidden == "")
      {
          page.setData({modalHidden:false});
          return;
      }

      page.setData({hidden:false});
      wx.request({
          url:"https://api.douban.com/v2/movie/search?q="+page.data.inputVal,
          header:{
              "Content-Type":"application/json"
          },
          success:function(res){
              var subjects = res.data.subjects;
              subjectUtil.processSubjects(subjects);
              page.setData({movies:subjects,hidden:true});
          }
      })
  },
  hideModal:function(){
      this.setData({hideModal:true});
  },
  detail:function(e){
      wx.navigationTo({
          url:"../detail/detail"
      })
  }
})