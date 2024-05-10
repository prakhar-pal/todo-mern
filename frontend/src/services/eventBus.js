class EventBus {
    constructor() {
        this.handlerMap = {};
    }

    on(event, callback) {
        const handlers = this.handlerMap[event] ?? [];
        handlers.push(callback);
        this.handlerMap[event] = handlers;
    }

    off(event, callback) {
        let handlers = this.handlerMap[event];
        if(handlers) {
            handlers = handlers.filter(handler => callback);
        }
        this.handlerMap[event] = handlers;
    }

    dispatch(event) {
        const handlers = this.handlerMap[event];
        handlers?.forEach(handler => handler());
    }
}

export default new EventBus();
