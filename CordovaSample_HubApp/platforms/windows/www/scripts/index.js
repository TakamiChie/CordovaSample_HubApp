// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkID=397704
// ページ上のコードをデバッグするには、Ripple で読み込むか、Android デバイス/エミュレーターで読み込みます。アプリを起動し、ブレークポイントを設定します。
// 次に、JavaScript コンソールで "window.location.reload()" を実行します。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
      // Cordova の一時停止を処理し、イベントを再開します
      document.addEventListener( 'pause', onPause.bind( this ), false );
      document.addEventListener( 'resume', onResume.bind( this ), false );
        
      // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
      WinJS.UI.Pages.define("index.html");
      WinJS.Namespace.define("Sample", {
        toolbarCommand: WinJS.UI.eventHandler(function (ev) {
          var command = ev.currentTarget;
          if (command.winControl) {
            switch (command.winControl.id) {
              case "section1_addbutton":
                var div = $("<div>");
                var color = ["silver", "orange", "yellow", "red", "cyan"];
                div.css("background-color", color[Math.round(Math.random() * color.length)]);
                div.show();
                $("#section1 .content").append(div);
                break;
              case "section1_clearbutton":
                $("#section1 .content").empty();
                break;
            }
          }
        })
      });

      WinJS.UI.processAll();
    };

    function onPause() {
        // TODO: このアプリケーションは中断されました。ここで、アプリケーションの状態を保存します。
    };

    function onResume() {
        // TODO: このアプリケーションが再アクティブ化されました。ここで、アプリケーションの状態を復元します。
    };
} )();