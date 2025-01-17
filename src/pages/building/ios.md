---
previousText: 'Running Overview'
previousUrl: '/docs/building/running'
nextText: 'Running on Android'
nextUrl: '/docs/building/android'
---

# iOSでの開発

このガイドでは、[Capacitor](/docs/faq/glossary#capacitor) または [Cordova](/docs/faq/glossary#cordova)を使用してIonicアプリをiOSのシミュレータとデバイス上で実行する方法について説明します。

> iOS上でIonicアプリケーションを実行するための2つの方法があります。[Xcode上で実行すること](#running-with-xcode) と [Ionic CLIを使って実行することです](#running-with-the-ionic-cli)。 Xcode上での実行は一般的で安定していますが、Ionic CLIを使った方法は[ライブリロード](/docs/faq/glossary#livereload)を利用することができます。

## プロジェクト設定

アプリをiOSシミュレータやデバイスにデプロイする前に、ネイティブのプロジェクトを設定する必要があります。

1. <strong>ネイティブのプロジェクトが存在しない場合は、以下を実行します。</strong>

    Capacitorの場合は、以下を実行します。

    ```shell
    $ ionic capacitor add ios
    ```

    Cordovaの場合は、以下を実行します。

    ```shell
    $ ionic cordova prepare ios
    ```

1. <strong>[Package ID](/docs/faq/glossary#package-id)を設定</strong>

    Capacitorの場合は、`capacitor.config.json` ファイルを開き、`appId`プロパティを変更します。

    Cordovaの場合は、`config.xml`ファイルを開き、`id`を変更し`<widget>`でルートを設定します。要素の属性を変更します。詳しくは [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) をご覧ください。

1. <strong><b>Xcode</b>でプロジェクトを開きます</strong>

    Capacitorの場合は、次のコマンドを実行してXcodeでアプリを開きます。

    ```shell
    $ ionic capacitor open ios
    ```

    Cordovaの場合は、Xcodeを起動したあと、**File** &raquo; **Open**からアプリを探します。アプリのディレクトリ`platforms/ios`を開きます。

1. <strong><b>Projectのナビゲーション</b>から、プロジェクトのrootにあるproject editorを開きます。**Identity**で、設定されている Package ID は Bundle Identifier と一致していることを確認します。</strong>

    ![Xcode Identity Setup](/docs/assets/img/running/ios-xcode-identity-setup.png)

1. <strong>同じproject editorの<b>Signing</b>で、セクションで、<b>Automatically manage signing</b>が有効になっていることを確認します。</strong> 次に、Development Teamを選択してください。Development Teamを選択すると、Xcodeは自動的にプロビジョニングと署名を準備しようとします。

    ![Xcode Signing Setup](/docs/assets/img/running/ios-xcode-signing-setup.png)

## Xcodeで実行する

このワークフローでは、Xcodeは一般的なコンパイルと署名の問題を自動的に修正できます。

1. <strong>Ionicアプリを開発し、それをネイティブプロジェクトと同期させます。</strong>

    変更が検知がある度に、iOSシミュレータやデバイスが変更を検知するより前に、IonicアプリをWebアセットにビルドする必要があります。その後、Webアセットをネイティブプロジェクトにコピーします。幸いなことに、このプロセスはIonic CLIコマンドひとつで簡単にできます。

    Capacitorの場合は、以下を実行します。

    ```shell
    $ ionic capacitor copy ios
    ```

    Cordovaの場合は、以下を実行します。

    ```shell
    $ ionic cordova prepare ios
    ```

1. <strong>Xcodeで、目的のシミュレータまたはデバイスを選択して再生ボタンをクリックします。</strong>

    ![Xcode Play Button Area](/docs/assets/img/running/ios-xcode-play-button-area.png)

## Ionic CLIを使用して実行する

Ionic CLIは、コマンドひとつで、Ionicアプリを作成、コピーし、iOSシミュレータやデバイスにデプロイできます。　`ionic serve`のような[ライブリロード](/docs/faq/glossary#livereload) 機能を利用するために、開発用のサーバを遅延することもできます。

With live-reload, changes made to the app's source files trigger a rebuild of web assets and the changes are reflected on the simulator or device without having to deploy again.

> **Warning**: For iOS devices, the device and the computer need to be on the same Wi-Fi network. An external URL for the dev server is also required so the device can connect to it. Use `--address=0.0.0.0` to bind to external addresses.

### Live-reload with Capacitor

Capacitor does not yet have a way to build native projects. It relies on Xcode to build and deploy app binaries. However, the Ionic CLI can boot up a live-reload server and configure Capacitor to use it with a single command.

Run the following, then select a target simulator or device and click the play button in Xcode:

```shell
$ ionic capacitor run ios -l --address=0.0.0.0
```

### Live-reload with Cordova

Cordova can build and deploy native projects programmatically.

To boot up a live-reload server, build, and deploy the app, run the following:

```shell
$ ionic cordova run ios -l --address=0.0.0.0
```

## Debugging iOS Apps

Once an app is running on an iOS device or simulator, it can be debugged in Safari.

### Safari Web Inspectorを使う

Safariは、iOSシミュレータとデバイスに対してWeb Inspectorをサポートしています。**Develop**メニューを開き、シミュレータまたはデバイスを選択してから、Ionicアプリを選択してWeb Inspectorを開きます。

> **Develop** が表示されない場合は、 **Safari** &raquo; **Preferences** &raquo; **Advanced** &raquo; **Show Develop menu in menu bar** を有効にしてください。

![Safari Web Inspector](/docs/assets/img/running/ios-safari-web-inspector-timelines.png)

## ネイティブログの表示

Xcodeで実行している場合、ネイティブログはXcodeの **Console** にあります。

> **Console** が表示されない場合, **View** &raquo; **Debug Area** &raquo; **Activate Console**を有効化してください。

![Xcode Console](/docs/assets/img/running/ios-xcode-console.png)
