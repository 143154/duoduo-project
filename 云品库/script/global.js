/*
全局js事件
https://docs.apicloud.com/Client-API/api11
*/

// 关闭页面
function closeWin() {
  api.closeWin();
}

function $(id) {
  return document.getElementById(id);
}

//打开win
function openWin(url,name,param) {
  api.openWin({
      name: name || 'page2',
      url: url,
      pageParam: param
  });
}

// 打开navigationBar
function openNavTabWin(name,url,title,param) {
  api.openTabLayout({
    name: name,
    url: url,
    title: title,
    pageParam: param,
    hideNavigationBar: false,
    navigationBar: {
        background: '#fff',
        color: '#000'
    }
  });
}

// 关闭frame
function closeFrame() {
  api.closeFrame();
}

// 商城tabbar切换
function fnSetNavMenuIndex(index_) {
  api.setFrameGroupIndex({
      name: 'mallFrameGroup',
      index: index_,
      scroll: true
  });
}

/**
 * fnDataToView - doT渲染视图
 *
 * @param  {String} container 视图容器
 * @param  {Object} data      数据
 * @param  {String} template  模版id
 */
function fnDataToView(container, data, template, cb) {
  var conDom = $api.byId(container);
  var temp = doT.template($api.byId(template).innerHTML);
  var resultText = temp(data);
  $api.html(conDom, resultText);

  setTimeout(function() {
    typeof cd === 'function' && cb()
  }, 600)
}

/**
 * fnAjax - 获取数据
 *
 * @param  {String} url    接口地址
 * @param  {String} method 请求方式
 * @param  {Object} param  请求参数
 * @return {type}        description
 */
function fnAjax(url, method, param) {
  return new Promise(function(resolve,reject) {
    api.ajax({
        url: 'http://ypk.dd371.com/api/' + url,
        method: method,
        headers: {
          token: '50a00a9b8d3402ed4f1b3ed4b890294b',
          uid:$api.getStorage('uid') || null
        },
        dataType: 'JSON',
        data: param || {}
    },function(ret, err){
        if (ret) {
            resolve(ret);
        } else {
            reject(err);
        }
    });
  })
}
// 验证是否登录
function isLogin() {
  let uid = $api.getStorage('uid');
  return new Promise(function(resolve, reject) {
    if(uid) {
      resolve(uid);
    }else {
      reject();
    }
  })
}
