import {WebGPUManager} from "./webgpu_manager.js";

export class Renderer {
    public webgpu_manager: WebGPUManager = new WebGPUManager();

    private renderEvents: Array<() => void> = new Array<() => void>();

    public async init(canvas: HTMLCanvasElement): Promise<void>  {

        const devicePixelRatio = window.devicePixelRatio;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;

        await this.webgpu_manager.init(canvas);
    }

    public registerRenderEvent(event: () => void) {
        this.renderEvents.push(event);
    }

    public run() {
        const renderLoop = () => {
            this.render();
            requestAnimationFrame(renderLoop);
        };
        requestAnimationFrame(renderLoop);
    }

    public render() {
        for (let renderEvent of this.renderEvents) {
            renderEvent();
        }
    }
}