import Bowser from "bowser";

function isOldBrowser(params) {
    const browser = Bowser.getParser(window.navigator.userAgent).getBrowser();
        const isOldChrome =
          browser.name === "Chrome" && browser.version.includes("49");

        console.log(browser, isOldChrome);

    return isOldChrome;
}

export {isOldBrowser}