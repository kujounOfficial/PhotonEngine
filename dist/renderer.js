import { WebGPUManager } from "./webgpu_manager.js";
export class Renderer {
    webgpu_manager = new WebGPUManager();
    renderEvents = new Array();
    async init(canvas) {
        const devicePixelRatio = window.devicePixelRatio;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        await this.webgpu_manager.init(canvas);
    }
    registerRenderEvent(event) {
        this.renderEvents.push(event);
    }
    run() {
        const renderLoop = () => {
            this.render();
            requestAnimationFrame(renderLoop);
        };
        requestAnimationFrame(renderLoop);
    }
    render() {
        for (let renderEvent of this.renderEvents) {
            renderEvent();
        }
    }
}
