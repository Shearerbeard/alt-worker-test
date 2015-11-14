/**
 * Created by shearerbeard on 11/14/15.
 */

console.info("Test");

import Alt from "alt";
import chromeDebug from "alt/utils/chromeDebug";
import immutableStore from "alt/utils/ImmutableUtil";
import {Record} from "immutable";

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
    }

    onTest() {
        this.count++;
    }
}

const testStore = alt.createStore(
    TestStore, "Test Store"
);

self.onmessage = (msg) => {
    if(msg.data.key = "test") {
        testActions.test();
    }
};

testStore.listen((state) => self.postMessage({count: state.count}));
