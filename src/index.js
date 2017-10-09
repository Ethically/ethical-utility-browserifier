import { delegates, mocks } from 'mock-browser'

const { MockBrowser } = mocks
const { AbstractBrowser } = delegates

export const browserify = () => {
    const window = MockBrowser.createWindow()
    const browser = new AbstractBrowser({ window })
    global.window = browser.getWindow()
    global.document = browser.getDocument()
    global.location = browser.getLocation()
    global.navigator = browser.getNavigator()
    global.history = browser.getHistory()
    global.localStorage = browser.getLocalStorage()
    global.sessionStorage = browser.getSessionStorage()
}

export const unbrowserify = () => {
    const document = global.document
    global.window =
    global.document =
    global.location =
    global.navigator =
    global.history =
    global.localStorage =
    global.sessionStorage = undefined
    return document
}
