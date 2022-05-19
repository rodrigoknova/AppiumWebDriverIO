const path = require("path");

exports.config = {
  port: 4723,
  path: "/wd/hub",
  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",
  capabilities: [
    {
      platformName: "Android",
      platformVersion: "11.0",
      deviceName: "Pixel 4 API 30",
      automationName: "UiAutomator2",
      app: path.join(
        process.cwd(),
        "app\\android\\Android-NativeDemoApp-0.4.0.apk"
      ),
      appPackage: "com.wdiodemoapp",
      appActivity: "com.wdiodemoapp.MainActivity",
      appWaitActivity: "com.wdiodemoapp.MainActivity",
    },
  ],
};
