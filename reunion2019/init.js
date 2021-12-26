/**
* Responsive
* 
* author: Thilo Ilg
* version: 1.1.6
* 
**/

/** 
* --- jAlbumGlobals ---
* jAlbumGlobals is responsible for constant parameter of the skin.
* In the process of creating an album the jAlbum parser will overwrite 
* the variables according to the skin with the selected ones in the
* program. jAlbumGlobals also includes global variables which describe
* the state of the skin like if it is embedded, viewed on a mobile device,
* online or in filesystem etc.
*/
var jAlbumGlobals1565572700355 = (function () {

	var styles = ["dark.css", "light.css", "transparent.css"]; // styles

	var mobile = isMobile(); // is the skin viewed on a mobile device
	var online = isOnline(); // is the skin viewed online or in the filesystem
	var jAlbumURL = getURL(); // what's the current url?

	var stylePath = ""; //path points to the styles folder
	var resPath = ""; // path points to the res folder

	var credits = "jAlbum - customizable image galleries"; // should skin show credits in footer
	var albumTitle = "reunion2019"; // what's the album title?
	var contentPath = ""; // path points to the skin folder
	var imgHoverScaleFactor = "scale(1.1)"; // scale factor of hovering an element

	var folderTitleUp = true; // positioning of folder title, under or above folder
	var folderImgCount = false; // says if folder deep count should be shown
	var maxImgInRow = 10; // restricts the number of elements in a row
	var imgBorderSize = 3; // define border size of element
	var imgBoxSize = 175; // defines size of container of element
	var showFolderName = false; // says if folder name should be displayed
	var textSize = 11; // defines text size of whole page
	var showComments = true; // defines if comments should be shown in slideshow
	var slideBorderSize = 0;
	var slideBorderColor = "#ff000000";
	var slideMarginSize = 0; // Margin around full screen image.
	var style = "dark.css";

	var dataTree = {"path":"reunion2019","counters":{"total":41,"images":41,"files":41},"thumb":{"path":"thumbs\/DSCF7900.JPG","width":256,"height":171},"objects":[{"path":"DSCF7900.JPG","image":{"path":"slides\/DSCF7900.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF7900.JPG","width":256,"height":171},"fileSize":11953015,"name":"DSCF7900.JPG","fileDate":"2019-07-07T14:26:05.664Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-27T20:05:11.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF7966.JPG","image":{"path":"slides\/DSCF7966.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF7966.JPG","width":256,"height":171},"fileSize":14682216,"name":"DSCF7966.JPG","fileDate":"2019-07-07T14:28:35.691Z","category":"image","camera":{"aperture":16.0,"exposureTime":"1\/250s","originalDate":"2019-06-28T13:15:15.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF7969.JPG","image":{"path":"slides\/DSCF7969.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF7969.JPG","width":256,"height":171},"fileSize":13882803,"name":"DSCF7969.JPG","fileDate":"2019-07-07T14:29:07.641Z","category":"image","camera":{"aperture":16.0,"exposureTime":"1\/250s","originalDate":"2019-06-28T13:21:19.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8005.JPG","image":{"path":"slides\/DSCF8005.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8005.JPG","width":256,"height":171},"fileSize":12678680,"name":"DSCF8005.JPG","fileDate":"2019-07-07T14:30:03.687Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:22:50.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8009.JPG","image":{"path":"slides\/DSCF8009.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8009.JPG","width":256,"height":171},"fileSize":12124524,"name":"DSCF8009.JPG","fileDate":"2019-07-07T14:30:44.273Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:24:33.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8012.JPG","image":{"path":"slides\/DSCF8012.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8012.JPG","width":256,"height":171},"fileSize":12707358,"name":"DSCF8012.JPG","fileDate":"2019-07-07T14:31:07.502Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:25:06.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8015.JPG","image":{"path":"slides\/DSCF8015.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8015.JPG","width":256,"height":171},"fileSize":12047753,"name":"DSCF8015.JPG","fileDate":"2019-07-07T14:31:36.717Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:25:38.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8017.JPG","image":{"path":"slides\/DSCF8017.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8017.JPG","width":256,"height":171},"fileSize":11970798,"name":"DSCF8017.JPG","fileDate":"2019-07-07T14:31:54.618Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:30:13.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8022.JPG","image":{"path":"slides\/DSCF8022.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8022.JPG","width":256,"height":171},"fileSize":13643855,"name":"DSCF8022.JPG","fileDate":"2019-07-07T14:32:20.715Z","category":"image","camera":{"aperture":13.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:35:42.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8023.JPG","image":{"path":"slides\/DSCF8023.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8023.JPG","width":256,"height":171},"fileSize":13526535,"name":"DSCF8023.JPG","fileDate":"2019-07-07T14:32:38.803Z","category":"image","camera":{"aperture":13.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:35:45.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8028.JPG","image":{"path":"slides\/DSCF8028.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8028.JPG","width":256,"height":171},"fileSize":14266457,"name":"DSCF8028.JPG","fileDate":"2019-07-07T14:33:13.325Z","category":"image","camera":{"aperture":14.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:37:34.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8051.JPG","image":{"path":"slides\/DSCF8051.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8051.JPG","width":256,"height":171},"fileSize":11803905,"name":"DSCF8051.JPG","fileDate":"2019-07-07T14:34:14.169Z","category":"image","camera":{"aperture":2.8,"exposureTime":"1\/30s","originalDate":"2019-06-28T22:15:47.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8048.JPG","image":{"path":"slides\/DSCF8048.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8048.JPG","width":256,"height":171},"fileSize":16229631,"name":"DSCF8048.JPG","fileDate":"2019-07-07T14:34:35.634Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T21:55:42.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8042.JPG","image":{"path":"slides\/DSCF8042.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8042.JPG","width":256,"height":171},"fileSize":11929213,"name":"DSCF8042.JPG","fileDate":"2019-07-07T14:35:37.562Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T20:31:29.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8040.JPG","image":{"path":"slides\/DSCF8040.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8040.JPG","width":256,"height":171},"fileSize":10541124,"name":"DSCF8040.JPG","fileDate":"2019-07-07T14:35:59.541Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T20:31:14.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8034.JPG","image":{"path":"slides\/DSCF8034.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8034.JPG","width":256,"height":171},"fileSize":15522810,"name":"DSCF8034.JPG","fileDate":"2019-07-07T14:36:38.513Z","category":"image","camera":{"aperture":14.0,"exposureTime":"1\/30s","originalDate":"2019-06-28T19:38:32.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8064.JPG","image":{"path":"slides\/DSCF8064.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8064.JPG","width":256,"height":171},"fileSize":11668468,"name":"DSCF8064.JPG","fileDate":"2019-07-07T14:38:21.404Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-06-29T10:13:22.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8072.JPG","image":{"path":"slides\/DSCF8072.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8072.JPG","width":256,"height":171},"fileSize":12219572,"name":"DSCF8072.JPG","fileDate":"2019-07-07T14:39:01.910Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-06-29T11:48:30.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8073.JPG","image":{"path":"slides\/DSCF8073.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8073.JPG","width":256,"height":171},"fileSize":11783730,"name":"DSCF8073.JPG","fileDate":"2019-07-07T14:39:40.760Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-06-29T11:58:59.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8103.JPG","image":{"path":"slides\/DSCF8103.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8103.JPG","width":256,"height":171},"fileSize":13716546,"name":"DSCF8103.JPG","fileDate":"2019-07-07T14:40:36.905Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-06-29T12:38:27.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8108.JPG","image":{"path":"slides\/DSCF8108.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8108.JPG","width":256,"height":171},"fileSize":14008766,"name":"DSCF8108.JPG","fileDate":"2019-07-07T14:41:32.115Z","category":"image","camera":{"aperture":11.0,"exposureTime":"1\/500s","originalDate":"2019-06-29T14:23:45.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8109.JPG","image":{"path":"slides\/DSCF8109.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8109.JPG","width":256,"height":171},"fileSize":14096591,"name":"DSCF8109.JPG","fileDate":"2019-07-07T14:41:46.685Z","category":"image","camera":{"aperture":11.0,"exposureTime":"1\/500s","originalDate":"2019-06-29T14:23:53.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8113.JPG","image":{"path":"slides\/DSCF8113.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8113.JPG","width":256,"height":171},"fileSize":11514548,"name":"DSCF8113.JPG","fileDate":"2019-07-07T14:42:06.763Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/250s","originalDate":"2019-06-29T15:28:07.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8126.JPG","image":{"path":"slides\/DSCF8126.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8126.JPG","width":256,"height":171},"fileSize":12291340,"name":"DSCF8126.JPG","fileDate":"2019-07-07T14:42:56.572Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/250s","originalDate":"2019-06-29T17:42:29.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8145.JPG","image":{"path":"slides\/DSCF8145.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8145.JPG","width":256,"height":171},"fileSize":12305782,"name":"DSCF8145.JPG","fileDate":"2019-07-07T14:43:55.122Z","category":"image","camera":{"aperture":16.0,"exposureTime":"1\/125s","originalDate":"2019-06-30T11:10:37.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8153.JPG","image":{"path":"slides\/DSCF8153.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8153.JPG","width":256,"height":171},"fileSize":15548022,"name":"DSCF8153.JPG","fileDate":"2019-07-07T14:44:27.40Z","category":"image","camera":{"aperture":11.0,"exposureTime":"1\/60s","originalDate":"2019-06-30T14:48:50.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8155.JPG","image":{"path":"slides\/DSCF8155.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8155.JPG","width":256,"height":171},"fileSize":10714462,"name":"DSCF8155.JPG","fileDate":"2019-07-07T14:44:49.730Z","category":"image","camera":{"aperture":11.0,"exposureTime":"1\/60s","originalDate":"2019-06-30T14:51:07.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8165.JPG","image":{"path":"slides\/DSCF8165.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8165.JPG","width":256,"height":171},"fileSize":12698918,"name":"DSCF8165.JPG","fileDate":"2019-07-07T14:45:38.473Z","category":"image","camera":{"aperture":16.0,"exposureTime":"1\/250s","originalDate":"2019-06-30T15:01:33.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8172.JPG","image":{"path":"slides\/DSCF8172.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8172.JPG","width":256,"height":171},"fileSize":15357898,"name":"DSCF8172.JPG","fileDate":"2019-07-07T14:46:09.21Z","category":"image","camera":{"aperture":16.0,"exposureTime":"1\/500s","originalDate":"2019-06-30T15:10:50.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8205.JPG","image":{"path":"slides\/DSCF8205.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8205.JPG","width":256,"height":171},"fileSize":13010081,"name":"DSCF8205.JPG","fileDate":"2019-07-07T14:47:37.573Z","category":"image","camera":{"aperture":8.0,"exposureTime":"1\/500s","originalDate":"2019-07-01T12:36:15.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8209.JPG","image":{"path":"slides\/DSCF8209.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8209.JPG","width":256,"height":171},"fileSize":15441504,"name":"DSCF8209.JPG","fileDate":"2019-07-07T14:48:02.977Z","category":"image","camera":{"aperture":8.0,"exposureTime":"1\/500s","originalDate":"2019-07-01T12:36:56.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8228.JPG","image":{"path":"slides\/DSCF8228.JPG","width":1024,"height":1536},"thumb":{"path":"thumbs\/DSCF8228.JPG","width":171,"height":256},"fileSize":13452478,"name":"DSCF8228.JPG","fileDate":"2019-07-07T14:49:19.821Z","category":"image","camera":{"aperture":14.0,"exposureTime":"1\/500s","originalDate":"2019-07-01T12:52:48.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8229.JPG","image":{"path":"slides\/DSCF8229.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8229.JPG","width":256,"height":171},"fileSize":12766519,"name":"DSCF8229.JPG","fileDate":"2019-07-07T14:49:39.688Z","category":"image","camera":{"aperture":14.0,"exposureTime":"1\/500s","originalDate":"2019-07-01T12:56:40.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8235.JPG","image":{"path":"slides\/DSCF8235.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8235.JPG","width":256,"height":171},"fileSize":13528022,"name":"DSCF8235.JPG","fileDate":"2019-07-07T14:50:04.100Z","category":"image","camera":{"aperture":8.0,"exposureTime":"1\/500s","originalDate":"2019-07-01T15:03:25.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8338.JPG","image":{"path":"slides\/DSCF8338.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8338.JPG","width":256,"height":171},"fileSize":11830315,"name":"DSCF8338.JPG","fileDate":"2019-07-07T14:51:39.505Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T12:03:06.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8253.JPG","image":{"path":"slides\/DSCF8253.JPG","width":1024,"height":1536},"thumb":{"path":"thumbs\/DSCF8253.JPG","width":171,"height":256},"fileSize":12457365,"name":"DSCF8253.JPG","fileDate":"2019-07-07T14:52:35.78Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T10:26:17.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8264.JPG","image":{"path":"slides\/DSCF8264.JPG","width":1024,"height":1536},"thumb":{"path":"thumbs\/DSCF8264.JPG","width":171,"height":256},"fileSize":10923762,"name":"DSCF8264.JPG","fileDate":"2019-07-07T14:53:11.760Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T10:40:10.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8268.JPG","image":{"path":"slides\/DSCF8268.JPG","width":1024,"height":1536},"thumb":{"path":"thumbs\/DSCF8268.JPG","width":171,"height":256},"fileSize":12223226,"name":"DSCF8268.JPG","fileDate":"2019-07-07T14:53:48.888Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T10:45:16.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8278.JPG","image":{"path":"slides\/DSCF8278.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8278.JPG","width":256,"height":171},"fileSize":13398538,"name":"DSCF8278.JPG","fileDate":"2019-07-07T14:55:04.167Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T11:07:47.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8285.JPG","image":{"path":"slides\/DSCF8285.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8285.JPG","width":256,"height":171},"fileSize":12158822,"name":"DSCF8285.JPG","fileDate":"2019-07-07T14:56:47.217Z","category":"image","camera":{"aperture":4.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T11:24:20.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}},{"path":"DSCF8293.JPG","image":{"path":"slides\/DSCF8293.JPG","width":1536,"height":1024},"thumb":{"path":"thumbs\/DSCF8293.JPG","width":256,"height":171},"fileSize":11838374,"name":"DSCF8293.JPG","fileDate":"2019-07-07T14:58:18.749Z","category":"image","camera":{"aperture":5.0,"exposureTime":"1\/30s","originalDate":"2019-07-03T11:26:59.0Z","cameraModel":"X100F","resolution":"6000 x 4000","cameraMake":"FUJIFILM","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"23mm"}}],"name":"reunion2019","comment":"McQuaid - Espada family reunion, Woodland Park, CO June 2019","fileDate":"2019-08-11T21:18:19.612Z"}; // includes all the album data in a json tree
	var stylePath = ""; 

	var widgetColor = getWidgetColor(); // get suggested color for widget support

	var uniqueId = new Date().getTime();

	/** check if page viewed on mobile device **/
	function isMobile(){
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
	}

	/** check if page viewed online or from file system **/
	function isOnline(){
		switch(window.location.protocol) {
		   case 'http:':
		   		return true;
		   case 'https:':
		     	return true;
		   case 'file:':
		    	return false;
		}
	}

	/** get current url of page **/
	function getURL(){
		var scripts = document.getElementsByTagName('script');
		for (var index = scripts.length-1; index >= 0; --index) {
			if (scripts[index].id == 'jAlbum') {
				var curr = scripts[index].src;
				return curr.substring(0, curr.lastIndexOf("/") + 1);
			}
		}
		return "";
	}

	/** get fidget color according to current style **/
	function getWidgetColor(){
		if(style == styles[0]) return "black";
		else return "white";
	}

	/** returns all the public variables and functions **/
	return {
		mobile: mobile,
		online: online,
		jAlbumURL: jAlbumURL,
		stylePath: stylePath,
		resPath: resPath,
		credits: credits,
		albumTitle: albumTitle,
		contentPath: contentPath,
		imgHoverScaleFactor: imgHoverScaleFactor,
		folderTitleUp: folderTitleUp,
		folderImgCount: folderImgCount,
		maxImgInRow: maxImgInRow,
		imgBorderSize: imgBorderSize,
		imgBoxSize: imgBoxSize,
		showFolderName: showFolderName,
		textSize: textSize,
		showComments: showComments,
		dataTree: dataTree,
		stylePath: stylePath,
		slideBorderSize: slideBorderSize,
		slideBorderColor: slideBorderColor,
		slideMarginSize: slideMarginSize,
		widgetColor: widgetColor,
		uniqueId: uniqueId
	};

})();

/** --- jAlbumInject ---
* jAlbumInject is responsible for copying html code into
* the website. Stylesheet includes will be printed into
* the header, the body will be printed to the position
* of the embed code.
*/
var jAlbumInject = (function () {

	appendToHead(injLink('res/css/normalize.min.css', 'stylesheet')); // normalizes browser specific stylesheet defaults
	appendToHead(injLink('res/css/custom.css', 'stylesheet')); // customized desgin of the skin, will be partly overwritten by style.css
	appendToHead(injLink('res/styles.css', 'stylesheet')); // different styles to the skin which change the appearance

	appendToHead(injMeta("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0")); // viewport handles mobile scaling size

	inj('<div id="Responsive' + jAlbumGlobals1565572700355.uniqueId + '" class="jAlbum Responsive">'); // Responsive id surrounds all code of the body of the skin
	inj('<div id="fullscreen"></div>'); // element where to add fullscreen
	inj('<div id="jAlbum-header"></div>'); // header container
	inj('<div id="jAlbum-content"></div>'); // content container
	inj('<div style="clear: both"></div>');

	inj('<div id="jAlbum-footer">'); // footer
	inj('<div class="left leaveFolder">');
	inj('<p><a onclick="jAlbumController.back();"> &#10096;</a></p>'); // go back button in footer
	inj('</div><div class="center"><p><a href="http://jalbum.net/">jAlbum - customizable image galleries</a> - '); // credits in footer
	inj('<a href="http://jalbum.net/skins/skin/Responsive">Responsive</a></p>'); // skin advertisement in footer
	inj('</div></div></div>'); // close footer

	inj('<script src="' + jAlbumGlobals1565572700355.jAlbumURL + 'res/libs/jquery-2.1.4.min.js"></script>'); // embets jQuery library
	inj('<script type="text/javascript">$(document).bind("mobileinit", function(){$.extend($.mobile , {autoInitializePage: false})});</script>'); // deactivates jQuery unnecessary mobile feature
	inj('<script src="' + jAlbumGlobals1565572700355.jAlbumURL + 'res/libs/jquery.mobile-1.4.5.min.js"></script>'); // includes jQuery Mobile
	inj('<script src="' + jAlbumGlobals1565572700355.jAlbumURL + 'res/libs/jquery.touchswipe.min.js"></script>'); // jQuery touchswipe plugin
	inj('<script src="' + jAlbumGlobals1565572700355.jAlbumURL + 'main.js" type="text/javascript"></script>'); // includes skin controller
	
	/** injects html code at embedded position **/
	function inj(html){
		document.write(html);
	}

	/** injects html code in header **/
	function appendToHead(elem){
		document.getElementsByTagName('head').item(0).appendChild(elem);
	}

	/** injects header of embedded page with stylesheet includes **/
	function injLink(path, rel){
		var elem = document.createElement("link");
		elem.href = jAlbumGlobals1565572700355.jAlbumURL + path;
		elem.rel = rel;

		return elem;
	}

	function injMeta(name, content){
		var elem = document.createElement("meta");
		elem.name = name;
		elem.content = content;

		return elem;
	}

})();


/** --- Widget Support---
* provides JavaScript code for jAlbum widget support
*/
window._jaWidgetBarColor = jAlbumGlobals1565572700355.widgetColor;

if(!document.getElementById('non-embedded')){ // check if embedded
	window._jaUrl = jAlbumGlobals1565572700355.jAlbumURL;
	_jaSkin = "Responsive";
_jaStyle = "dark.css";
_jaVersion = "18.3.1";
_jaGeneratorType = "desktop";
_jaLanguage = "en";
_jaPageType = "index";
_jaRootPath = ".";
_jaGuid = "1564946486609";
var jalbumWidgetContainer = document.createElement('div');
jalbumWidgetContainer.setAttribute('id','jalbumwidgetcontainer');
var jalbumWidgetScript = document.createElement("script");
jalbumWidgetScript.type = "text/javascript";
jalbumWidgetScript.src = "http"+("https:"==document.location.protocol?"s":"")+"://jalbum.net/widgetapi/load.js";
jalbumWidgetScript.async = true;
jalbumWidgetContainer.appendChild(jalbumWidgetScript);
document.body.appendChild(jalbumWidgetContainer);
 // get JavaScript code for widget
}
