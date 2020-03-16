1、可以使用属性选择器
	
      input[type=text]{
           color: red;
      }

2、属性选择器的高级用法

	/* class^= 字符A  表示 字符A 处于开始位置都可以匹配，类名以like开始的 */
	 div[class^=like]{
            color: red;
     }
     /* class $= 字符B  表示 字符B 处于结束位置都可以匹配 类名以liao开始的*/
     div[class$=liao]{
            color: green;
     }
     /* class *= 字符C  表示 字符C 处于任意位置都可以匹配 类名只要包含 */
     div[class*=it]{
            color: blue;
     }

3、标签显示模式

	块级标签：每个块元素通常都会独自占据一整行或多整行，可以对其设置宽度、高度、对齐等属性，常用于网
	
			 页布局和网页结构的搭建。

			 常见标签：<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>

			 宽度默认是容器的100%；


	行内元素：行内元素（内联元素）不占有独立的区域，仅仅靠自身的字体大小和图像尺寸来支撑结构，一般不

			 可以设置宽度、高度、对齐等属性，常用于控制页面中文本的样式。

			 特点：设置宽、高无效，但水平方向的padding和margin可以设置，垂直方向的无效；默认的宽度

			 是本身的宽度（不可以添加块级标签）

	行内块级元素：在行内元素中有几个特殊的标签，比如：<img />、<input />、<td>，可以在同一行显示，

			 也可以对它们设置宽高和对齐属性

4、盒子模型

	盒子模型:每个矩形都由元素的内容、内边距（padding）、边框（border）和外边距（margin）组成。

			CSS3中可以通过box-sizing 来指定盒模型，即可指定为content-box、border-box，这样我们计算
	
			盒子大小的方式就发生了改变。
	
	content-box：盒子大小为 width + padding + border  

	border-box:padding 和 border 是包含到width里面的

5、浮动

	标准流:标准流实际上就是一个网页内标签元素正常从上到下，从左到右排列顺序

	浮动：目的让多个块级元素能够在同一行上显示

		 特性1：浮动的元素总是找离它最近的父级元素对齐；但是不会超出内边距的范围。

		 特性2：浮动的元素排列位置，跟上一个块级元素有关 

			   如果上一个元素是标准流，则该浮动元素的顶部会和上一个元素的底部对齐

			   如果上一个元素有浮动，则该浮动元素顶部会和上一个元素的顶部对齐

		特性3：一个父盒子里面的子盒子如果需要一行对齐，只要其中一个子级有浮动，那么其它子级都需要浮动，样才能一行对齐显示。

6、清除浮动原因

	原因:由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响，为了解决这些问题，此时就

		 需要在该元素中清除浮动。
		
		清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题； 只要把浮动的盒子圈到里面，让父

		盒子闭合出口和入口不让它们出来影响其他元素。

7、清除浮动的方法

	额外标签法:在浮动的元素后添加div标签，设置属性clear: both;这是官方推荐的做法，但是添加额外标签

	父级添加overflow属性：overflow属性可以设置值为 hidden|auto|scroll 
		
			内容增多时候导致内容被隐藏掉，无法显示需要溢出的元素

	after伪元素:给父元素添加类名clearfix， 

			.clearfix:after {  content: "."; display: block; height: 0; clear: both; visibility: hidden;  }   

 			.clearfix {*zoom: 1;}   /* IE6、7 专有 */

	before和after双伪元素：给父元素添加类名clearfix

			.clearfix:before, .clearfix:after {
                content:"";
                display:table;
            }
            .clearfix:after {
                clear:both;
            }
            .clearfix {
                *zoom:1;
            }
	
8、防止拖拽文本域resize

9、文字处理

	word-break:自动换行；主要处理英文

			normal   使用浏览器默认的换行规则

			break-all   允许在单词内换行

			keep-all    只能在半角空格或连字符处换行

	white-space：主要处理中文

			normal ：默认处理方式

			nowrap :  强制在同一行内显示所有文本，直到文本结束或者有br标签对象才换行


	text-overflow 文字溢出

10、vertical-align： baseline |top |middle |bottom（重点）

	vertical-align 不影响块级元素中的内容对齐，它只针对于行内元素或者行内块元素，特别是行内块元素

	通常用来控制图片/表单与文字的对齐

11、去除图片底侧空白缝隙

	 图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样会造成一个问题，就是图片底侧会有一个

	 空白缝隙。

	 解决方法:
	
		1）给img vertical-align:middle | top等等，让图片不要和基线对齐

		2）给img 添加 display：block; 转换为块级元素就不会存在问题了

	
	

	

	



	