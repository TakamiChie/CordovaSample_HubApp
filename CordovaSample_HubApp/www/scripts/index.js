// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkID=397704
// ページ上のコードをデバッグするには、Ripple で読み込むか、Android デバイス/エミュレーターで読み込みます。アプリを起動し、ブレークポイントを設定します。
// 次に、JavaScript コンソールで "window.location.reload()" を実行します。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    var item = [];
    function onDeviceReady() {
      // Cordova の一時停止を処理し、イベントを再開します
      document.addEventListener( 'pause', onPause.bind( this ), false );
      document.addEventListener('resume', onResume.bind(this), false);

      for (var i = 1; i < 6; i++) {
        item.push({ title: "item" + i, text: "test" + i, color: randomColor() });
      }

      // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
      WinJS.UI.Pages.define("index.html");
      WinJS.Namespace.define("Sample", {
        data: new WinJS.Binding.List(item),
        toolbarCommand: WinJS.UI.eventHandler(function (ev) {
          // ツールバーイベントハンドラ
          var command = ev.currentTarget;
          if (command.winControl) {
            switch (command.winControl.id) {
              // section1
              case "section1_addbutton":
                // 項目追加
                var div = document.createElement("div");
                var owner = document.querySelector("#section1 .content");
                div.style.backgroundColor = randomColor();
                // アニメ追加
                div.addEventListener("pointerdown", onPointerDown, false);
                div.addEventListener("touchstart", onPointerDown, false);
                div.addEventListener("mousedown", onPointerDown, false);
                div.addEventListener("pointerup", onPointerUp, false);
                div.addEventListener("touchend", onPointerUp, false);
                div.addEventListener("mouseup", onPointerUp, false);
                var animIndex = Math.round(Math.random() * 5);
                div.innerText = "Anim:" + animIndex;
                // Insert expanding item into document flow. This will change the position of the affected items.
                div.style.display = "block";
                div.style.position = "inherit";
                div.style.opacity = "1";
                owner.appendChild(div);
                switch (animIndex) {
                  case 0:
                    WinJS.UI.Animation.enterContent(div);
                    break;
                  case 1:
                    WinJS.UI.Animation.createAddToListAnimation(div, owner).execute();
                    break;
                  case 2:
                    WinJS.UI.Animation.createAddToSearchListAnimation(div, owner).execute();
                    break;
                  case 3:
                    WinJS.UI.Animation.createExpandAnimation(div, owner).execute();
                    break;
                  case 4:
                    WinJS.UI.Animation.slideUp(div);
                    break;
                  case 5:
                    WinJS.UI.Animation.showPopup(div, owner);
                    break;
                }
                break;
              case "section1_clearbutton":
                // 項目削除
                var owner = document.querySelector("#section1 .content");
                while (owner.firstChild) {
                  owner.removeChild(owner.firstChild);
                }
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

    function onPointerDown(evt) {
      WinJS.UI.Animation.pointerDown(evt.target);
      evt.preventDefault();
    }

    function onPointerUp(evt) {
      WinJS.UI.Animation.pointerUp(evt.target);
      evt.preventDefault();
    }

    function randomColor() {
      var color = ["silver", "orange", "yellow", "red", "cyan"];
      return color[Math.round(Math.random() * (color.length - 1))];
    }
})();