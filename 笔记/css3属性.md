1、过度

	transition: 要过渡的属性  花费时间  运动曲线  何时开始;

				如果有多组属性变化，还是用逗号隔开。

				如果想要所有的属性都变化过渡， 写一个all 就可以

				可以简写为属性 花费时间

2、2D

	transform是CSS3中很有代表性的特征之一，可以实现元素的位移、旋转、倾斜、缩放，甚至支持矩阵方式

	translate(x, y):

		    translate(x,y) 水平方向和垂直方向同时移动  (定位盒子居中)

			translateX(x) 仅水平方向移动（X轴移动）

			translateY(Y) 仅垂直方向移动（Y轴移动）

	scale(x, y) 缩放:

			scale(X,Y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）

			scaleX(x)元素仅水平方向缩放（X轴缩放）

			scaleY(y)元素仅垂直方向缩放（Y轴缩放）

			scale()的取值默认的值为1，当值为0.01到0.99，可以使一个元素缩小；而任何大于或等于1.01的

			值，可以使一个元素放大

			 transform: scale(2);

	rotate(deg):旋转

			可以对元素进行旋转，正值为顺时针，负值为逆时针；

			transform:rotate(30deg);

3、3D  transform 省略

4、动画

	animation: 动画名称 动画时间 运动曲线  何时开始  播放次数  是否反方向;
	

		div {
            width: 100px;
            height: 100px;
            background-color: purple;
            border-radius: 50%;
            animation: loop 2s infinite alternate;
        }

        @keyframes loop {
            0% {
                transform: translate3d(0, 0, 0);
            }
            25% {
                transform: translate3d(600px, 0, 0);
            }
            50% {
                transform: translate3d(600px, 200px, 0);
            }
            75% {
                transform: translate3d(0, 200px, 0);
            }
            100% {
                transform: translate3d(0, 0, 0);
            }
        }

5、绘制三角形

	width、height设置为0 ，设置Border，让三边隐藏

	border-top: 50px solid transparent;

6、rem

	html根元素设置font-size属性

