setTimeout(function(){
	videosInit()
},1000)

function videosInit() {

	// 监听获取视频标签
	var videos = document.querySelector('#my-video_html5_api')
	
	// 获取视频总长度
	var videoTime = Math.floor(videos.duration);
	
	//创建元素
	var divs = document.createElement("div");
	divs.className = 'divs'
	document.body.appendChild(divs);

	// 如果 当前时间段播放值 大于 视频总长度 即点击下一页
	var timer = setInterval(function() {
		// 获取当前时间段播放值
		var videoCurrentTime = videos.currentTime;
		
		var mask = document.querySelector('.divs')
		// console.log(videoCurrentTime, videoTime)
		mask.innerHTML = '<div style="position: fixed;top: 5%;right: 5%;width: 250px;text-align: center; background: rgba(255,255,255,1);border: solid 1px #000;border-radius: 10px;color: #333;z-index:99999;box-shadow: 10px 10px 30px rgba(0,0,0,.2);"><br>小陆插件:自动刷课<br><br>当前播放至 <span style="font-weight: 800;">'+ videoCurrentTime +' </span>秒<br><br>视频总长度:<span style="font-weight: 800;">'+ videoTime +'</span>秒<br><br></div>'
		
		if (videoCurrentTime + 2 > videoTime) {
			clearInterval(timer)
			// 监听点击按钮下一个视频地址
			var videosBtn = document.querySelector('a[aria-describedby="msf0-next-desc"]')
			var url = videosBtn.href
			window.location.href = url
			setTimeout(function(){
				videosInit()
			},1000)
		}
	}, 10)
}