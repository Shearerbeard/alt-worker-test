/**
 * Created by shearerbeard on 11/14/15.
 */

console.info("Test");

import Alt from "alt";
import chromeDebug from "alt/utils/chromeDebug";
import immutable from "alt/utils/ImmutableUtil";
import {Record} from "typed-immutable";

const alt = new Alt();
try {
    Alt.debug(alt);
} catch(e) {
    console.info("error with debug")
}

class TestActions {
    constructor() {
        this.generateActions("test")
    }
}

const testActions = alt.createActions(TestActions);

class TestStore {
    constructor() {
        this.bindActions(testActions);
        this.count = 0;
        this.state = Record({
            count: Number(1)
        })()
    }

    onTest() {
        this.setState(
            this.state.set("count", this.state.count + 1)
        );
    }
}

const testStore = alt.createStore(
    immutable(TestStore), "Test Store"
);

self.onmessage = (msg) => {
    if(msg.data.key = "test") {
        testActions.test();
    }
};

testStore.listen((state) => self.postMessage({count: state.count}));
