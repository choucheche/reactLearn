const MixinLog = {
//默认的组 MixinLog
  componentDidMount(){
  //生命周期，当组件加载完毕时，自动出 console.log
    console.log('MixinLog componentDidMount');
  },
  log(){
    alert("abcdefg...");
  }
}

export default MixinLog
/*让其他的类取使用它*/
